import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidInputService } from 'src/app/services/input/valid-input.service';

@Component({
  selector: 'app-author-form',
  templateUrl: './author-form.component.html',
  styleUrls: ['./author-form.component.css']
})
export class AuthorFormComponent implements OnInit {

  cadastro: FormGroup | undefined;

  constructor(
    public valid: ValidInputService,
    private fb: FormBuilder
    ) { }

  get form(): {[key: string]: AbstractControl;} {
    return this.cadastro!.controls;
  }

  ngOnInit() {
    this.cadastro = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      role: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      email: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]]
    });
  }

  submit(): void {
    this.cadastro!.markAllAsTouched();
    if (this.cadastro!.invalid) {
      return;
    }
    alert('SUCESSO\n\n'+ JSON.stringify(this.cadastro!.value, null, 4));
  }

  reset(): void {
    this.cadastro!.reset();
  }
}
