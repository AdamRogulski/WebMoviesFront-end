import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TvshowService {

  constructor( private http: HttpClient) { }

  getAllShows(): Observable<any> {
    return this.http.get('///192.168.2.10:8080/tvshows');
  }

  getLatestShows(): Observable<any> {
    return this.http.get('///192.168.2.10:8080/tvshows/latest');
  }

  getOneShow(showId): Observable<any> {
    return this.http.get('///192.168.2.10:8080/tvshows/' + showId);
  }

  deleteShow(showId): Observable<string> {
    return this.http.delete('///192.168.2.10:8080/tvshows/' + showId, {responseType: 'text'} );
  }

  updateShow(showId, show: object): Observable<string> {
    return this.http.put('///192.168.2.10:8080/tvshows/' + showId, show, {responseType: 'text'});
  }

  saveShow(show: object): Observable<string> {
    return this.http.post('///192.168.2.10:8080/tvshows/add', show, { responseType: 'text'});
  }

  getUserActivity(): Observable<any> {
    return this.http.get('///192.168.2.10:8080/user/tvshows/activity');
  }

  addMyShow(myshowId, myshow: object): Observable<string> {
    return this.http.post('///192.168.2.10:8080/mytvshows/' + myshowId, myshow,  { responseType: 'text'});
  }

  deleteMyShow(myshowId: number): Observable<string> {
  return this.http.delete('///192.168.2.10:8080/mytvshows/' + myshowId,  { responseType: 'text'});
  }

  getComments(myshowId): Observable<any> {
    return this.http.get('///192.168.2.10:8080/tvshows/' + myshowId + '/comments');
  }

  getLatestComments(): Observable<any> {
    return this.http.get('///192.168.2.10:8080/mytvshows/latest');
  }

  searchTVShows(title: string): Observable<any> {
    const params = new URLSearchParams();
    params.append('title', title);
    return this.http.get('///192.168.2.10:8080/tvshows/search?' + params);
  }
}


