import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoComponent } from './page/producto/producto.component';
import { PlacamadreComponent } from './page/placamadre/placamadre.component';
import { RamComponent } from './page/ram/ram.component';
import { GraficaComponent } from './page/grafica/grafica.component';
import { FuentesComponent } from './page/fuentes/fuentes.component';
import { PcArmadasComponent } from './page/pc-armadas/pc-armadas.component';

const routes: Routes = [
  {
    path:"productos",component:ProductoComponent
  },
  {
    path:"procesadores",component:PlacamadreComponent
  },
  {
    path:"placas-madres",component:PlacamadreComponent
  },
  {
    path:"rams",component:RamComponent
  },
  {
    path:"graficas",component:GraficaComponent
  },
  {
    path:"fuentes",component:FuentesComponent
  },
  {
    path:"pc-armadas",component:PcArmadasComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }
