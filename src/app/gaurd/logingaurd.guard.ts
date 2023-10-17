import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { LoginService } from '../login/login.service';

export const logingaurdGuard: CanActivateFn = (route, state) => {
  const loggedInState = inject(LoginService)

  if (loggedInState.isLoggedIn) {
    return true
  }
  else return false; 
  
};
