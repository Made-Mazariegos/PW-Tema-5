import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-registro',
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './registro.html',
  styleUrl: './registro.css'
})
export class Registro {

  nombre = '';
  correo = '';
  telefono = '';
  contrasena = '';
  confirmarContrasena = '';
  mensaje = '';

  constructor(
    private usuariosService: UsuariosService,
    private router: Router
  ) {}

  async registrar() {
    if (
      this.nombre.trim() === '' ||
      this.correo.trim() === '' ||
      this.telefono.trim() === '' ||
      this.contrasena.trim() === '' ||
      this.confirmarContrasena.trim() === ''
    ) {
      this.mensaje = 'Completa todos los campos.';
      return;
    }

    if (this.contrasena !== this.confirmarContrasena) {
      this.mensaje = 'Las contraseñas no coinciden.';
      return;
    }

    const nuevoUsuario = {
      nombre: this.nombre,
      correo: this.correo,
      telefono: this.telefono,
      contrasena: this.contrasena,
      rol: 'usuario',
      estado: 'activo'
    };

    const resultado = await this.usuariosService.agregarUsuario(nuevoUsuario);

    if (resultado) {
      this.mensaje = '✅ Cuenta creada correctamente. Ahora puedes iniciar sesión.';

      this.nombre = '';
      this.correo = '';
      this.telefono = '';
      this.contrasena = '';
      this.confirmarContrasena = '';

      setTimeout(() => {
        this.router.navigate(['/login']);
      }, 1500);
    } else {
      this.mensaje = 'No se pudo registrar el usuario.';
    }
  }
}