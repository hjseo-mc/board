import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {map} from "rxjs/operators";
import {ActivatedRoute, Router} from "@angular/router";
import {PostService} from "../../../service/post.service";
import {Post, PreloadedPost} from "../../../model/Post";
import {Observable} from "rxjs";

@Component({
  selector: 'app-editor',
  templateUrl: './post-editor.component.html',
  styleUrls: ['./post-editor.component.css']
})
export class PostEditorComponent implements OnInit {

  editorForm!: FormGroup;
  postId!: number;
  boardId!: number;

  constructor(
    private postService : PostService,
    private router: Router,
    private route: ActivatedRoute,
    protected fb: FormBuilder
  ) { }

  initForm(preLoadedPost?: PreloadedPost): void {
    const title = preLoadedPost?.title;
    const content = preLoadedPost?.content;
    console.log("title: ", title)
    console.log("content: ", content)
    this.editorForm = this.fb.group({
      title: new FormControl(title, [Validators.required]),
      content: new FormControl(content, [Validators.required]),
      boardId: [this.boardId, Validators.required]
    });
    if (preLoadedPost) {
      this.editorForm.addControl('postId', new FormControl(preLoadedPost.id));
    }
  }

  ngOnInit(): void {
    this.route.parent?.params.subscribe((param) => {
      this.boardId = param.boardId;
      console.log("boardId: ", this.boardId)
    })
    this.route.params.subscribe((param) => {
      this.postId = param.postId;
      console.log("postId: ", this.postId)
    })
    this.getPostData(this.postId).toPromise().then((data: PreloadedPost) => {
      if (this.postId) { this.initForm(data) }
      else { this.initForm() }
    })
    this.editorForm.valueChanges.pipe(
      map((value) => value)
    ).subscribe();
  }

  submit(){
    const { title, content, boardId } = this.editorForm.controls;
    const values : Post = {
      title: title.value.trim(),
      content: content.value.trim(),
      boardId: this.boardId
    };

    if (this.postId) {
      this.postService.updateOne(this.postId, {id: this.postId, ...values})
        .subscribe((data) => {
          this.postId = data.id;
          this.router.navigate(['','boards', this.boardId, 'posts', this.postId, 'view'])
        });
    }
    else {
      this.postService.createOne(values).subscribe((data) => {
        this.postId = data.id;
        this.router.navigate(['','boards', this.boardId, 'posts', this.postId, 'view'])
      });
    }

  }

  getPostData(id: number): Observable<PreloadedPost> {
    let preLoadedPost: {} = {};
    return this.postService.getOneById(id);
  }
}
