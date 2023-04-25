import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { MainComponent } from "./main.component";
import {ListModule} from "../list/list.module";
import { PostModule } from '../post/post.module';
import { EditorModule } from '../editor/editor.module';

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ListModule,
    PostModule,
    EditorModule
  ],
  exports: [
    MainComponent
  ]
})

export class MainModule {}
