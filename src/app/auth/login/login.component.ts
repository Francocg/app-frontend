import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm = this.fb.group({

    username: ['', Validators.required],
    password:   ['', Validators.required]

  });

  constructor(private router: Router, private fb: FormBuilder, private authService: AuthService, private _location: Location) { }

  ngOnInit(): void {
    if(localStorage.getItem('token')){
      return this._location.back();
    }
  }

  iniciarSesion(): void {
    console.log(this.loginForm.value);
    
    this.authService.login(this.loginForm.value).subscribe( (resp: any) => {

      localStorage.setItem('token', resp.token);
      
      this.router.navigateByUrl('/dashboard/archivos');
    
    },(err) => Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: err.error.msg
    }));
    
  }

}
