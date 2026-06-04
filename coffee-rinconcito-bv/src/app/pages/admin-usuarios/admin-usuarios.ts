import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin-usuarios',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './admin-usuarios.html',
  styleUrl: './admin-usuarios.css'
})
export class AdminUsuarios {

  verUsuario() {
    alert('Usuario: María López\nRol: Cliente\nEstado: Activo');
  }

  aprobarUsuario() {
    alert('Don José ha sido aprobado como vendedor');
  }

}
