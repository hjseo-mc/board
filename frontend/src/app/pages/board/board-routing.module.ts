import {RouterModule, Routes} from "@angular/router";
import {PostViewComponent} from "./view/post-view.component";
import {PostEditorComponent} from "./editor/post-editor.component";
import {PostListComponent} from "./list/post-list.component";
import {NgModule} from "@angular/core";

export const BoardRoutes: Routes = [
    { path: '', component: PostListComponent },
    { path: 'posts/:postId/view', component: PostViewComponent, },
    { path: 'posts/new', component: PostEditorComponent, },
    { path: 'posts/:postId/edit', component: PostEditorComponent, },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forChild(BoardRoutes)],
  exports: [RouterModule]
})
export class BoardRoutingModule {}
