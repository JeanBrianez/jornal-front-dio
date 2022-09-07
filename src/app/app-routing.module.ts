import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthorsModule } from './modules/authors/authors.module';
import { AuthorListComponent } from './modules/authors/author-list/author-list.component';
import { AuthorFormComponent } from './modules/authors/author-form/author-form.component';

const routes: Routes = [
  {
    path: '', 
    component: AuthorListComponent
  },
  {
    path: 'cadastro',
    children: [
      {
        path: '',
        component: AuthorFormComponent
      }]
  }/*,
  {
    path: 'details/:id', 
    loadChildren: () => (import("../app/components/book-cart/details/details.component")
    .then(c => c.DetailsComponent))
  },
  {
    path: 'create',
    loadChildren: () => (import("../app/components/book-cart/create-product/create-product.component")
    .then(c => c.CreateProductComponent))
  },
  {
    path: 'edit/:id',
    loadChildren: () => (import("../app/components/book-cart/edit-product/edit-product.component")
    .then(c => c.EditProductComponent))
  }*/
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AuthorsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }