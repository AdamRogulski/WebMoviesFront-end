import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { JwtResponse } from '../model/jwt-response';
import { Observable } from 'rxjs';
import { LoginUser } from '../model/login-user';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loginUrl = '//localhost:8080/zaloguj';

  constructor(private http: HttpClient) { }


  attemptAuth(login: LoginUser): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(this.loginUrl, login, httpOptions);
  }

}
