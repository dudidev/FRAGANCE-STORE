import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Nav } from '../../shared/nav/nav';
import { Footer } from '../../shared/footer/footer';
import { ProductoCard } from '../producto-card/producto-card';

@Component({
  selector: 'app-lista-productos',
  imports: [CommonModule, Nav, ProductoCard, Footer],
  templateUrl: './lista-productos.html',
  styleUrl: './lista-productos.css'
})
export class ListaProductos {
  perfumesAll = [
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
    imagen: 'assets/perfumesH/ACQUA_DI_GIO.png'
  },
  {
    nombre: 'Versace Eros',
    precio: 330000,
    imagen: 'assets/perfumesH/EROS.png'
  },
  {
    nombre: 'Paco Rabanne Invictus',
    precio: 320000,
    imagen: 'assets/perfumesH/INVICTUS.png'
  },
  {
    nombre: 'Hugo Boss Bottled',
    precio: 310000,
    imagen: 'assets/perfumesH/BOSS_BOTTLED.png'
  },
  {
    nombre: 'Armani Code',
    precio: 340000,
    imagen: 'assets/perfumesH/ARMANI_CODE.png'
  },
  {
    nombre: 'Azzaro Wanted',
    precio: 295000,
    imagen: 'assets/perfumesH/AZZARO_WANTED.png'
  },
  {
    nombre: 'Mont Blanc Legend',
    precio: 270000,
    imagen: 'assets/perfumesH/MONTBLANC_LEGEND.png'
  },
  // Femeninos
  {
    nombre: 'La Vie Est Belle',
    precio: 360000,
    imagen: 'assets/perfumesM/LAVIEESTBELLE.png'
  },
  {
    nombre: 'Good Girl',
    precio: 370000,
    imagen: 'assets/perfumesM/GOODGIRL.png'
  },
  {
    nombre: 'J’adore Dior',
    precio: 355000,
    imagen: 'assets/perfumesM/JADORE.png'
  },
  {
    nombre: 'Flowerbomb',
    precio: 340000,
    imagen: 'assets/perfumesM/FLOWERBOMB.png'
  },
  {
    nombre: 'Chanel No. 5',
    precio: 400000,
    imagen: 'assets/perfumesM/CHANEL5.png'
  },
  {
    nombre: 'Si Giorgio Armani',
    precio: 345000,
    imagen: 'assets/perfumesM/SI_ARMANI.png'
  },
  {
    nombre: 'Irressistible Givenchy',
    precio: 1500000,
    imagen: 'assets/perfumesM/IRRESISTIBLE.png'
  }
  ];

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
};