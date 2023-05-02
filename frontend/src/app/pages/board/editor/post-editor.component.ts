import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {map} from "rxjs/operators";
import {ActivatedRoute, Router} from "@angular/router";
import {PostService} from "../../../service/post.service";
import {Post} from "../../../model/Post";

@Component({
  selector: 'app-editor',
  templateUrl: './post-editor.component.html',
  styleUrls: ['./post-editor.component.css']
})
export class PostEditorComponent implements OnInit {

  editorForm!: FormGroup;
  boardId!: number;
  id!: number;

  constructor(
    private postService : PostService,
    private router: Router,
    private route: ActivatedRoute,
    protected fb: FormBuilder
  ) {}

  preloadPost(id: number): Post {
    let preloadedPost = {}
    this.postService.getOneById(id).toPromise()
      .then(data => preloadedPost = data)
      .catch(error => console.log(error))
    return <Post>preloadedPost;
  }

  ngOnInit(): void {


    this.route.params.subscribe((param) => {
      if(typeof param.id === "number") this.id = param.id;
      if(typeof param.boardId === "number") this.id = param.boardId;
    })
    let post: Post = {
      title: "",
      content: "",
      boardId: this.boardId
    }
    if (this.id) {
      console.log(this.id)
      post = this.preloadPost(this.id)
    }

    this.editorForm = this.fb.group({
      title: new FormControl(post.title, [Validators.required]),
      content: new FormControl(post.content, [Validators.required])
    });

    this.editorForm.valueChanges.pipe(
      map((value) => {
        return value;
      })
    ).subscribe();

  }
  save(){
    const controls = this.editorForm.controls;
    this.editorForm.setValue({
      title: controls.title.value.trim(),
      content: controls.content.value.trim()
    });
    const value = this.editorForm.value;

    if (this.id) { this.postService.updateOne(this.id, value) }
    else { this.postService.createOne(value).toPromise().then(
      (data: any) => {this.id = data.id}
    ) }
    console.log(value)
    this.router.navigate(['','posts', this.id], {relativeTo: this.route})
  }
}
