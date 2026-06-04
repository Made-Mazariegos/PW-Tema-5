import { Routes } from '@angular/router';
import { Inicio } from './pages/inicio/inicio';
import { Catalogo } from './pages/catalogo/catalogo';
import { DetalleProducto } from './pages/detalle-producto/detalle-producto';
import { Carrito } from './pages/carrito/carrito';
import { Login } from './pages/login/login';
import { Registro } from './pages/registro/registro';
import { Recuperar } from './pages/recuperar/recuperar';
import { VenderCafe } from './pages/vender-cafe/vender-cafe';
import { Contacto } from './pages/contacto/contacto';
import { Admin } from './pages/admin/admin';
import { AdminUsuarios } from './pages/admin-usuarios/admin-usuarios';
import { AdminVendedores } from './pages/admin-vendedores/admin-vendedores';
import { AdminProductos } from './pages/admin-productos/admin-productos';
import { AdminPagos } from './pages/admin-pagos/admin-pagos';

export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: Inicio },
  { path: 'cafes', component: Catalogo },
  { path: 'detalle/:id', component: DetalleProducto },
  { path: 'carrito',component: Carrito },
  { path: 'login', component: Login },
  { path: 'registro', component: Registro },
  { path: 'recuperar', component: Recuperar },
  { path: 'vender-cafe', component: VenderCafe },
  { path: 'contacto', component: Contacto },
  { path: 'admin', component: Admin },
  { path: 'admin/usuarios', component: AdminUsuarios },
  { path: 'admin/vendedores', component: AdminVendedores },
  { path: 'admin/productos', component: AdminProductos },
  { path: 'admin/pagos', component: AdminPagos },
];

