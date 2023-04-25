import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import {RouterModule} from "@angular/router";
import {PostModule} from "../post/post.module";
import { ChildModule } from './child/child.module';



@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ChildModule
  ],
  exports: [
    ListComponent
  ]
})
export class ListModule { }
