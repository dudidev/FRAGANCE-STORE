import { Component } from '@angular/core';
import { Nav } from '../../shared/nav/nav';
import { Testimonios } from '../../components/testimonios/testimonios';

@Component({
  selector: 'app-nosotros',
  imports: [Nav, Testimonios],
  templateUrl: './nosotros.html',
  styleUrl: './nosotros.css'
})
export class Nosotros {

}
