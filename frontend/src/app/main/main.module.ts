import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { MainComponent } from "./main.component";
import { ListModule } from "../list/list.module";
import { EditorModule } from '../editor/editor.module';
import { NavModule } from "../common/nav/nav.module";
import { FootModule } from "../common/foot/foot.module";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ListModule,
    FootModule,
    NavModule
  ],
  exports: [
    MainComponent
  ]
})

export class MainModule {}
