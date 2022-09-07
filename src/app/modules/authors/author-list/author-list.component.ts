import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { IntegrationService } from 'src/app/core/integration.service';
import { Author } from 'src/app/shared/models/author.model';
import { Params } from 'src/app/shared/models/aux-models/params';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {
  params: Params = {
    page: 0,
    entries: 6
  }

  authors: Author[] = [];
  filterList!: FormGroup;
  roleOptions!: Array<string>;

  constructor(
    private integ: IntegrationService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.filterList = this.fb.group({
      text: [''],
      role: ['']
    });
    this.roleOptions = ['Autor','TI','Direção'];

    this.filterList.get('text')?.valueChanges
    .pipe(debounceTime(500))
    .subscribe((val: string) => {
      this.params.search = val;
      this.resetList();
    })
    this.filterList.get('role')?.valueChanges.subscribe((val: string) => {
      this.params.field = {type: 'role', value: val};
      this.resetList();
    })
    
    this.makeList();
  }

  open(): void {}

  onScroll(): void {
    this.makeList();
  }

  private makeList(): void {
    this.params.page!++;
    this.integ.getAll(this.params)
    .subscribe((authors: Author[]) => this.authors.push(...authors));
  }

  private resetList(): void {
    this.params.page = 0;
    this.authors = [];
    this.makeList();
  }

}
