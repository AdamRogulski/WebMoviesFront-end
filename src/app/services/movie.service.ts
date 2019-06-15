import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Singlemovie } from '../model/singlemovie';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor( private http: HttpClient) { }



  getAll(): Observable<any> {
    return this.http.get('//localhost:8080/filmy');
  }

  saveMovie(movie: object): Observable<string> {
    return this.http.post('//localhost:8080/filmy/dodaj', movie, {responseType: 'text'});
  }

  getOne(movieId): Observable<any> {
    return this.http.get('//localhost:8080/filmy/' + movieId);
  }

  deleteMovie(movieId): Observable<any> {
    return this.http.delete('//localhost:8080/filmy/' + movieId, {responseType: 'text'});
  }

  updateMovie(movieId, movie: object): Observable<string> {
    return this.http.put('//localhost:8080/filmy/' + movieId, movie, {responseType: 'text'});
  }
}

