import { Component, Input } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { ValidInputService } from 'src/app/core/input/valid-input.service';

@Component({
  selector: 'app-input-select',
  templateUrl: './input-select.component.html',
  styleUrls: ['./input-select.component.css']
})
export class InputSelectComponent {
  @Input() holder!: string;
  @Input() formGroup!: FormGroup;
  @Input() controlName!: string;
  @Input() options!: Array<string>;

  constructor(public valid: ValidInputService) { }

  get formControl(): AbstractControl {
    return this.formGroup.controls[this.controlName];
  }

}
