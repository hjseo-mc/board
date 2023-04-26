import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MainModule} from "./main/main.module";
import {ApiGatewayService} from "./service/ApiGatewayService";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {ListModule} from "./list/list.module";
import {FootModule} from "./common/foot/foot.module";
import {NavModule} from "./common/nav/nav.module";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [ApiGatewayService],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
