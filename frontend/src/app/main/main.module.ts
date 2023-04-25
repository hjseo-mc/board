import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { MainComponent } from "./main.component";
import {ListModule} from "../list/list.module";

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ListModule
  ],
  exports: [
    MainComponent
  ]
})

export class MainModule {}
