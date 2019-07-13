import { Component, OnInit } from '@angular/core';
import { LoginUser } from '../model/login-user';
import { DatasharingService } from '../services/datasharing.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {


  constructor(private dataSharingService: DatasharingService) { }

  isUserLogged: boolean;
  user: string;

  ngOnInit() {

  this.dataSharingService.isUserLogged.subscribe(
    data => this.isUserLogged = data);

  this.dataSharingService.username.subscribe(
    data => this.user = data);


  }


  logout() {
    sessionStorage.clear();
    this.dataSharingService.isUserLogged.next(false);
    window.location.reload();
  }
}
