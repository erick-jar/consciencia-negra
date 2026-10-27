import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Origem } from './pages/origem/origem';
import { Personalidades } from './pages/personalidades/personalidades';
import { Cultura } from './pages/cultura/cultura';
import {Sobre} from './pages/sobre/sobre';

export const routes: Routes = [
  { path: '', component: Home, title: 'Consciência Viva - Home' },
  { path: 'origem', component: Origem, title: 'Consciência Viva - Origem' },
  { path: 'personalidades', component: Personalidades, title: 'Consciência Viva - Personalidades' },
  { path: 'cultura', component: Cultura, title: 'Consciência Viva - Cultura' },
  {path: 'sobre', component: Sobre, title: 'Consciência Viva - Sobre'},
  { path: '**', redirectTo: '' },
];
