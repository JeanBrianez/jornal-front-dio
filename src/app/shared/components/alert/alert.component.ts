import {Component, Inject, OnInit} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Alert } from '../../models/aux-models/alert';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit{
  alert = {
    title: 'Sucesso!',
    description: 'Cadastrado com sucesso',
    btnSuccess: 'OK',
    btnCancel: 'Cancelar',
    colorSuccess: 'primary',
    colorCancel: 'warn',
    hasCancelBtn: false
    } as Alert

  constructor(
    public dialogRef: MatDialogRef<AlertComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Alert,
    ) {}

  ngOnInit() {
    if (this.data) {
      this.alert.title = this.data.title || this.alert.title;
      this.alert.description = this.data.description || this.alert.description; 
      this.alert.btnSuccess = this.data.btnSuccess || this.alert.btnSuccess;
      this.alert.colorSuccess = this.data.colorSuccess || this.alert.colorSuccess;
      this.alert.hasCancelBtn = this.data.hasCancelBtn || this.alert.hasCancelBtn;
      this.alert.btnCancel = this.data.btnCancel || this.alert.btnCancel;    
      this.alert.colorCancel = this.data.colorCancel || this.alert.colorCancel;
    }
  }

  /*openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: {name: this.name, animal: this.animal},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }*/
}