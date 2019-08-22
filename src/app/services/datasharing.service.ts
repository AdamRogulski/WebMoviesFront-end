import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatasharingService {

  constructor() { }


  public isUserLogged: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(sessionStorage.getItem('token') !== null);
  public username: BehaviorSubject<string> = new BehaviorSubject<string>(sessionStorage.getItem('username'));
  public role: BehaviorSubject<string> = new BehaviorSubject<string>(sessionStorage.getItem('role'));
}
