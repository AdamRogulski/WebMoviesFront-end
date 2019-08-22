import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { LoginUser } from 'src/app/model/login-user';
import { Router } from '@angular/router';
import { DatasharingService } from 'src/app/services/datasharing.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: any = {};
  private loginInfo: LoginUser;
  register = false;
  secondPassword: string;

  constructor(private authService: LoginService , private router: Router, private dataSharing: DatasharingService,
              private snackBar: MatSnackBar) { }

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
        const role = data.authorities[0].authority;
        sessionStorage.setItem('role', role);
        this.dataSharing.role.next(role);
        this.dataSharing.isUserLogged.next(true);
        this.dataSharing.username.next(sessionStorage.getItem('username'));
        this.router.navigateByUrl('/');
      },
      error => alert('Nie poprawne dane logowania')
    );
  }

  registerNewUser() {
    if (this.form.password !== this.secondPassword) {
      this.snackBar.open('Hasła się nie zgadzają!', 'Ok', {duration: 2500});
    } else {
      this.loginInfo = new LoginUser(
        this.form.username,
        this.form.password);

      this.authService.registerNewUser(this.loginInfo).subscribe( data => {
        this.snackBar.open('Zarejestrowano', 'OK', {duration: 2000}),
        this.register = false; });
    }
  }

}
