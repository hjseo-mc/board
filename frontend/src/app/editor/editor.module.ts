import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorComponent } from './editor.component';
import {RouterModule} from "@angular/router";
import {ListModule} from "../list/list.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {PostService} from "../service/post.service";
import {ApiGatewayService} from "../service/ApiGatewayService";



@NgModule({
  declarations: [
    EditorComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    EditorComponent
  ],
  providers: [
    ApiGatewayService,
    PostService
  ]

})
export class EditorModule { }
