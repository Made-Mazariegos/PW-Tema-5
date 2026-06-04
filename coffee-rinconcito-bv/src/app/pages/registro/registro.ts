import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registro',
  imports: [RouterModule, CommonModule],
  templateUrl: './registro.html',
  styleUrl: './registro.css',
})
export class Registro {
  mensaje = '';

  registrar() {
    this.mensaje = '✅ Cuenta creada correctamente. Ahora puedes iniciar sesión.';
  }
}
