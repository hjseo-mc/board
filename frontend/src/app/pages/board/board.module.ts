import {NgModule} from "@angular/core";
import {HomeComponent} from "../home/home.component";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {MainLayoutRoutes} from "../../layout/main/main-layout.routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {BoardRoutes, BoardRoutingModule} from "./board-routing.module";
import {PostListComponent} from "./list/post-list.component";
import {PostEditorComponent} from "./editor/post-editor.component";
import {PostViewComponent} from "./view/post-view.component";
import {PostEditorModule} from "./editor/post-editor.module";
import {TitleComponent} from "./title/title.component";
import {BoardComponent} from "./board.component";


@NgModule({
  declarations: [
    BoardComponent,
    TitleComponent,
    PostListComponent,
    PostViewComponent,
  ],
  imports: [
    CommonModule,
    PostEditorModule,
    BoardRoutingModule,
  ],
})
export class BoardModule {}
