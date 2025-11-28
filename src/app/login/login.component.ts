import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// Import the AuthService type from the SDK
import { AuthService } from '@auth0/auth0-angular';

import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loadingImg =
    'https://cdn.auth0.com/blog/auth0-react-sample/assets/loading.svg';

  constructor(@Inject(DOCUMENT) public document: Document,
              public auth: AuthService,
              public router: Router,) { }

  ngOnInit(): void {

  }

  loginWithRedirect(): void{
    this.auth.loginWithRedirect();
    this.router.navigate(['/home']);
  }
}
