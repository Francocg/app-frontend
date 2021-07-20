import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { LoginForm } from '../interface/login-form.interface';
import { tap, map, catchError, delay } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Usuario } from '../models/Usuario.,model';

const endpoint = environment.endpoint;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public usuario: Usuario;

  constructor(private http: HttpClient, private router: Router) { }




  login(formData: LoginForm) {
    return this.http.post(`http://localhost:3000/api/auth/sign-in`, formData);
  }


  validarToken(): Observable<boolean> {
    const token = localStorage.getItem('token') || '';

    return this.http.get(`http://localhost:3000/api/auth/validar`, {
      headers: {
        'token': token
      }
    }).pipe(map((resp: any) => {

      this.usuario = resp.data_usuario;
      console.log(resp.data_usuario);
      
      localStorage.setItem('token', resp.token);
      return true;
      }),
      catchError( error => of(false))
    );

  }

}
