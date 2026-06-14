import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PedidosService } from '../../services/pedidos.service';

@Component({
  selector: 'app-carrito',
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './carrito.html',
  styleUrl: './carrito.css',
})
export class Carrito {

  productos: any[] = [];

  modalPago = false;
  compraExitosa = false;
  mostrarRastreo = false;

  nombreCliente = '';
  direccion = '';
  zonaEntrega = '';
  telefono = '';
  metodoPago = 'Tarjeta bancaria';
  numeroTarjeta = '';
  fechaVencimiento = '';
  cvv = '';

  datosGuardados = false;

  constructor(private pedidosService: PedidosService) {}

  ngOnInit() {
    this.productos = JSON.parse(localStorage.getItem('carrito') || '[]');
  }

  get tiempoEntrega() {
    if (this.zonaEntrega === 'chiapas') {
      return '7 a 10 días hábiles dentro de Chiapas';
    }

    if (this.zonaEntrega === 'mexico') {
      return '15 a 20 días hábiles para otros estados de México';
    }

    return 'Selecciona una zona de entrega';
  }

  get subtotal() {
    return this.productos.reduce((total, p) => total + p.precio * p.cantidad, 0);
  }

  get total() {
    return this.subtotal + 30;
  }

  aumentar(producto: any) {
    producto.cantidad++;
    localStorage.setItem('carrito', JSON.stringify(this.productos));
  }

  disminuir(producto: any) {
    if (producto.cantidad > 1) {
      producto.cantidad--;
      localStorage.setItem('carrito', JSON.stringify(this.productos));
    }
  }

  eliminar(producto: any) {
    this.productos = this.productos.filter(p => p !== producto);
    localStorage.setItem('carrito', JSON.stringify(this.productos));
  }

  abrirPago() {
    this.modalPago = true;
  }

  cerrarPago() {
    this.modalPago = false;
  }

  guardarDatosPago() {
    if (
      this.nombreCliente.trim() === '' ||
      this.direccion.trim() === '' ||
      this.zonaEntrega.trim() === '' ||
      this.telefono.trim() === ''
    ) {
      alert('Completa los datos de envío.');
      return;
    }

    this.datosGuardados = true;
    this.modalPago = false;
  }

  async finalizarCompra() {
    if (this.productos.length === 0) {
      alert('El carrito está vacío.');
      return;
    }

    if (!this.datosGuardados) {
      alert('Primero guarda los datos de envío y pago.');
      this.modalPago = true;
      return;
    }

    const nombresProductos = this.productos
      .map(p => p.nombre)
      .join(', ');

    const cantidadTotal = this.productos
      .reduce((total, p) => total + p.cantidad, 0);

    const ultimosDigitos = this.numeroTarjeta
      ? this.numeroTarjeta.slice(-4)
      : '';

    const pedido = {
      usuario: this.nombreCliente,
      producto: nombresProductos,
      cantidad: cantidadTotal,
      total: this.total,
      estado: 'confirmado',
      fecha: new Date().toLocaleDateString('es-MX'),
      direccion: this.direccion,
      zona_entrega: this.zonaEntrega,
      telefono: this.telefono,
      metodo_pago: this.metodoPago,
      ultimos_digitos: ultimosDigitos,
      paqueteria: 'Express',
      entrega_estimada: this.tiempoEntrega
    };

    const resultado = await this.pedidosService.agregarPedido(pedido);

    if (resultado) {
      this.compraExitosa = true;
      localStorage.removeItem('carrito');
      this.productos = [];
    } else {
      alert('No se pudo guardar el pedido.');
    }
  }

  rastrearPedido() {
    this.mostrarRastreo = true;
  }
}