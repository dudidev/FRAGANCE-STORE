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
      nombre: 'Beijo De Humor',
      precio: 350000,
      imagen: 'assets/perfumesM/BEIJO_DE_HUMOR.jpg'
    },
    {
      nombre: 'Cloud',
      precio: 300000,
      imagen: 'assets/perfumesM/CLOUD.png'
    },
    {
      nombre: 'Fab',
      precio: 15000,
      imagen: 'assets/perfumesM/FAB.png'
    }
  ]
}
