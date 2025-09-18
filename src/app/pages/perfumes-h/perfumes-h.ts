import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ProductoCard } from '../../components/producto-card/producto-card';

@Component({
  selector: 'app-perfumes-h',
  imports: [CommonModule, ProductoCard],
  templateUrl: './perfumes-h.html',
  styleUrls: ['./perfumes-h.css']
})
export class PerfumesH {
  perfumesH = [
    {
      nombre: 'Bleu de Chanel',
      precio: 350000,
      imagen: 'https://res.cloudinary.com/ds7wvpkt4/image/upload/v1758162250/BLEU_CHANNEL_ks7zbm.png'
    },
    {
      nombre: 'Dior Sauvage',
      precio: 300000,
      imagen: 'https://res.cloudinary.com/ds7wvpkt4/image/upload/v1758162250/DIOR_SAUVAGE_gxyks8.png'
    },
    {
      nombre: 'Acqua di Giò',
      precio: 280000,
      imagen: 'https://res.cloudinary.com/ds7wvpkt4/image/upload/v1758162250/ACQUA_DI_GIO_kagpkc.png'
    },
    {
      nombre: 'Versace Eros',
      precio: 330000,
      imagen: 'https://res.cloudinary.com/ds7wvpkt4/image/upload/v1758162250/EROS_kklo3x.png'
    }
  ];

  constructor(private router: Router) {}

  irAVistaListaProductos() {
    this.router.navigate(['/lista-productos']);
  }
}
