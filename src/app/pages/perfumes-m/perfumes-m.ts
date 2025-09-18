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
      imagen: 'https://res.cloudinary.com/ds7wvpkt4/image/upload/v1758162274/BEIJO_DE_HUMOR_zgpdu0.png'
    },
    {
      nombre: 'Cloud',
      precio: 300000,
      imagen: 'https://res.cloudinary.com/ds7wvpkt4/image/upload/v1758162275/CLOUD_sawlmx.png'
    },
    {
      nombre: 'Tom Ford Santal',
      precio: 250000,
      imagen: 'https://res.cloudinary.com/ds7wvpkt4/image/upload/v1758162280/TOM_fORD_yzdbre.png'
    },
    {
      nombre: 'Irressistible Givenchy',
      precio: 1500000,
      imagen: 'https://res.cloudinary.com/ds7wvpkt4/image/upload/v1758162279/IRRESISTIBLE_la1tdh.png'
    }
  ];

  constructor(private router: Router) {}

  irAVistaListaProductos() {
    this.router.navigate(['/lista-productos']);
  }
}
