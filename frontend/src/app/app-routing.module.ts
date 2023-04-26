import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListComponent} from "./board/list/list.component";
import {MainComponent} from "./main/main.component";
import {PostComponent} from "./board/post/post.component";
import {EditorComponent} from "./board/editor/editor.component";

const routes: Routes = [
    {path: '',  component: MainComponent},
    {path: 'board',
      children: [
        {path: 'list', component: ListComponent},
        {path: 'post/:id', component: PostComponent},
        {path: 'new', component: EditorComponent},
        {path: 'edit/:id', component: EditorComponent},
        {path: "**", redirectTo: 'list', pathMatch: 'full'}
      ]
  },
  {path: "**", redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
