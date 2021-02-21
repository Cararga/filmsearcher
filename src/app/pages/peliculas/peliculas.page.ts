import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PeliculaService } from '../../services/pelicula.service';
import { peliculasInterface } from '../../Interfaces/PeliculasInterface.interface';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.page.html',
  styleUrls: ['./peliculas.page.scss'],
})

export class PeliculasPage implements OnInit {
  resultado: Observable<peliculasInterface>;
  busqueda: string = '';
  type: string = '';
  constructor(private peliculaService: PeliculaService) { }

  ngOnInit() {
  }

  searchChanged():void{
    this.resultado = this.peliculaService.buscarPeliculas(this.busqueda, this.type);
  }

}
