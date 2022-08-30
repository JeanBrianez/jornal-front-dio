import { Component, Input } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { ValidInputService } from 'src/app/services/input/valid-input.service';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css']
})
export class InputTextComponent{

  @Input() holder!: string;
  @Input() formGroup!: FormGroup;
  @Input() controlName!: string;


  constructor(public valid: ValidInputService) { }

  
  get formControl() : AbstractControl {
    return this.formGroup.controls[this.controlName];
  }
  
}
