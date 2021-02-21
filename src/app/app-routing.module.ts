import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'peliculas',
    pathMatch: 'full'
  },
  {
    path: 'peliculas',
    loadChildren: () => import('./pages/peliculas/peliculas.module').then( m => m.PeliculasPageModule)
  },
  {
    path: 'pelicula/:id',
    loadChildren: () => import('./pages/pelicula/pelicula.module').then( m => m.PeliculaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
