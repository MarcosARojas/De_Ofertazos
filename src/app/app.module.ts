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
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './Components/home/home.component';
import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';
import { RegisterComponent } from './Components/register/register.component';
import { BuscadorComponent } from './Components/buscador/buscador.component';
import { DestacadosComponent } from './Components/destacados/destacados.component';
import { TusCategoriasComponent } from './Components/tus-categorias/tus-categorias.component';
import { PreguntasfrecuentesComponent } from './Components/preguntasfrecuentes/preguntasfrecuentes.component';
import { PerfilShopComponent } from './Components/shop/perfil-shop/perfil-shop.component';
import { CatalogoShopComponent } from './Components/shop/catalogo-shop/catalogo-shop.component';
import { DatosuserComponent } from './Components/user/datosuser/datosuser.component';
import { MiscomprasComponent } from './Components/user/miscompras/miscompras.component';
import { NotificacionesComponent } from './Components/user/notificaciones/notificaciones.component';
import { EmpesaravenderComponent } from './Components/user/empesaravender/empesaravender.component';
import { UserComponent } from './Components/user/user/user.component';
import { MiTiendaComponent } from './Components/user/mi-tienda/mi-tienda.component';
import { MisPublicacionesComponent } from './Components/user/mis-publicaciones/mis-publicaciones.component';
import { MisVentasComponent } from './Components/user/mis-ventas/mis-ventas.component';
import { TerminosYCondicionesComponent } from './Components/terminos-ycondiciones/terminos-ycondiciones.component';
import { ContactoSoporteComponent } from './Components/contacto-soporte/contacto-soporte.component';


const AppRoutes:Routes=[

  {path:"", component:HomeComponent},
  {path:"login", component:LoginComponent},
  {path:"register", component:RegisterComponent},
  {path:"reset-password", component:ResetPasswordComponent},
  {path:"user", component:UserComponent},
  {path:"cart", component:CartComponent},
  {path:"buscador", component:BuscadorComponent},
  {path:"datos-user", component:DatosuserComponent},
  {path:"notificaciones", component:NotificacionesComponent},
  {path:"mis-compras", component:MiscomprasComponent},
  {path:"empesaravender", component:EmpesaravenderComponent},
  {path:"mi-tienda", component:MiTiendaComponent},
  {path:"mis-publicaciones", component:MisPublicacionesComponent},
  {path:"mis-ventas", component:MisVentasComponent},
  {path:"terminos-y-condiciones", component:TerminosYCondicionesComponent},
  {path:"contacto-soporte", component:ContactoSoporteComponent}

  
  

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
    BuscadorComponent,
    DestacadosComponent,
    TusCategoriasComponent,
    DatosuserComponent,
    MiscomprasComponent,
    NotificacionesComponent,
    EmpesaravenderComponent,
    PreguntasfrecuentesComponent,
    PerfilShopComponent,
    CatalogoShopComponent,
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
