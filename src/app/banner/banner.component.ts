import { ChangeDetectorRef, Component, NgZone } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { TimerInfo } from '../timer-info';
import { ModalComponent } from '../modal/modal.component';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {


  //@ViewChild(MatTable) tabla1!: MatTable<TimerInfo>;
  public currentDateTime: string = '';
  
  constructor(private ngZone: NgZone, private cdr: ChangeDetectorRef,public dialog: MatDialog) {}

  

  abrirDialogo() {
    const dialogo1 = this.dialog.open(ModalComponent
    );

    dialogo1.afterClosed().subscribe(art => {
      //if (art != undefined)
        //agregar funcion
    });
  }

  updateClock(): void {
    const currentDate = new Date();
    this.ngZone.run(() => {
      this.currentDateTime = currentDate.toLocaleTimeString();
    });
  }

}
