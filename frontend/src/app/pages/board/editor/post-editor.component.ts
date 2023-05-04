import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {map} from "rxjs/operators";
import {ActivatedRoute, Router} from "@angular/router";
import {PostService} from "../../../service/post.service";
import {Post, PreloadPost} from "../../../model/Post";

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
  ) {}

  initForm(preLoadedPost?: PreloadPost): void {
    const title = preLoadedPost?.title || '';
    const content = preLoadedPost?.content || '';

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
    this.route.params.subscribe((param) => {
      this.postId = param.postId;
      this.boardId = param.boardId;
      if (this.postId) { this.initForm(this.getPostData(this.postId)) }
      else { this.initForm() }
    })

    this.editorForm.valueChanges.pipe(
      map((value) => {
        return value;
      })
    ).subscribe();
  }

  submit(){
    const { title, content, boardId } = this.editorForm.controls;

    const values = {
      title: title.value.trim(),
      content: content.value.trim(),
      boardId: boardId.value.trim(),
    };

    if (this.postId) {
      this.postService.updateOne(this.postId, { id: this.postId, ...values })
    }
    else {
      this.postService.createOne(values).subscribe((data) => {
        this.postId = data.id;
        this.router.navigate(['','boards', this.boardId, 'posts', this.postId, 'view'])
      });
    }

  }

  getPostData(id: number): PreloadPost {
    let preLoadedPost: {} = {};
    this.postService.getOneById(id).toPromise()
      .then(data => preLoadedPost = data)
      .catch(error => console.log(error))
    return <PreloadPost>preLoadedPost;
  }
}
