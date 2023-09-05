import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-algoritmo',
  templateUrl: './algoritmo.component.html',
  styleUrls: ['./algoritmo.component.css']
})

export class AlgoritmoComponent implements OnInit {
  value1 = 140
  value2 = 90
  mostrarTarjeta = false;
  mostrarTarjeta2 = false;
  mostrarTarjeta3 = false;
  mostrarTarjeta4 = false;
  mostrarTarjeta5 = false;
  mostrarTarjeta6 = false;
  mostrarTarjeta7 = false;
  mostrarTarjeta8 = false;
  mostrarTarjeta9 = false;
  mostrarTarjeta10 = false;
  mostrarTarjeta11 = false;

  ocultar1 = true;
  ocultar2 = true;
  ocultar3 = true;
  ocultar4 = true;
  ocultar5 = true;
  ocultar6 = true;
  ocultar7 = true;
  ocultar8 = true;
  ocultar9 = true;
  ocultar10 = true;
  ocultar11 = true;
  ocultar12 = true;
  ocultar13= true;
  ocultar14 = true;
  ocultar15 = true;
  ocultar16 = true;
  ocultar17 = true;
  ocultar18 = true;
  constructor() {}

  ngOnInit() {
    // Create a form group

  }


  guardar(): void {
    // Obtener los valores de las variables
    const value1 = this.value1;
    const value2 = this.value2;
    
    if (this.value1 > 140 && this.value2 < 90) {
      // Mostrar una tarjeta
      this.mostrarTarjeta = true;
    }

  }

  q1si(): void {
      this.mostrarTarjeta2 = true;
      this.ocultar1 = false;
      this.ocultar2 = false;
  }

  q2si(): void {
    this.mostrarTarjeta11 = true
    this.ocultar3 = false;
    this.ocultar4 = false;
    this.ocultar5 = false;
    this.ocultar6 = false;
    this.ocultar7 = false;
    this.ocultar8 = false;
    this.ocultar9 = false;
    this.ocultar10 = false;
    this.ocultar11 = false;
    this.ocultar12 = false;
    this.ocultar13 = false;
    this.ocultar14 = false;
    this.ocultar15 = false;
    this.ocultar16 = false;
    this.ocultar17 = false;
    this.ocultar18 = false;
  }

  q2no(): void {
    this.mostrarTarjeta3 = true;
    this.ocultar3 = false;
    this.ocultar4 = false;
  }

  q3no(): void {
    this.mostrarTarjeta4 = true;
    this.ocultar5= false;
    this.ocultar6 = false;
  }

  q4no(): void {
    this.mostrarTarjeta5 = true;
    this.ocultar7 = false;
    this.ocultar8 = false;
  }

  q5no(): void {
    this.mostrarTarjeta6 = true;
    this.ocultar9 = false;
    this.ocultar10 = false;
  }

  q6no(): void {
    this.mostrarTarjeta7 = true;
    this.ocultar11 = false;
    this.ocultar12 = false;
  }

  q7no(): void {
    this.mostrarTarjeta8 = true;
    this.ocultar13 = false;
    this.ocultar14 = false;
  }

  q8no(): void {
    this.mostrarTarjeta9 = true;
    this.ocultar15 = false;
    this.ocultar16 = false;
  }

  q9no(): void {
    this.mostrarTarjeta10 = true;
    this.ocultar17 = false;
    this.ocultar18 = false;
  }


}

