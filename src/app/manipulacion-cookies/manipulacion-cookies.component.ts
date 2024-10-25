import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manipulacion-cookies',
  standalone: true,
  imports: [],
  templateUrl: './manipulacion-cookies.component.html',
  styleUrl: './manipulacion-cookies.component.css'
})
export class ManipulacionCookiesComponent implements OnInit{
  nombreUsuario: string = '';

  ngOnInit() {
    this.nombreUsuario = this.getCookie('nombreUsuario');
    if (!this.nombreUsuario) {
      this.nombreUsuario = prompt('Por favor, introduce tu nombre:') || '';
      this.setCookie('nombreUsuario', this.nombreUsuario, 1);
    }
  }

  setCookie(name: string, value: string, days: number) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `${name}=${value};${expires};path=/`;
  }

  getCookie(name: string): string {
    const nameEQ = `${name}=`;
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return '';
  }


}
