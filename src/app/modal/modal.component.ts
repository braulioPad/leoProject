import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {TimerInfo} from '../timer-info';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @ Inject(MAT_DIALOG_DATA) public data: TimerInfo) {}

  ngOnInit() {
  }

  cancelar() {
    this.dialogRef.close();
  }

}