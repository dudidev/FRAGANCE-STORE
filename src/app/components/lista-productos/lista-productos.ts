import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Nav } from '../../shared/nav/nav';
import { ProductoCard } from '../producto-card/producto-card';

@Component({
  selector: 'app-lista-productos',
  imports: [CommonModule, Nav, ProductoCard],
  templateUrl: './lista-productos.html',
  styleUrl: './lista-productos.css'
})
export class ListaProductos {
  perfumesAll = [
    {
    nombre: 'Bleu de Chanel',
    precio: 350000,
    imagen: 'assets/perfumesH/BLEU_CHANNEL.png'
  },
  {
    nombre: 'Dior Sauvage',
    precio: 300000,
    imagen: 'assets/perfumesH/DIOR_SAUVAGE.jpg'
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
  }
  ];
};