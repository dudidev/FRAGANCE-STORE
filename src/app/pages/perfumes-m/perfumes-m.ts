import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoCard } from '../../components/producto-card/producto-card';

@Component({
  selector: 'app-perfumes-m',
  imports: [CommonModule, ProductoCard],
  templateUrl: './perfumes-m.html',
  styleUrl: './perfumes-m.css'
})
export class PerfumesM {
  perfumesM = [
    {
      nombre: 'Cloud',
      precio: 350000,
      imagen: '../'
    },
    {
      nombre: 'Loquito por ti',
      precio: 300000,
      imagen: '../'
    },
    {
      nombre: 'Fab',
      precio: 280000,
      imagen: '../'
    }
  ]
}
