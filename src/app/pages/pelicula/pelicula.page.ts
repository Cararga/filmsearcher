import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculaService } from '../../services/pelicula.service';


@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.page.html',
  styleUrls: ['./pelicula.page.scss'],
})

export class PeliculaPage implements OnInit {
  content: object = null;
  constructor(private peliculaService:PeliculaService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.peliculaService.verDetalles(id).subscribe(
      resultado => { this.content = resultado;}
    );
  }

}
