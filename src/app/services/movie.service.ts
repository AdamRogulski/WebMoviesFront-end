import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


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

  getUserActivity(): Observable<any> {
    return this.http.get('//localhost:8080/user/filmy/activity');
  }

  addMyMovie(movieId , mymovie: object): Observable<any> {
    return this.http.post('//localhost:8080/addmymovie/' + movieId, mymovie );
  }

  deleteMyMovie(movieId: number): Observable<string> {
    return this.http.delete('http://localhost:8080/deletemymovie/' + movieId, {responseType: 'text'});
  }
}

