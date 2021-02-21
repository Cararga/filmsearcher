import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { peliculasInterface } from '../Interfaces/PeliculasInterface.interface';

@Injectable({
  providedIn: 'root'
})

export class PeliculaService {
  private url: string='';
  private apiKey: string='cfbeff6f';
  constructor(private http: HttpClient) { }

  buscarPeliculas(title:string, type:string){
    this.url = `http://www.omdbapi.com/?s=${encodeURI(title)}&type=${type}&apikey=${this.apiKey}`;
    console.log(this.url);
    return this.http.get<peliculasInterface>(this.url).pipe(map(resultado => resultado['Search']));
  }

  verDetalles(id: string){
    this.url = `http://www.omdbapi.com/?i=${id}&plot=full&apikey=${this.apiKey}`;
    console.log(this.url);
    return this.http.get<peliculasInterface>(this.url);
  }

}
