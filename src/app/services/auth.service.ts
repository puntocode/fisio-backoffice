import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { LoginForm } from '../auth/interfaces/auth.interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = `${environment.apiBackend}/auth`;

  constructor(private http:HttpClient, private router:Router) { }

  login(formData:LoginForm){
    return this.http.post(this.baseUrl, formData).pipe(
      tap( (resp:any) => localStorage.setItem('fisio-token', resp.token ))
    )
  }

  logout(){
    localStorage.removeItem('fisio-token');
    this.router.navigateByUrl('/auth');
  }


  validarToken():Observable<boolean>{
    const token = localStorage.getItem('fisio-token') || '';

    return this.http.get(`${this.baseUrl}/renew`, {
      headers: { 'x-token': token }
    }).pipe(
      tap( (resp:any) => localStorage.setItem('fisio-token', resp.token) ),
      map(resp => true),
      catchError(err =>  of(false))
    );
  }

}
