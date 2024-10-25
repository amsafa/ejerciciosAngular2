import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';


@Component({
  selector: 'app-numero-aleatorio',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './numero-aleatorio.component.html',
  styleUrl: './numero-aleatorio.component.css'
})
export class NumeroAleatorioComponent {
  numeros: number[] = [];

  generarNumerosAleatorios(cantidad: number) {
    this.numeros = [];
    for (let i =0; i < cantidad; i++) {
      const numeroAleatorio = Math.floor(Math.random() * 100);
      this.numeros.push(numeroAleatorio);
    }
  }
}
