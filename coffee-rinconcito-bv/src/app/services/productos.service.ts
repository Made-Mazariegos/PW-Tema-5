import { Injectable } from '@angular/core';
import { supabase } from './supabase';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  async obtenerProductos() {
    const { data, error } = await supabase
      .from('productos')
      .select('*');

    if (error) {
      console.error('Error al obtener productos:', error);
      return [];
    }

    return data;
  }
  async obtenerProductoPorId(id: string) {
  const { data, error } = await supabase
    .from('productos')
    .select('*')
    .eq('identificador', id)
    .single();

  if (error) {
    console.error('Error al obtener producto por id:', error);
    return null;
  }

  return data;
}

  async agregarProducto(producto: any) {
    const { data, error } = await supabase
      .from('productos')
      .insert([producto])
      .select();

    if (error) {
      console.error('Error al agregar producto:', error);
      return null;
    }

    console.log('Producto agregado:', data);
    return data;
  }

  async subirImagenProducto(archivo: File) {
  const nombreArchivo = `${Date.now()}-${archivo.name}`;

  const { data, error } = await supabase.storage
    .from('productos')
    .upload(nombreArchivo, archivo);

  if (error) {
    console.error('Error al subir imagen:', error);
    return null;
  }

  const { data: urlData } = supabase.storage
    .from('productos')
    .getPublicUrl(nombreArchivo);

  console.log('URL de imagen:', urlData.publicUrl);
  return urlData.publicUrl;
}

}

