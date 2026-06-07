import { Injectable } from '@angular/core';
import { supabase } from './supabase';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  async obtenerUsuarios() {
    const { data, error } = await supabase
      .from('usuarios')
      .select('*');

    if (error) {
      console.error('Error al obtener usuarios:', error);
      return [];
    }

    console.log('Usuarios obtenidos:', data);
    return data || [];
  }

  async agregarUsuario(usuario: any) {
    const { data, error } = await supabase
      .from('usuarios')
      .insert([usuario])
      .select();

    if (error) {
      console.error('Error al agregar usuario:', error);
      return null;
    }

    console.log('Usuario agregado:', data);
    return data;
  }

  async iniciarSesion(telefono: string, contrasena: string) {
    const { data, error } = await supabase
      .from('usuarios')
      .select('*')
      .eq('telefono', telefono)
      .eq('contrasena', contrasena)
      .single();

    if (error) {
      console.error('Error al iniciar sesión:', error);
      return null;
    }

    console.log('Usuario encontrado:', data);
    return data;
  }
}
