import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainLayoutComponent} from "./layout/main/main-layout.component";
import {CommonModule} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        //  { path: '',     component: HomeComponent },
        //  { path: 'board',    component: PostListComponent },
        loadChildren: () => import('./layout/main/main-layout.module')
          .then(m => m.MainLayoutModule)
      },
    ]
  },
  // 그 외 모든 경로는 홈으로 리다이렉트
  {
    path: "**", redirectTo: "",
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: []
})
export class AppRoutingModule { }
