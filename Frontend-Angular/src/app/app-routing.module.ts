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


const routes: Routes = [
  { path: '', component: LandingComponent},
   
  { path: 'inicio', component: InicioComponent},
  { path: 'registro', component:  RegistroComponent},
  { path: 'acerca', component:  AcercaComponent},
  { path: 'area', component:  AreaComponent},
  { path: 'menu_2', component:  PanelUComponent ,children: [{
    path: 'p-user', component: PUserComponent },
    {path:'area', component:  AreaComponent },
    {path:'perfil-user', component:  PerfilUComponent },
    {path:'proyectos', component:  ProyectosComponent },
    {path:'pagos_user', component: PagosUserComponent },


  ]},
  { path: 'menu', component: PanelComponent , children: [{
    path: 'p-admin', component: PAdminComponent},
    {path: 'clientes', component: ClientesComponent},
    {path: 'perfil', component: PerfilComponent},
    {path: 'pagos', component: PagosComponent},
  ] },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
