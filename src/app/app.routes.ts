import { Routes } from '@angular/router';

//Vistas
import { Home } from './pages/home/home';
import { Nosotros } from './pages/nosotros/nosotros';
import { Contacto } from './pages/contacto/contacto';
import { PerfumesH } from './pages/perfumes-h/perfumes-h';
import { PerfumesM } from './pages/perfumes-m/perfumes-m';


export const routes: Routes = [
    {path: '', component: Home},
    {path: 'nosotros', component: Nosotros},
    {path: 'contacto', component: Contacto},
    {path: 'perfumesH', component: PerfumesH},
    {path: 'perfumesM', component: PerfumesM},
    {path: '**', redirectTo: ''},
];
