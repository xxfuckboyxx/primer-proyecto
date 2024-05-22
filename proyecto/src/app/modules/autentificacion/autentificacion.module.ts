import { NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';

import { AutentificacionRoutingModule } from './autentificacion-routing.module';
import { RegistroComponent } from './pages/registro/registro.component';
import { IniciodesesionComponent } from './pages/iniciodesesion/iniciodesesion.component';


@NgModule({
  declarations: [
    RegistroComponent,
    IniciodesesionComponent
  ],
  imports: [
    CommonModule,
    AutentificacionRoutingModule
  ],
  exports:[
    IniciodesesionComponent,
    RegistroComponent
  ]
})
export class AutentificacionModule { }
