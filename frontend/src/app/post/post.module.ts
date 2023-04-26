import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PostComponent} from "./post.component";
import {RouterModule} from "@angular/router";
import {ListModule} from "../list/list.module";
import {PostService} from "../service/post.service";
import {ApiGatewayService} from "../service/ApiGatewayService";


@NgModule({
  declarations: [PostComponent],
  imports: [
    CommonModule,
    CommonModule,
    RouterModule
  ],
  exports: [
    PostComponent
  ],
  providers: [
    ApiGatewayService,
    PostService
  ]
})
export class PostModule { }
