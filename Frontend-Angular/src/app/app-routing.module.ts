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


const routes: Routes = [
  { path: '', component: LandingComponent},

  { path: 'inicio', component: InicioComponent},
  { path: 'registro', component:  RegistroComponent},
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
