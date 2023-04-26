import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListComponent} from "./list/list.component";
import {MainComponent} from "./main/main.component";
import {PostComponent} from "./post/post.component";
import {EditorComponent} from "./editor/editor.component";

const routes: Routes = [
  {
    path: '',
    children: [
      {path: '',  component: MainComponent},
      {path: 'posts', component: ListComponent},
      {path: 'post/:id', component: PostComponent},
      {path: 'posts/new', component: EditorComponent},
      {path: "**", redirectTo: "**", pathMatch: 'full'}
    ]
  },
  {path: "**", redirectTo: "", pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
