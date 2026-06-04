import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin-vendedores',
  imports: [RouterModule],
  templateUrl: './admin-vendedores.html',
  styleUrl: './admin-vendedores.css',
})
export class AdminVendedores {
  aprobarVendedor() {
    alert('✅ Vendedor aprobado correctamente');
  }

  verVendedor() {
    alert('🧑‍🌾 Vendedora: Doña María\nCafé: Café Orgánico BV\nPago: $100\nEstado: Pagado');
  }
}
