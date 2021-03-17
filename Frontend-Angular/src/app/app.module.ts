import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './Paginas/landing/landing.component';
import { InicioComponent } from './Pages/inicio/inicio.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PanelComponent } from './Pages/panel/panel.component';
import { ClientesComponent } from './Pages/clientes/clientes.component';
import { PagosComponent } from './Pages/pagos/pagos.component';
import { PerfilComponent } from './Pages/perfil/perfil.component';
import { PAdminComponent } from './Pages/p-admin/p-admin.component';
import { RegistroComponent } from './Pages/registro/registro.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    InicioComponent,
    NavbarComponent,
    SidebarComponent,
    PanelComponent,
    ClientesComponent,
    PagosComponent,
    PerfilComponent,
    PAdminComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
