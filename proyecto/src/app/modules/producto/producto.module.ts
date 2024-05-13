import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';
import { ProductoComponent } from './page/producto/producto.component';
import { ProcesadoresComponent } from './page/procesadores/procesadores.component';
import { PlacamadreComponent } from './page/placamadre/placamadre.component';
import { RamComponent } from './page/ram/ram.component';
import { GraficaComponent } from './page/grafica/grafica.component';
import { FuentesComponent } from './page/fuentes/fuentes.component';
import { PcArmadasComponent } from './page/pc-armadas/pc-armadas.component';


@NgModule({
  declarations: [
    ProductoComponent,
    ProcesadoresComponent,
    PlacamadreComponent,
    RamComponent,
    GraficaComponent,
    FuentesComponent,
    PcArmadasComponent
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule
  ]
})
export class ProductoModule { }
