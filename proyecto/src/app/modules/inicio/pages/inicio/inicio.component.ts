import { Component } from '@angular/core';

import { Computadoras } from 'src/app/models/computadoras';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
 public info:Computadoras[];
 constructor(){
  this.info=[
    {
    id:"",
    imagen:"",
    procesador:"i3-7100",
    ram:16,
    almacenamiento:500,
    tipodealmacenamiento:"ssd",
    }
  ]
 }
}
