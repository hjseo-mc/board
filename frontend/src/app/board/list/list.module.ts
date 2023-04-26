import { NgModule } from '@angular/core';
import { ListComponent } from './list.component';
import {RouterModule} from "@angular/router";
import {PostService} from "../../service/post.service";
import {ApiGatewayService} from "../../service/ApiGatewayService";
import {NavModule} from "../../common/nav/nav.module";
import {FootModule} from "../../common/foot/foot.module";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ListComponent
  ],
  providers: [
    ApiGatewayService,
    PostService
  ]
})
export class ListModule { }
