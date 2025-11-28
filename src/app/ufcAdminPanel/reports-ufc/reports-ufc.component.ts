import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reports-ufc',
  templateUrl: './reports-ufc.component.html',
  styleUrls: ['./reports-ufc.component.css']
})
export class ReportsUfcComponent implements OnInit {
  navLinks: any[];
  activeLinkIndex = -1;

  constructor(private router: Router) {
    this.navLinks = [
      {
          label: "DAY",
          link: './day-ufc',
          index: 0
      }, {
          label: "MONTH",
          link: './month-ufc',
          index: 1
      }, {
          label: "FILTER",
          link: './filter-ufc',
          index: 2
      },
  ];
   }

  ngOnInit(): void {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
    });
  }

}
