import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-usc-real-time',
  templateUrl: './usc-real-time.component.html',
  styleUrls: ['./usc-real-time.component.css']
})
export class UscRealTimeComponent implements OnInit {

  timerStarted1 = false;
  timerStarted2 = false;
  timerStarted3 = false;
  timerStarted4 = false;

  timerClosed1 = false;
  timerClosed2 = false;
  timerClosed3 = false;
  timerClosed4 = false;

  progressBarValue1 = 0;
  progressBarValue2 = 0;
  progressBarValue3 = 0;
  progressBarValue4 = 0;

  progressBarColor1 = 'warn';
  progressBarColor2 = 'warn';
  progressBarColor3 = 'warn';
  progressBarColor4 = 'warn';

  timer1$ = interval(1000);
  timer2$ = interval(1000);
  timer3$ = interval(1000);
  timer4$ = interval(1000);

  subscription1$: Subscription = new Subscription;
  subscription2$: Subscription = new Subscription;
  subscription3$: Subscription = new Subscription;
  subscription4$: Subscription = new Subscription;

  constructor() { }

  ngOnInit(): void {
  }

  startTimer1(seconds: number) {
    const time = seconds;

    this.subscription1$ = this.timer1$.subscribe((sec) => {
      this.timerStarted1 = true;
      this.progressBarValue1 = 100 - (100 - sec * 100 / time);
      if (sec === seconds) {
        this.subscription1$.unsubscribe();
      }
    });
  }

  startTimer2(seconds: number) {
    const time = seconds;

    this.subscription2$ = this.timer2$.subscribe((sec) => {
      this.timerStarted2 = true;
      this.progressBarValue2 = 100 - (100 - sec * 100 / time);
      if (sec === seconds) {
        this.subscription2$.unsubscribe();
      }
    });
  }

  startTimer3(seconds: number) {
    const time = seconds;

    this.subscription3$ = this.timer3$.subscribe((sec) => {
      this.timerStarted3 = true;
      this.progressBarValue3 = 100 - (100 - sec * 100 / time);
      if (sec === seconds) {
        this.subscription3$.unsubscribe();
      }
    });
  }

  startTimer4(seconds: number) {
    const time = seconds;

    this.subscription4$ = this.timer4$.subscribe((sec) => {
      this.timerStarted4 = true;
      this.progressBarValue4 = 100 - (100 - sec * 100 / time);
      if (sec === seconds) {
        this.subscription4$.unsubscribe();
      }
    });
  }

  closeTimer1(){
    this.timerClosed1 = true;
    this.subscription1$.unsubscribe();
    this.timerStarted1 = false;
    this.progressBarValue1 = 0;
  }

  closeTimer2(){
    this.timerClosed2 = true;
    this.subscription2$.unsubscribe();
    this.timerStarted2 = false;
    this.progressBarValue2 = 0;
  }

  closeTimer3(){
    this.timerClosed3 = true;
    this.subscription3$.unsubscribe();
    this.timerStarted3 = false;
    this.progressBarValue3 = 0;
  }

  closeTimer4(){
    this.timerClosed4 = true;
    this.subscription4$.unsubscribe();
    this.timerStarted4 = false;
    this.progressBarValue4 = 0;
  }

  updateColor1() {
    let progress = this.progressBarValue1;
    let timerColor = document.getElementById("timer1");
    let container = document.getElementById("timer-container1");

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

  updateColor2() {
    let progress = this.progressBarValue2;
    let timerColor = document.getElementById("timer2");
    let container = document.getElementById("timer-container2");

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

  updateColor3() {
    let progress = this.progressBarValue3;
    let timerColor = document.getElementById("timer3");
    let container = document.getElementById("timer-container3");

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

  updateColor4() {
    let progress = this.progressBarValue4;
    let timerColor = document.getElementById("timer4");
    let container = document.getElementById("timer-container4");

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
