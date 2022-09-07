import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ValidInputService } from 'src/app/core/input/valid-input.service';
import { IntegrationService } from 'src/app/core/integration.service';
import { AlertComponent } from 'src/app/shared/components/alert/alert.component';
import { Alert } from 'src/app/shared/models/aux-models/alert';
import { Author } from 'src/app/shared/models/author.model';

@Component({
  selector: 'app-author-form',
  templateUrl: './author-form.component.html',
  styleUrls: ['./author-form.component.css']
})
export class AuthorFormComponent implements OnInit {

  cadastro!: FormGroup;
  cargos!: Array<string>;

  constructor(
    public valid: ValidInputService,
    public dialog: MatDialog,
    private fb: FormBuilder,
    private dataService: IntegrationService,
    private router: Router
    ) { }

  get form(): {[key: string]: AbstractControl;} {
    return this.cadastro!.controls;
  }

  ngOnInit() {
    this.cadastro = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      role: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]]
    });
    this.cargos = ['Autor','TI','Direção'];
  }

  submit(): void {
    this.cadastro!.markAllAsTouched();
    if (this.cadastro!.invalid) {
      return;
    }
    const data = this.cadastro!.getRawValue() as Author;
    this.save(data);
  }

  reset(): void {
    this.cadastro!.reset();
  }

  private save(author: Author): void {
    this.dataService.save(author).subscribe(
      () => {
        const config = {
          data: {
            hasCancelBtn: true,
            btnSuccess: 'Ir para a listagem',
            btnCancel: 'Cadastrar um novo Autor',
            colorSuccess: 'accent', 
            colorCancel: 'primary'          
          } as Alert
        };
        const dialogRef = this.dialog.open(AlertComponent, config);
        dialogRef.afterClosed().subscribe((option: boolean) => {
          if (option) {
            this.router.navigateByUrl('');
          } else {
            this.reset();
          }
        })},
      () => {
        const config = {
          data: {
            title: 'Erro ao salvar o registro',
            description: 'Erro do Servidor, contate a administração',
            btnSuccess: 'Fechar',
            colorSuccess: 'warn'        
          } as Alert
        };
        this.dialog.open(AlertComponent, config);
      }
    )
  }
}
