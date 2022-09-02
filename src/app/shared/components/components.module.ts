import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextComponent } from './input-text/input-text.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertComponent } from './alert/alert.component';
import { InputSelectComponent } from './input-select/input-select.component';



@NgModule({
  declarations: [InputTextComponent, AlertComponent, InputSelectComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    InputTextComponent,
    InputSelectComponent,
    AlertComponent
  ],
  entryComponents: [
    AlertComponent
  ]
})
export class ComponentsModule { }
