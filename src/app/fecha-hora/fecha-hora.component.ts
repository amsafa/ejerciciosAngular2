import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-fecha-hora',
  standalone: true,
  imports: [],
  templateUrl: './fecha-hora.component.html',
  styleUrls: ['./fecha-hora.component.css']
})
export class FechaHoraComponent implements OnInit, OnDestroy {
  fechaHoraActual: string = '';
  private intervalId: any;

  ngOnInit() {
    this.actualizarFechaHora();
    this.intervalId = setInterval(() => this.actualizarFechaHora(), 1000);
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  private actualizarFechaHora() {
    const ahora = new Date();
    const dia = this.pad(ahora.getDate());
    const mes = this.pad(ahora.getMonth() + 1);
    const anio = ahora.getFullYear();
    const horas = this.pad(ahora.getHours());
    const minutos = this.pad(ahora.getMinutes());
    const segundos = this.pad(ahora.getSeconds());
    this.fechaHoraActual = `${dia}-${mes}-${anio} ${horas}:${minutos}:${segundos}`;
  }

  private pad(n: number): string {
    return n < 10 ? '0' + n : n.toString();
  }
}
