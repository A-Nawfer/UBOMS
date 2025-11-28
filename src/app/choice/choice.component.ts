import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Import the AuthService type from the SDK
import { AuthService } from '@auth0/auth0-angular';

import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.css']
})
export class ChoiceComponent implements OnInit {

  constructor(@Inject(DOCUMENT) public document: Document,
              public auth: AuthService,
              public router: Router) { }

  ngOnInit(): void {
  }

}
