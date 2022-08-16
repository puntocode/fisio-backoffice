import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm:FormGroup = this.fb.group({
    name:     [ '', Validators.required ],
    password: [ '', Validators.required ],
    remember: [ false ]
  });

  constructor(
    private fb:FormBuilder,
    private authService:AuthService,
    private router:Router
  ) { }


  login(){
    this.authService.login(this.loginForm.value)
      .subscribe({
        next: resp => this.router.navigateByUrl('/admin'),
        error: (err) => console.log(err)
    });
  }






}
