import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientesComponent } from './Pages/clientes/clientes.component';
import { InicioComponent } from './Pages/inicio/inicio.component';
import { PanelComponent } from './Pages/panel/panel.component';
import { LandingComponent } from './Paginas/landing/landing.component';
import { PagosComponent } from './Pages/pagos/pagos.component';
import { PerfilComponent } from './Pages/perfil/perfil.component';
import { PAdminComponent } from './Pages/p-admin/p-admin.component';
import { RegistroComponent } from './Pages/registro/registro.component';
import { AcercaComponent } from './Pages/acerca/acerca.component';
import { PanelUComponent } from './Pages/panel-u/panel-u.component';
import { PUserComponent } from './Pages/p-user/p-user.component';
import { PerfilUComponent } from './Pages/perfil-u/perfil-u.component';
import { ProyectosComponent } from './Pages/proyectos/proyectos.component';
import { PagosUserComponent } from './Pages/pagos-user/pagos-user.component';
import { AreaComponent } from './Pages/area/area.component';
import { CarpetasComponent } from './Pages/carpetas/carpetas.component';
import { ArchivosComponent } from './Pages/archivos/archivos.component';
import { DetalleProyectoComponent } from './Pages/detalle-proyecto/detalle-proyecto.component';
import { LoginAComponent } from './Pages/login-a/login-a.component';
import { PlanesComponent } from './Pages/planes/planes.component';
import { ClienteGuard } from './guardianes/cliente.guard';


const routes: Routes = [
  { path: '', component: LandingComponent },

  { path: 'inicio', component: InicioComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'acerca', component: AcercaComponent },
  { path: 'area', component: AreaComponent },
  { path: 'login', component: LoginAComponent },
  {
    path: 'menu_2', component: PanelUComponent, canActivate:[ClienteGuard], children: [
      { path: 'p-user', component: PUserComponent, canActivate:[ClienteGuard] },
      { path: 'detalle-carpeta/:idCarpeta', component: DetalleProyectoComponent, canActivate:[ClienteGuard] },
      { path: 'area/:idArchivo', component: AreaComponent },
      { path: 'area', component: AreaComponent },
      { path: 'perfil-user', component: PerfilUComponent },
      { path: 'proyectos', component: ProyectosComponent },
      { path: 'carpetas', component: CarpetasComponent },
      { path: 'archivos', component: ArchivosComponent },
      { path: 'pagos_user', component: PagosUserComponent },


    ]
  },
  {
    path: 'menu', component: PanelComponent, children: [{
      path: 'p-admin', component: PAdminComponent
    },
    { path: 'clientes', component: ClientesComponent },
    { path: 'perfil', component: PerfilComponent },
    { path: 'pagos', component: PagosComponent },
    { path: 'planes', component: PlanesComponent },
    ]
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
