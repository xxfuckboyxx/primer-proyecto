import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NavbarComponent } from '../shares/componets/navbar/navbar.component';
import { FooterComponent } from '../shares/componets/footer/footer.component';
import {MatMenuModule} from '@angular/material/menu';

import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule
  ],
  exports:[
  NavbarComponent,
  FooterComponent,
  MatButtonModule,
  MatToolbarModule
  ]
})
export class SharedModule { }
