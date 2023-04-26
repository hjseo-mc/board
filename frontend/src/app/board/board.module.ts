import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListModule } from './list/list.module';
import { PostModule } from './post/post.module';
import { EditorModule } from './editor/editor.module';
import { RouterModule } from '@angular/router';



@NgModule({
  imports: [
    CommonModule,
    ListModule,
    PostModule,
    EditorModule,
    RouterModule
  ]
})
export class BoardModule { }
