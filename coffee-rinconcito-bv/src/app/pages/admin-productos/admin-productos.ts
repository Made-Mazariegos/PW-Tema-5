import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin-productos',
  imports: [RouterModule],
  templateUrl: './admin-productos.html',
  styleUrl: './admin-productos.css',
})
export class AdminProductos {
  verProducto() {
    alert('☕ Producto: Café Gran Reserva\nProductor: Don Luis\nPrecio: $120\nEstado: Publicado');
  }

  eliminarProducto() {
    alert('🗑 Producto eliminado correctamente');
  }

  aprobarProducto() {
    alert('✅ Producto aprobado correctamente');
  }
}
