import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthorListComponent } from './author-list/author-list.component';
import { AuthorFormComponent } from './author-form/author-form.component';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { AuthorDetailComponent } from './author-detail/author-detail.component';



@NgModule({
  declarations: [
    AuthorListComponent, 
    AuthorFormComponent, AuthorDetailComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    ComponentsModule
  ],
  exports: [
    AuthorListComponent
  ]
})
export class AuthorsModule { }
