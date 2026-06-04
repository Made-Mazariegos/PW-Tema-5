import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recuperar',
  imports: [RouterModule, CommonModule],
  templateUrl: './recuperar.html',
  styleUrl: './recuperar.css',
})
export class Recuperar {
  mensaje = '';

  enviarRecuperacion() {
    this.mensaje = '✅ Se ha enviado un enlace de recuperación a tu correo electrónico.';
  }
}
