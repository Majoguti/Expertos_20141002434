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
import { AcercaComponent } from './Pages/acerca/acerca.component';
import { PanelUComponent } from './Pages/panel-u/panel-u.component';
import { NavbarUComponent } from './components/navbar-u/navbar-u.component';
import { SidebarUComponent } from './components/sidebar-u/sidebar-u.component';
import { PUserComponent } from './Pages/p-user/p-user.component';
import { PerfilUComponent } from './Pages/perfil-u/perfil-u.component';
import { ProyectosComponent } from './Pages/proyectos/proyectos.component';
import { PagosUserComponent } from './Pages/pagos-user/pagos-user.component';
import { AreaComponent } from './Pages/area/area.component';
import { CarpetasComponent } from './Pages/carpetas/carpetas.component';
import { ArchivosComponent } from './Pages/archivos/archivos.component';

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
    RegistroComponent,
    AcercaComponent,
    PanelUComponent,
    NavbarUComponent,
    SidebarUComponent,
    PUserComponent,
    PerfilUComponent,
    ProyectosComponent,
    PagosUserComponent,
    AreaComponent,
    CarpetasComponent,
    ArchivosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
