import { supabase } from './supabase';

export class UsuariosService {

  async obtenerUsuarios() {

    const { data, error } = await supabase
      .from('usuarios')
      .select('*');

    if (error) {
      console.error('Error al obtener usuarios:', error);
      return [];
    }

    return data;
  }

}

