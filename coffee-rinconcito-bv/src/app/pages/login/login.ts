import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { supabase } from '../../services/supabase';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  correo = '';
  contrasena = '';
  mensaje = '';

  constructor(private router: Router) {}

  async iniciarSesion() {
    if (this.correo.trim() === '' || this.contrasena.trim() === '') {
      this.mensaje = 'Completa todos los campos.';
      return;
    }

    const { data, error } = await supabase
      .from('usuarios')
      .select('*')
      .eq('correo', this.correo)
      .eq('contrasena', this.contrasena)
      .eq('estado', 'activo')
      .single();

    if (error || !data) {
      this.mensaje = 'Correo o contraseña incorrectos.';
      return;
    }

    localStorage.setItem('usuario', JSON.stringify(data));

    this.mensaje = 'Inicio de sesión correcto.';

    if (data.rol === 'vendedor') {
      this.router.navigate(['/vender-cafe']);
    } else {
      this.router.navigate(['/inicio']);
    }
  }
}
