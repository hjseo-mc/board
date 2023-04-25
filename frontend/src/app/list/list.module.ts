import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import {RouterModule} from "@angular/router";
import {PostModule} from "../post/post.module";



@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PostModule
  ],
  exports: [
    ListComponent
  ]
})
export class ListModule { }
