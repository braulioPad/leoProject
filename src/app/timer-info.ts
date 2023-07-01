export class TimerInfo {

  timerRunning: boolean;
  fechainicio: string | null;
  fechafin: string | null;
  startTimerNumber: number | null;
  stopTimerNumber: number | null;
   
  

  constructor(timerRunning: boolean,fechainicio: string,fechafin: string,startTimerNumber: number,stopTimerNumber: number) {
    this.timerRunning = timerRunning;
    this.fechainicio=fechainicio;
    this.fechafin=fechafin;
    this.startTimerNumber=startTimerNumber;
    this.stopTimerNumber=stopTimerNumber;
}
}
