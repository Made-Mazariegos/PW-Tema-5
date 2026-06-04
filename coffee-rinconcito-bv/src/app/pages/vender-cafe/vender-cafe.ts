import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-vender-cafe',
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './vender-cafe.html',
  styleUrl: './vender-cafe.css',
})
export class VenderCafe {
  fotosPreview: string[] = [];
  fotoSeleccionada: File | null = null;

  productor = '';
  nombreCafe = '';
  tipo = 'Molido';
  tostado = 'Medio';
  precio = '';
  descripcion = '';

private productosService = new ProductosService();

  seleccionarFotos(event: any) {
    const archivos = event.target.files;

    this.fotoSeleccionada = archivos[0];

    this.fotosPreview = [];

    for (let i = 0; i < archivos.length; i++) {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.fotosPreview.push(e.target.result);
      };

      reader.readAsDataURL(archivos[i]);
    }
  }
  async publicarCafe() {
  
    console.log('Sí entró al botón Publicar mi café');

    let imagenUrl = this.fotosPreview[0] || '/img/organico.png';

    const producto = {
    nombre: this.nombreCafe,
    descripcion: this.descripcion,
    precio: Number(this.precio),
    imagen: imagenUrl,
    categoria: `${this.tipo} | ${this.tostado}`,
    vendedor: this.productor,
    estado: 'Disponible'
  };

  await this.productosService.agregarProducto(producto);

  alert('Café publicado correctamente');

this.productor = '';
this.nombreCafe = '';
this.tipo = 'Molido';
this.tostado = 'Medio';
this.precio = '';
this.descripcion = '';
}

}