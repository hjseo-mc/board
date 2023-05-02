import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiGatewayService } from "./service/api-gateway.service";
import { HttpClientModule } from "@angular/common/http";
import { MainLayoutComponent } from "./layout/main/main-layout.component";
import { ComponentsModule } from "./components/components.module";
import { RouterModule } from "@angular/router";
import { HomeComponent } from './pages/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule
  ],
  providers: [ApiGatewayService],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
