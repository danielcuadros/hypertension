import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-algoritmo',
  templateUrl: './algoritmo.component.html',
  styleUrls: ['./algoritmo.component.css']
})

export class AlgoritmoComponent implements OnInit {
  value1 = 130
  value2 = 85
  value3 = 0
  mostrarTarjeta = false;
  mostrarTarjeta0 = false;
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
  mostrarTarjeta12 = false;
  mostrarTarjeta13 = false;
  mostrarTarjeta14 = false;
  mostrarTarjeta15 = false;
  mostrarTarjeta16 = false;
  mostrarTarjeta111 = false;
  mostrarTarjeta112 = false;
  mostrarTarjeta113 = false;

  ocultar = true;
  ocultar0 = true;
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

  recargar() {
  this.mostrarTarjeta = false;
  this.mostrarTarjeta0 = false;
  this.mostrarTarjeta2 = false;
  this.mostrarTarjeta3 = false;
  this.mostrarTarjeta4 = false;
  this.mostrarTarjeta5 = false;
  this.mostrarTarjeta6 = false;
  this.mostrarTarjeta7 = false;
  this.mostrarTarjeta8 = false;
  this.mostrarTarjeta9 = false;
  this.mostrarTarjeta10 = false;
  this.mostrarTarjeta11 = false;
  this.mostrarTarjeta12 = false;
  this.mostrarTarjeta13 = false;
  this.mostrarTarjeta14 = false;
  this.mostrarTarjeta15 = false;
  this.mostrarTarjeta16 = false;
  this.mostrarTarjeta111 = false;
  this.mostrarTarjeta112 = false;
  this.mostrarTarjeta113 = false;

  this.ocultar = true;
  this.ocultar0 = true;
  this.ocultar1 = true;
  this.ocultar2 = true;
  this.ocultar3 = true;
  this.ocultar4 = true;
  this.ocultar5 = true;
  this.ocultar6 = true;
  this.ocultar7 = true;
  this.ocultar8 = true;
  this.ocultar9 = true;
  this.ocultar10 = true;
  this.ocultar11 = true;
  this.ocultar12 = true;
  this.ocultar13= true;
  this.ocultar14 = true;
  this.ocultar15 = true;
  this.ocultar16 = true;
  this.ocultar17 = true;
  this.ocultar18 = true;
  }


q0si(): void {
  this.mostrarTarjeta0 = true;
  this.ocultar = false;
  this.ocultar0 = false;
  this.value3 = 1
}

q0sis(): void {
  this.mostrarTarjeta0 = true;
  this.ocultar = false;
  this.ocultar0 = false;
  this.value3 = 2
}

guardar(): void {
    // Obtener los valores de las variables
    const value1 = this.value1;
    const value2 = this.value2;
    const value3 = this.value3;
    if(value3 == 1){
      if (this.value1 < 130 || this.value2 < 85) {
        // Mostrar una tarjeta
        this.mostrarTarjeta = true;
      }else{
        this.mostrarTarjeta111 = true;
      }
    }else{
      if (this.value1 < 140 || this.value2 < 90) {
        // Mostrar una tarjeta
        this.mostrarTarjeta = true;
      }else{
        this.mostrarTarjeta111 = true;
      }
    }
  
  }

guardar2(): void {
  // Obtener los valores de las variables
  const value1 = this.value1;
  const value2 = this.value2;
  const value3 = this.value3;

  if(value3 == 1){
    if (this.value1 < 130 || this.value2 < 85) {
      // Mostrar una tarjeta
      this.mostrarTarjeta5 = true;
    }else{
      this.mostrarTarjeta112 = true;
    }
  }else{
    if (this.value1 < 140 || this.value2 < 90) {
      // Mostrar una tarjeta
      this.mostrarTarjeta5 = true;
    }else{
      this.mostrarTarjeta112 = true;
    }
  }
  
}

guardar3(): void {
  // Obtener los valores de las variables
  const value1 = this.value1;
  const value2 = this.value2;
  const value3 = this.value3;

  if(value3 == 1){
    if (this.value1 < 130 || this.value2 < 85) {
      // Mostrar una tarjeta
      this.mostrarTarjeta8 = true;
    }else{
      this.mostrarTarjeta112 = true;
    }
  }else{
    if (this.value1 < 140 || this.value2 < 90) {
      // Mostrar una tarjeta
      this.mostrarTarjeta8 = true;
    }else{
      this.mostrarTarjeta112 = true;
    }
  }
}

guardar4(): void {
  // Obtener los valores de las variables
  const value1 = this.value1;
  const value2 = this.value2;
  const value3 = this.value3;

  if(value3 == 1){
    if (this.value1 < 130 || this.value2 < 85) {
      // Mostrar una tarjeta
      this.mostrarTarjeta11 = true;
    }else{
      this.mostrarTarjeta112 = true;
    }

  }else{
    if (this.value1 < 140 || this.value2 < 90) {
      // Mostrar una tarjeta
      this.mostrarTarjeta11 = true;
    }else{
      this.mostrarTarjeta112 = true;
    }

  }

}

guardar5(): void {
  // Obtener los valores de las variables
  const value1 = this.value1;
  const value2 = this.value2;
  const value3 = this.value3;

  if(value3 == 1){
    if (this.value1 < 130 || this.value2 < 85) {
      // Mostrar una tarjeta
      this.mostrarTarjeta14 = true;
    }else{
      this.mostrarTarjeta112 = true;
    }
  }else{
    if (this.value1 < 140 || this.value2 < 90) {
      // Mostrar una tarjeta
      this.mostrarTarjeta14 = true;
    }else{
      this.mostrarTarjeta112 = true;
    }

  }
  
  

}
  q1si(): void {
      this.mostrarTarjeta2 = true;
      this.ocultar1 = false;
      this.ocultar2 = false;
  }

  q0no(): void {
    this.mostrarTarjeta111 = true
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
    this.ocultar = false;
    this.ocultar0 = false;
    this.ocultar1 = false;
    this.ocultar2 = false;
  }

  q3si(): void {
    this.mostrarTarjeta4 = true;
    this.ocultar5= false;
    this.ocultar6 = false;
  }

  q4si(): void {
    this.mostrarTarjeta6 = true;
    this.ocultar7 = false;
    this.ocultar8 = false;
  }

  q5si(): void {
    this.mostrarTarjeta7 = true;
    this.ocultar9 = false;
    this.ocultar10 = false;
  }

  q6si(): void {
    this.mostrarTarjeta9 = true;
    this.ocultar11 = false;
    this.ocultar12 = false;
  }

  q7si(): void {
    this.mostrarTarjeta10 = true;
    this.ocultar13 = false;
    this.ocultar14 = false;
  }

  q8si(): void {
    this.mostrarTarjeta12 = true;
    this.ocultar15 = false;
    this.ocultar16 = false;
  }

  q9si(): void {
    this.mostrarTarjeta13 = true;
    this.ocultar17 = false;
    this.ocultar18 = false;
  }


}

