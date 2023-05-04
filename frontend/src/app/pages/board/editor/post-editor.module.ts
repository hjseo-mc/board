import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PostEditorComponent} from "./post-editor.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    PostEditorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
})
export class PostEditorModule { }
