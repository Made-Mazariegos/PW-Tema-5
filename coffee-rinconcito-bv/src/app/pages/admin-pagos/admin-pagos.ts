import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin-pagos',
  imports: [RouterModule],
  templateUrl: './admin-pagos.html',
  styleUrl: './admin-pagos.css',
})
export class AdminPagos {
  aprobarPago() {
    alert('✅ Pago aprobado. El vendedor ya puede publicar su café.');
  }

  rechazarPago() {
    alert('❌ Pago rechazado. El vendedor no puede vender todavía.');
  }

  verPago() {
    alert('💰 Vendedora: Doña María\nConcepto: Pago para vender café\nMonto: $100\nEstado: Aprobado');
  }
}
