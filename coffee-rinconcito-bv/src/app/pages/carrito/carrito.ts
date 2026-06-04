import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-carrito',
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './carrito.html',
  styleUrl: './carrito.css',
})
export class Carrito {

  zonaEntrega = '';

  get tiempoEntrega() {
    if (this.zonaEntrega === 'chiapas') {
      return '7 a 10 días hábiles dentro de Chiapas';
    }

    if (this.zonaEntrega === 'mexico') {
      return '15 a 20 días hábiles para otros estados de México';
    }

    return 'Selecciona una zona de entrega';
  }

  productos: any[] = [];

  ngOnInit() {
  this.productos = JSON.parse(localStorage.getItem('carrito') || '[]');
  }

  get subtotal() {
    return this.productos.reduce((total, p) => total + p.precio * p.cantidad, 0);
  }

  get total() {
    return this.subtotal + 30;
  }

  aumentar(producto: any) {
    producto.cantidad++;
  }

  disminuir(producto: any) {
    if (producto.cantidad > 1) {
      producto.cantidad--;
    }
  }

  eliminar(producto: any) {
    this.productos = this.productos.filter(p => p !== producto);
  }
compraExitosa = false;

finalizarCompra() {
  this.compraExitosa = true;
}

mostrarRastreo = false;

rastrearPedido() { this.mostrarRastreo = true;

}
modalPago = false;

abrirPago() {
  this.modalPago = true;
}

cerrarPago() {
  this.modalPago = false;
}
}