import { LoginSceneService } from './login-scene.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-login-scene',
  templateUrl: './login-scene.component.html',
  styleUrls: ['./login-scene.component.sass']
})
export class LoginSceneComponent implements OnInit {

  constructor(
    private router: Router,
    private httpClient: HttpClient,
    private loginService: LoginSceneService,
  ) { }

  username = '';
  password = '';
  errorMessage = '';
  loading: boolean = false;
  empty: boolean = false;
  errorLogin: boolean = false;

  theData: any;

  ngOnInit() {
  }

  login(){
    if(this.username === '' || this.password === ''){
      this.empty = true;
      return;
    }
    this.loading = true;
    this.httpClient.post('https://nameless-cove-75161.herokuapp.com/api/auth/sign-in',
    {
      'username' : this.username,
      'password' : this.password
    })
    .subscribe(
      data  => {
      this.theData = data;
      if (this.theData.success === true) {
        localStorage.setItem('userToken', this.theData.token);
        this.loginService.setLoginData(this.theData);
        this.router.navigateByUrl('home');
      } else {
      }
    },
    error  => {
      this.errorLogin = true;
      this.errorMessage = error.error.message;
      this.loading = false;
      return;
    }
    );
  }
}
