import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {map} from "rxjs/operators";
import {ActivatedRoute} from "@angular/router";
import {PostService} from "../service/post.service";

interface PreLoadedPost {
  title: string,
  content: string
}
@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  editorForm!: FormGroup;
  id!: number;

  constructor(
    private postService : PostService,
    private route: ActivatedRoute,
    protected fb: FormBuilder
  ) {}

  preloadPost(id: number): PreLoadedPost {
    let preloadedPost = {}
    this.postService.getPost(id).toPromise()
      .then(data => preloadedPost = data)
      .catch(error => console.log(error))
    return <PreLoadedPost>preloadedPost;
  }
  ngOnInit(): void {
    let post!: PreLoadedPost;
    this.route.params.subscribe((param) => this.id = param.id);
    if (this.id) {
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
    this.postService.updatePost(this.id, value)
  }
}
