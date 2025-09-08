import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
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
      imagen: 'assets/perfumesH/BLEU_CHANNEL.jpg'
    },
    {
      nombre: 'Dior Sauvage',
      precio: 300000,
      imagen: 'assets/perfumesH/DIOR_SAUVAGE.jpg'
    },
    {
      nombre: 'Acqua di Giò',
      precio: 280000,
      imagen: 'assets/perfumesH/ACQUA_DI_GIO.jpg'
    }
  ]
}
