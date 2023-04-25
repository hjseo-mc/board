import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PostComponent} from "./post.component";
import {RouterModule} from "@angular/router";
import {ListModule} from "../list/list.module";


@NgModule({
  declarations: [PostComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    PostComponent
  ]
})
export class PostModule { }
