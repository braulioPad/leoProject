import { Component, NgZone, OnDestroy, OnInit, ChangeDetectorRef } from '@angular/core';

import { TimerInfo } from '../timer-info';

@Component({
  selector: 'app-timers',
  templateUrl: './timers.component.html',
  styleUrls: ['./timers.component.css']
})
export class TimersComponent implements OnInit, OnDestroy{
  timers: { [key: string]: TimerInfo } = {
    timer1: {
      timerRunning: false,
      fechainicio: null,
      fechafin: null,
      startTimerNumber: null,
      stopTimerNumber: null
    },
    timer2: {
      timerRunning: false,
      fechainicio: null,
      fechafin: null,
      startTimerNumber: null,
      stopTimerNumber: null
    }
  };


  ngOnInit(): void {
   /*  this.updateClock(); */
  }

  ngOnDestroy(): void {
   /*  window.cancelAnimationFrame(this.intervalIds['clock']); */
  }
}
