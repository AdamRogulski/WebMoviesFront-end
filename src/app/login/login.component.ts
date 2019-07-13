import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { LoginUser } from '../model/login-user';
import { Router } from '@angular/router';
import { NavComponent } from '../nav/nav.component';
import { DatasharingService } from '../services/datasharing.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: any = {};
  private loginInfo: LoginUser;

  constructor(private authService: LoginService , private router: Router, private dataSharing: DatasharingService) { }

  ngOnInit() {
  }

  attemptAuth() {
    this.loginInfo = new LoginUser(
      this.form.username,
      this.form.password);

    this.authService.attemptAuth(this.loginInfo).subscribe(
        data => {
        sessionStorage.setItem('username', data.username);
        const tokenStr = 'Token ' + data.token;
        sessionStorage.setItem('token', tokenStr);
        this.dataSharing.isUserLogged.next(true);
        this.dataSharing.username.next(sessionStorage.getItem('username'));
        this.router.navigateByUrl('/');
      },
      error => alert('Nie znaleziono użytkownika')
    );
  }


}
