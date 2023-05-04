import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "../../pages/home/home.component";
import {PostListComponent} from "../../pages/board/list/post-list.component";
import {NgModule} from "@angular/core";

export const MainLayoutRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    loadChildren: () => import('../../pages/home/home.module')
      .then(m => m.HomeModule)
  },
  {
    path: 'boards/:boardId',
    loadChildren: () => import('../../pages/board/board.module')
      .then(m => m.BoardModule)
  },
  ]

@NgModule({
  imports: [RouterModule.forChild(MainLayoutRoutes)],
  exports: [RouterModule]
})
export class MainLayoutRoutingModule {}

