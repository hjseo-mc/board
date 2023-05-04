import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import {CommonModule} from "@angular/common";
import {MainLayoutRoutes, MainLayoutRoutingModule} from "./main-layout.routing.module";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {BoardModule} from "../../pages/board/board.module";
import {MainLayoutComponent} from "./main-layout.component";
import {ComponentsModule} from "../../components/components.module";
import {HomeModule} from "../../pages/home/home.module";

@NgModule({
  declarations: [
    MainLayoutComponent
  ],
  imports: [
    CommonModule,
    MainLayoutRoutingModule,
    FormsModule,
    ComponentsModule,
    HttpClientModule,
  ],
})

export class MainLayoutModule {}
