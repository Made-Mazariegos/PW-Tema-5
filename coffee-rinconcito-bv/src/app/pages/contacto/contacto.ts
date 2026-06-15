import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { supabase } from '../../services/supabase';

@Component({
  selector: 'app-contacto',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css',
})
export class Contacto {

  nombre = '';
  correo = '';
  mensaje = '';
  aviso = '';

  async enviarMensaje() {
    if (
      this.nombre.trim() === '' ||
      this.correo.trim() === '' ||
      this.mensaje.trim() === ''
    ) {
      this.aviso = 'Completa todos los campos.';
      return;
    }

    const { error } = await supabase
  .from('mensajes_contacto')
  .insert([
    {
      nombre: this.nombre,
      correo: this.correo,
      mensaje: this.mensaje,
      estado: 'pendiente'
    }
  ]);

    if (error) {
      console.error('Error al enviar mensaje:', error);
      this.aviso = 'No se pudo enviar el mensaje.';
      return;
    }

    console.log('Mensaje enviado correctamente');
    this.aviso = 'Mensaje enviado correctamente.';

    this.nombre = '';
    this.correo = '';
    this.mensaje = '';
  }
}