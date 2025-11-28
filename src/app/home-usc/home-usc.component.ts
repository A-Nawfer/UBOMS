import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-home-usc',
  templateUrl: './home-usc.component.html',
  styleUrls: ['./home-usc.component.css']
})
export class HomeUscComponent implements OnInit {

  loadingImg =
    'https://cdn.auth0.com/blog/auth0-react-sample/assets/loading.svg';

  constructor(@Inject(DOCUMENT) public document: Document,
              public auth: AuthService,
              public router: Router,) { }

  ngOnInit(): void {

  }

  logout() {
    this.auth.logout({
      returnTo: this.document.location.origin
    });
  }
}
