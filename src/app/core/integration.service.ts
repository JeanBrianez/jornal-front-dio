import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Author } from '../shared/models/author.model';

const url = "http://localhost:3000/authors/";

@Injectable({
  providedIn: 'root'
})
export class IntegrationService {

  constructor(private http: HttpClient) { }

  save(data: Author): Observable<Author> {
    return this.http.post<Author>(url, data);
  }
}
