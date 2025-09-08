import { Component } from '@angular/core';
import { ProductoCard } from '../producto-card/producto-card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-productos',
  imports: [ProductoCard, CommonModule],
  templateUrl: './lista-productos.html',
  styleUrl: './lista-productos.css'
})
export class ListaProductos {
};
