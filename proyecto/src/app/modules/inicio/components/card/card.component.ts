import { Component } from '@angular/core';

import { Computadoras } from 'src/app/models/computadoras';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  public info: Computadoras[];
  constructor() {
    this.info = [
{
id: "",
imagen: "",
procesador: "i3-7100",
ram: 16,
almacenamiento: 500,
tipodealmacenamiento: "ssd",
grafica: "GT730"
},
{
id: "",
imagen: "",
procesador: "i7-7700",
ram: 32,
almacenamiento: 1000,
tipodealmacenamiento: "ssd",
grafica: "GTX1650"
},
{
id: "",
imagen: "",
procesador: "i3-7100",
ram: 16,
almacenamiento: 500,
tipodealmacenamiento: "ssd",
grafica: "GT730"
},
{
id: "",
imagen: "",
procesador: "i3-7100",
ram: 16,
almacenamiento: 500,
tipodealmacenamiento: "ssd",
grafica: "GT730"
},
{
id: "",
imagen: "",
procesador: "i3-7100",
ram: 16,
almacenamiento: 500,
tipodealmacenamiento: "ssd",
grafica: "GT730"
}
]
}
}
