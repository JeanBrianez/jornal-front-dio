import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Params } from '../shared/models/aux-models/params';

@Injectable({
  providedIn: 'root'
})
export class HttpParamsService {

  constructor() { }

  configParams (config: Params): HttpParams {
    let httpParams = new HttpParams();
    if (config.page) {
      httpParams = httpParams.set('_page', config.page.toString());
    }
    if (config.entries) {
      httpParams = httpParams.set('_limit', config.entries.toString()); 
    }
    if (config.search) {
      httpParams = httpParams.set('q', config.search);
    }
    if (config.field) {
      httpParams = httpParams.set(config.field.type, config.field.value.toString());
    }   
    httpParams = httpParams.set('_sort', 'id');
    httpParams = httpParams.set('_order', 'desc');

    return httpParams;
  }
}
