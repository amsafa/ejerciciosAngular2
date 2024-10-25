import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-interaccion-ventana1',
  standalone: true,
  imports: [],
  templateUrl: './interaccion-ventana1.component.html',
  styleUrl: './interaccion-ventana1.component.css'
})
export class InteraccionVentana1Component implements OnDestroy {
  private nuevaVentana: Window | null = null;
  resolucion: string = '';

  abrirVentana() {
    this.nuevaVentana = window.open('', '', 'width=200,height=200');
    this.actualizarResolucion();
  }

  actualizarResolucion() {
    if (this.nuevaVentana) {
      this.resolucion = `Ancho: ${this.nuevaVentana.innerWidth}px, Alto: ${this.nuevaVentana.innerHeight}px`;
    }
  }

  redimensionarVentana(ancho: number, alto: number) {
    if (this.nuevaVentana) {
      this.nuevaVentana.resizeTo(ancho, alto);
      this.actualizarResolucion();
    }
  }

  ngOnDestroy() {
    if (this.nuevaVentana) {
      this.nuevaVentana.close();
    }
  }


}
