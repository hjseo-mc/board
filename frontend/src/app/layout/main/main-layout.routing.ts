import { Routes } from '@angular/router';
import {HomeComponent} from "../../pages/home/home.component";
import {PostListComponent} from "../../pages/board/list/post-list.component";

export const MainLayoutRoutes: Routes = [
  { path: '',         component: HomeComponent },
  { path: 'boards/:boardId',    component: PostListComponent },
];

