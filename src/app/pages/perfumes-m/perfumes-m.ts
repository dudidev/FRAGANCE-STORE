import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoCard } from '../../components/producto-card/producto-card';
import { Router } from '@angular/router';

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
      imagen: 'assets/perfumesM/BEIJO_DE_HUMOR.png'
    },
    {
      nombre: 'Cloud',
      precio: 300000,
      imagen: 'assets/perfumesM/CLOUD.png'
    },
    {
      nombre: 'Tom Ford Santal',
      precio: 250000,
      imagen: 'assets/perfumesM/TOM_fORD.png'
    },
    {
      nombre: 'Irressistible Givenchy',
      precio: 1500000,
      imagen: 'assets/perfumesM/IRRESISTIBLE.png'
    }
  ];

  constructor(private router: Router) {}

  irAVistaListaProductos() {
    this.router.navigate(['/lista-productos']);
  }
}
