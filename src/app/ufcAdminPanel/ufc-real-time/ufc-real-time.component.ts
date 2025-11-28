import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-ufc-real-time',
  templateUrl: './ufc-real-time.component.html',
  styleUrls: ['./ufc-real-time.component.css']
})
export class UfcRealTimeComponent implements OnInit {

  timerStarted = false;
  timerClosed = false;

  progressBarValue = 0;
  progressBarColor = 'warn';
  curSec: number = 0;

  time = 0;
  timer$ = interval(1000);

  subscription$: Subscription = new Subscription;

  constructor() { }

  ngOnInit(): void {
  }

  startTimer(seconds: number) {
    this.time = seconds;
    const time = seconds;

    this.subscription$ = this.timer$.subscribe((sec) => {
      this.timerStarted = true;
      this.progressBarValue = 100 - (100 - sec * 100 / time);
      this.curSec = sec;
      if (this.curSec === seconds) {
        this.subscription$.unsubscribe();
      }
    });
  }

  closeTimer(){
    this.timerClosed = true;
    this.subscription$.unsubscribe();
    this.timerStarted = false;
    this.progressBarValue = 0;
  }

  updateColor() {
    let progress = this.progressBarValue;
    let timerColor = document.getElementById("timer");
    let container = document.getElementById("timer-container");

    const shake = [
      { transform: 'translate(0)' },
      { transform: 'translate(.2em)' },
      { transform: 'translate(-.2em)' },
      { transform: 'translate(.2em)' },
      { transform: 'translate(-.2em)' },
      { transform: 'translate(.2em)' },
      { transform: 'translate(-.2em)' },
      { transform: 'translate(.2em)' },
      { transform: 'translate(-.2em)' },
      { transform: 'translate(.2em)' },
      { transform: 'translate(-.2em)' },
      { transform: 'translate(.2em)' },
      { transform: 'translate(-.2em)' },
      { transform: 'translate(.2em)' },
      { transform: 'translate(-.2em)' },
      { transform: 'translate(.2em)' },
      { transform: 'translate(-.2em)' },
      { transform: 'translate(.2em)' },
      { transform: 'translate(-.2em)' },
      { transform: 'translate(.2em)' }
    ]

    const timing = {
      duration: 1000,
      iterations: 1,
    }

    if (progress<90){
       return 'primary';
    } else if (progress>=90){
      container!.animate(shake, timing);
      timerColor!.style.color = 'red';
      return 'warn';
    } else if (progress>=95){
      container!.animate(shake, timing);
      return 'warn';
    } else if (progress>=100){
      container!.animate(shake, timing);
      return 'warn';
    } else {
      return 'warn';
    }
 }
}
