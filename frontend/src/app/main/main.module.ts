import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { MainComponent } from "./main.component";
import {CommonModule} from "@angular/common";
import { BoardModule } from '../board/board.module';

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BoardModule
  ],
  exports: [
    MainComponent
  ]
})

export class MainModule {}
