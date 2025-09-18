import { Component, signal } from '@angular/core';
import { Header } from '../../shared/header/header';
import { Nav } from '../../shared/nav/nav';
import { Footer } from '../../shared/footer/footer';

import { PerfumesH } from '../perfumes-h/perfumes-h';
import { PerfumesM } from '../perfumes-m/perfumes-m';

@Component({
  selector: 'app-home',
  imports: [Header, Nav, Footer, PerfumesH, PerfumesM],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  protected readonly nombreTienda = signal('Fragances Store')
}
