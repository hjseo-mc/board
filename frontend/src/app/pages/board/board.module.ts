import {NgModule} from "@angular/core";
import {HomeComponent} from "../home/home.component";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {MainLayoutRoutes} from "../../layout/main/main-layout.routing";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {BoardRoutes} from "./board.routing";
import {PostListComponent} from "./list/post-list.component";
import {PostEditorComponent} from "./editor/post-editor.component";
import {PostViewComponent} from "./view/post-view.component";


@NgModule({
  declarations: [
    PostListComponent,
    PostEditorComponent,
    PostViewComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(BoardRoutes),
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class BoardModule {}
