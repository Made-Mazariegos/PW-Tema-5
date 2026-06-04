import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-detalle-producto',
  imports: [RouterModule, CommonModule],
  templateUrl: './detalle-producto.html',
  styleUrl: './detalle-producto.css',
})
export class DetalleProducto {
  cantidad = 1;
  carrito = 0;
  producto: any;
  imagenPrincipal = '';

  productos: any = {
    'gran-reserva': {
      nombre: 'Café Gran Reserva',
      productor: 'Don Luis',
      ubicacion: 'Bella Vista, Chiapas',
      tipo: 'Molido',
      tostado: 'Medio',
      peso: '500 g',
      variedad: '100% Arábica',
      precio: '$120.00',
      descripcion: 'Café molido artesanal con aroma intenso y sabor equilibrado, ideal para quienes disfrutan un café fuerte y de buena calidad.',
      imagen: '/img/gran-reserva.png',
      galeria: ['/img/gran-reserva.png','/img/gran-reserva-molido.png','/img/gran-reserva-granos.png','/img/gran-reserva-cosecha.png','/img/gran-reserva-productor.png'
]
    },
    'organico-bv': {
      nombre: 'Café Orgánico BV',
      productor: 'Doña María',
      ubicacion: 'Bella Vista, Chiapas',
      tipo: 'Molido',
      tostado: 'Oscuro',
      peso: '500 g',
      variedad: 'Orgánico',
      precio: '$110.00',
      descripcion: 'Café orgánico cultivado de manera natural por productores locales, con un sabor intenso y tradicional.',
      imagen: '/img/organico.png',
      galeria: ['/img/organico.png','/img/organico-molido.png','/img/organico-granos.png','/img/organico-cosecha.png','/img/organico-productor.png'
]
    },
    'sierra-verde': {
      nombre: 'Café Sierra Verde',
      productor: 'Don José',
      ubicacion: 'Bella Vista, Chiapas',
      tipo: 'Molido',
      tostado: 'Claro',
      peso: '500 g',
      variedad: '100% Arábica',
      precio: '$115.00',
      descripcion: 'Café cultivado de manera artesanal bajo sombra, con proceso natural que resalta su sabor suave y afrutado.',
      imagen: '/img/sierra-verde.png',
      galeria: ['/img/sierra-verde.png', '/img/cafe-molido.png', '/img/granos.png', '/img/cosecha.png', '/img/productor.png']
    },
    'tradicion-campesina': {
      nombre: 'Café Tradición Campesina',
      productor: 'Don Pedro',
      ubicacion: 'Bella Vista, Chiapas',
      tipo: 'Molido',
      tostado: 'Medio',
      peso: '500 g',
      variedad: 'Arábica tradicional',
      precio: '$105.00',
      descripcion: 'Café elaborado por agricultores locales, con sabor casero y tradicional, ideal para el consumo diario.',
      imagen: '/img/tradicion.png',
      galeria: [ '/img/tradicion.png', '/img/tradicion-molido.png', '/img/tradicion-granos.png', '/img/tradicion-cosecha.png', '/img/tradicion-productor.png'
]
    }
  };

  constructor() {
  this.cargarProducto();
}
async cargarProducto() {
  const ruta = window.location.pathname;
  const id = ruta.split('/').pop() || 'gran-reserva';

  if (this.productos[id]) {
    this.producto = this.productos[id];
    this.imagenPrincipal = this.producto.imagen;
    return;
  }

  const productosService = new ProductosService();
  const productoBD = await productosService.obtenerProductoPorId(id);

  if (productoBD) {
    this.producto = {
      nombre: productoBD.nombre,
      productor: productoBD.vendedor,
      ubicacion: 'Bella Vista, Chiapas',
      tipo: productoBD.categoria?.split('|')[0]?.trim() || 'No especificado',
      tostado: productoBD.categoria?.split('|')[1]?.trim() || 'No especificado',
      peso: '500 g',
      variedad: 'Café artesanal',
      precio: `$${productoBD.precio}`,
      descripcion: productoBD.descripcion,
      imagen: productoBD.imagen,
      galeria: [productoBD.imagen]
    };

    this.imagenPrincipal = this.producto.imagen;
  }
}

  cambiarImagen(img: string) {
    this.imagenPrincipal = img;
  }
  imagenSiguiente() {
  const index = this.producto.galeria.indexOf(this.imagenPrincipal);
  this.imagenPrincipal = this.producto.galeria[(index + 1) % this.producto.galeria.length];
}

imagenAnterior() {
  const index = this.producto.galeria.indexOf(this.imagenPrincipal);
  this.imagenPrincipal =
    this.producto.galeria[(index - 1 + this.producto.galeria.length) % this.producto.galeria.length];
}
  aumentar() {
  this.cantidad++;
  this.carrito++;
}

disminuir() {
  if (this.cantidad > 1) {
    this.cantidad--;
  }

  if (this.carrito > 0) {
    this.carrito--;
  }
}

agregarAlCarrito() {
  const carritoActual = JSON.parse(localStorage.getItem('carrito') || '[]');

  const productoExistente = carritoActual.find(
    (p: any) => p.nombre === this.producto.nombre
  );

  if (productoExistente) {
    productoExistente.cantidad += this.cantidad;
  } else {
    carritoActual.push({
      nombre: this.producto.nombre,
      precio: Number(this.producto.precio.replace('$', '')),
      cantidad: this.cantidad,
      imagen: this.producto.imagen
    });
  }

  localStorage.setItem('carrito', JSON.stringify(carritoActual));
  this.carrito += this.cantidad;
}
}
