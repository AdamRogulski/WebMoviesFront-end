import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TvshowService {

  constructor( private http: HttpClient) { }

  getAllShows(): Observable<any> {
    return this.http.get('//localhost:8080/seriale');
  }

}


