import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { LoginComponent } from './Components/login/login.component';
import { CartComponent } from './Components/cart/cart.component';
import { SeccionInformativaComponent } from './Components/seccion-informativa/seccion-informativa.component';
import { CarruselComponent } from './Components/carrusel/carrusel.component';
import { BannerComponent } from './Components/banner/banner.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { UserComponent } from './Components/user/user.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './Components/home/home.component';
import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';
import { RegisterComponent } from './Components/register/register.component';
import { BuscadorComponent } from './Components/buscador/buscador.component';

const AppRoutes:Routes=[

  {path:"", component:HomeComponent},
  {path:"login", component:LoginComponent},
  {path:"register", component:RegisterComponent},
  {path:"reset-password", component:ResetPasswordComponent},
  {path:"user", component:UserComponent},
  {path:"cart", component:CartComponent},
  {path:"buscador", component:BuscadorComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    CartComponent,
    SeccionInformativaComponent,
    CarruselComponent,
    BannerComponent,
    FooterComponent,
    HomeComponent,
    ResetPasswordComponent,
    RegisterComponent,
    BuscadorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(AppRoutes),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
