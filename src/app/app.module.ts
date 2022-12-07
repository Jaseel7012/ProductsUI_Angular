import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsAddComponent } from './products-add/products-add.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { NavbarComponent } from './navbar/navbar.component';
const myroute:Routes=[
  {
    path:"",
    component:ProductsAddComponent
  },
  {
    path:"view",
    component:ViewProductComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    ProductsAddComponent,
    ViewProductComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myroute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
