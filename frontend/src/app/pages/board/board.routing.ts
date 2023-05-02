import {Routes} from "@angular/router";
import {PostViewComponent} from "./view/post-view.component";
import {PostEditorComponent} from "./editor/post-editor.component";
import {PostListComponent} from "./list/post-list.component";

export const BoardRoutes: Routes = [
  { path: 'boards/:boardId', children: [
      { path: '', component: PostListComponent },
      { path: 'posts/view/:id', component: PostViewComponent, },
      { path: 'posts/new/', component: PostEditorComponent, },
      { path: 'posts/edit/:id', component: PostEditorComponent, },
      { path: '**', redirectTo: '', pathMatch: 'full' }
    ]
  }
];
