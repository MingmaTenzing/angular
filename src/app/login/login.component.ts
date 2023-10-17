import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

email: string = "";
password: string = "";
constructor( private router: Router, private LoginService: LoginService) {}

login() {
  if (this.LoginService.LogIn(this.email, this.password)) {
    this.router.navigate(['/rooms'])
  }
}


}

