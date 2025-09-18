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
    imagen: 'https://res.cloudinary.com/ds7wvpkt4/image/upload/v1758162250/ACQUA_DI_GIO_kagpkc.png'
  },
  {
    nombre: 'Versace Eros',
    precio: 330000,
    imagen: 'https://res.cloudinary.com/ds7wvpkt4/image/upload/v1758162250/EROS_kklo3x.png'
  },
  {
    nombre: 'Paco Rabanne Invictus',
    precio: 320000,
    imagen: 'https://res.cloudinary.com/ds7wvpkt4/image/upload/v1758162250/INVICTUS_oqgqbg.png'
  },
  {
    nombre: 'Hugo Boss Bottled',
    precio: 310000,
    imagen: 'https://res.cloudinary.com/ds7wvpkt4/image/upload/v1758162250/BOSS_BOTTLED_tsgse9.png'
  },
  {
    nombre: 'Armani Code',
    precio: 340000,
    imagen: 'https://res.cloudinary.com/ds7wvpkt4/image/upload/v1758162250/ARMANI_CODE_u1zta0.png'
  },
  {
    nombre: 'Azzaro Wanted',
    precio: 295000,
    imagen: 'https://res.cloudinary.com/ds7wvpkt4/image/upload/v1758162250/AZZARO_WANTED_o1sitm.png'
  },
  {
    nombre: 'Mont Blanc Legend',
    precio: 270000,
    imagen: 'https://res.cloudinary.com/ds7wvpkt4/image/upload/v1758162250/MONTBLANC_LEGEND_xe1koc.png'
  },
  // Femeninos
  {
    nombre: 'La Vie Est Belle',
    precio: 360000,
    imagen: 'https://res.cloudinary.com/ds7wvpkt4/image/upload/v1758162279/LAVIEESTBELLE_dmukdo.png'
  },
  {
    nombre: 'Good Girl',
    precio: 370000,
    imagen: 'https://res.cloudinary.com/ds7wvpkt4/image/upload/v1758162275/GOODGIRL_augagm.png'
  },
  {
    nombre: 'J’adore Dior',
    precio: 355000,
    imagen: 'https://res.cloudinary.com/ds7wvpkt4/image/upload/v1758162279/JADORE_t8y6dn.png'
  },
  {
    nombre: 'Flowerbomb',
    precio: 340000,
    imagen: 'https://res.cloudinary.com/ds7wvpkt4/image/upload/v1758162275/FLOWERBOMB_trknqw.png'
  },
  {
    nombre: 'Chanel No. 5',
    precio: 400000,
    imagen: 'https://res.cloudinary.com/ds7wvpkt4/image/upload/v1758162274/CHANEL5_yitorw.png'
  },
  {
    nombre: 'Si Giorgio Armani',
    precio: 345000,
    imagen: 'https://res.cloudinary.com/ds7wvpkt4/image/upload/v1758162279/SI_ARMANI_zlqdnm.png'
  },
  {
    nombre: 'Irressistible Givenchy',
    precio: 1500000,
    imagen: 'https://res.cloudinary.com/ds7wvpkt4/image/upload/v1758162279/IRRESISTIBLE_la1tdh.png'
  }
  ];

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
};