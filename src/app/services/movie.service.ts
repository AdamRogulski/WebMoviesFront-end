import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor( private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get('///192.168.2.10:8080/movies');
  }

  getLatestMovies(): Observable<any> {
    return this.http.get('///192.168.2.10:8080/movies/latest');
  }

  saveMovie(movie: object): Observable<string> {
    return this.http.post('///192.168.2.10:8080/movies/add', movie, {responseType: 'text'});
  }

  getOne(movieId): Observable<any> {
    return this.http.get('///192.168.2.10:8080/movies/' + movieId);
  }

  deleteMovie(movieId): Observable<any> {
    return this.http.delete('///192.168.2.10:8080/movies/' + movieId, {responseType: 'text'});
  }

  updateMovie(movieId, movie: object): Observable<string> {
    return this.http.put('///192.168.2.10:8080/movies/' + movieId, movie, {responseType: 'text'});
  }

  getUserActivity(): Observable<any> {
    return this.http.get('///192.168.2.10:8080/user/movies/activity');
  }

  addMyMovie(movieId , mymovie: object): Observable<string> {
    return this.http.post('//192.168.2.10:8080/mymovies/' + movieId, mymovie, {responseType: 'text'} );
  }

  deleteMyMovie(movieId: number): Observable<string> {
    return this.http.delete('///192.168.2.10:8080/mymovies/' + movieId, {responseType: 'text'});
  }

  getComments(myshowId): Observable<any> {
    return this.http.get('///192.168.2.10:8080/movies/' + myshowId + '/comments');
  }

  getLatestComments(): Observable<any> {
    return this.http.get('///192.168.2.10:8080/mymovies/latest');
  }

  searchMovies(title: string): Observable<any> {
    const params = new URLSearchParams();
    params.append('title', title);
    return this.http.get('///192.168.2.10:8080/movies/search?' + params);
  }
}

