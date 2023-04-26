import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {map} from "rxjs/operators";
import {ActivatedRoute, Router} from "@angular/router";
import {PostService} from "../../service/post.service";

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
    private router: Router,
    protected fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((param:any) => this.id = param?.id);
    //초기화
    this.editorForm = this.fb.group({
      id: new FormControl(''),
      title: new FormControl('', [Validators.required]),
      content: new FormControl('', [Validators.required])
    }); 

    if(this.id){
      this.postService.getPost(this.id).subscribe(res => {
        this.editorForm.setValue({
          id: res?.id,
          title: res?.title,
          content: res?.content
        })
      });
    }

    this.editorForm.valueChanges.pipe(
      map((value) => {
        return value;
      })
    ).subscribe();

  }
  save(){
    const controls = this.editorForm.controls;
    this.editorForm.setValue({
      id: controls?.id.value,
      title: controls?.title.value.trim(),
      content: controls?.content.value.trim()
    });
    const value = this.editorForm.value;

    if(this.id) {
      this.postService.updatePost(this.id, value).toPromise().then(() => this.router.navigate(["", "view", this.id], {relativeTo: this.route}));
    }else{
      this.postService.createPost(value).toPromise().then(() => this.router.navigate(["list"], {relativeTo: this.route}) );
    }    
  }
}
