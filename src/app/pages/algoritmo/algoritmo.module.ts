import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlgoritmoRoutingModule } from './algoritmo-routing.module';
import { AlgoritmoComponent } from './algoritmo.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {NgIf} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    AlgoritmoComponent
  ],
  imports: [
    CommonModule,
    AlgoritmoRoutingModule,
    MatFormFieldModule, 
    MatInputModule, 
    FormsModule, 
    NgIf, 
    MatButtonModule, 
    MatIconModule,
    MatCardModule
  ]
})
export class AlgoritmoModule { 
}
