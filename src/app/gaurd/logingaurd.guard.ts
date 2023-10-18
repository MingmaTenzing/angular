import { inject } from '@angular/core';
import { CanActivateFn, CanMatchFn, Router } from '@angular/router';
import { LoginService } from '../login/login.service';

export const logingaurdGuard: CanActivateFn = (route, state) => {
  const loginservice = inject(LoginService);
  const router = inject(Router);
  return loginservice.isLoggedIn? true: router.navigate(['/login'])
};

export const checkmatchGuard: CanMatchFn = (route, segments) => {
  const checkLogin = inject(LoginService)
return checkLogin.isLoggedIn;
};

