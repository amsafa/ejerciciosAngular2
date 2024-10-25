import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-interaccion-ventana2',
  standalone: true,
  imports: [],
  templateUrl: './interaccion-ventana2.component.html',
  styleUrl: './interaccion-ventana2.component.css'
})
export class InteraccionVentana2Component implements OnDestroy {
  private nuevaVentana: Window | null = null;

  abrirVentana() {
    this.nuevaVentana = window.open('', '', 'width=400,height=400');
  }

  moverVentana(x: number, y: number) {
    if (this.nuevaVentana) {
      this.nuevaVentana.moveBy(x, y);
    }
  }

  ngOnDestroy() {
    if (this.nuevaVentana) {
      this.nuevaVentana.close();
    }
  }

}
