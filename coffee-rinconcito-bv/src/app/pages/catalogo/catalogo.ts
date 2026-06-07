import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
import { supabase } from '../../services/supabase';

@Component({
  selector: 'app-catalogo',
  imports: [RouterModule, CommonModule],
  templateUrl: './catalogo.html',
  styleUrl: './catalogo.css'
})
export class Catalogo implements OnInit {

  productos: any[] = [];

  constructor(
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  async ngOnInit() {
    await this.cargarProductos();

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(async () => {
        if (this.router.url === '/cafes') {
          await this.cargarProductos();
        }
      });
  }

  async cargarProductos() {
    console.log('Cargando productos del catálogo...');

    const { data, error } = await supabase
      .from('productos')
      .select('*')
      .order('id', { ascending: true });

    console.log('ERROR PRODUCTOS:', error);
    console.log('DATA PRODUCTOS:', data);

    if (error) {
      this.productos = [];
      this.cdr.detectChanges();
      return;
    }

    this.productos = data || [];
    this.cdr.detectChanges();
  }
}

