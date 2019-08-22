import { Component, OnInit } from '@angular/core';
import { DatasharingService } from 'src/app/services/datasharing.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {


  constructor(private dataSharingService: DatasharingService, private router: Router) { }

  isUserLogged: boolean;
  user: string;
  role: string;
  searchInput: string;

  ngOnInit() {

  this.dataSharingService.isUserLogged.subscribe(
    data => this.isUserLogged = data);

  this.dataSharingService.username.subscribe(
    data => this.user = data);

  this.dataSharingService.role.subscribe(
    data => this.role = data);
  }


  logout() {
    sessionStorage.clear();
    this.dataSharingService.isUserLogged.next(false);
    window.location.reload();
  }

  search() {
    this.router.navigateByUrl('/szukaj/' + this.searchInput);
  }
}
