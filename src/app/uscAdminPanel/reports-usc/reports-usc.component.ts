import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reports-usc',
  templateUrl: './reports-usc.component.html',
  styleUrls: ['./reports-usc.component.css']
})
export class ReportsUscComponent implements OnInit {
  navLinks: any[];
  activeLinkIndex = -1;

  constructor(private router: Router) {
    this.navLinks = [
      {
          label: "DAY",
          link: './day-usc',
          index: 0
      }, {
          label: "MONTH",
          link: './month-usc',
          index: 1
      }, {
          label: "FILTER",
          link: './filter-usc',
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
