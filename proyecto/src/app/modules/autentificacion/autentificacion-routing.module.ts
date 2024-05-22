import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './pages/registro/registro.component';
import { InicioComponent } from '../inicio/pages/inicio/inicio.component';
import { IniciodesesionComponent } from './pages/iniciodesesion/iniciodesesion.component';

const routes: Routes = [
  {
    path:"registro",component:RegistroComponent
  },
  {
    path:"iniciodesicion",component:IniciodesesionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutentificacionRoutingModule { }
