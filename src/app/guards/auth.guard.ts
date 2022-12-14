import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService:AuthService, private router:Router) {}


  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.authService.validarToken().pipe(
      tap(isAuthenticate => {
        console.log('guard');
        if(!isAuthenticate) this.router.navigateByUrl('/auth/login');
      })
    )
  }

}
