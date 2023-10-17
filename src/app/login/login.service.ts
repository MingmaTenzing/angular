import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isLoggedIn: boolean = false;

  constructor() { }

  LogIn( email: string, password: string) {
    if (email === 'admin@gmail.com' && password === 'admin') {
      this.isLoggedIn = true;
    }
    return this.isLoggedIn;


  }
}
