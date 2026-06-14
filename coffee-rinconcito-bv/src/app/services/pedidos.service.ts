import { Injectable } from '@angular/core';
import { supabase } from './supabase';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  async agregarPedido(pedido: any) {
    const { data, error } = await supabase
      .from('pedidos')
      .insert([pedido])
      .select();

    if (error) {
      console.error('Error al agregar pedido:', error);
      return null;
    }

    console.log('Pedido agregado:', data);
    return data;
  }

  async obtenerPedidos() {
    const { data, error } = await supabase
      .from('pedidos')
      .select('*');

    if (error) {
      console.error('Error al obtener pedidos:', error);
      return [];
    }

    console.log('Pedidos obtenidos:', data);
    return data || [];
  }
}