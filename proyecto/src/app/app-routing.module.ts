import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Vista1Component } from './vista1/vista1.component';
import { InicioComponent } from './modules/inicio/pages/inicio/inicio.component';


const routes: Routes = [
  {
    path:"",component:Vista1Component
  },
  {
    path:"",component:InicioComponent
  },
  {
    path:"",loadChildren:()=>import('./modules/inicio/inicio.module').then(m=>m.InicioModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
