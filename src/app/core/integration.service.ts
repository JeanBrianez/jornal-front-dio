import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Author } from '../shared/models/author.model';
import { Params } from '../shared/models/aux-models/params';
import { HttpParamsService } from './http-params.service';

const url = "http://localhost:3000/authors/";

@Injectable({
  providedIn: 'root'
})
export class IntegrationService {

  constructor(
    private http: HttpClient,
    private params: HttpParamsService) { }

  save(data: Author): Observable<Author> {
    return this.http.post<Author>(url, data);
  }

  getAll(params: Params): Observable<Author[]> {
    const configParams = this.params.configParams(params)  
    return this.http.get<Author[]>(url, {params: configParams});
  }
}
