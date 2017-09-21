import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  data;

  constructor(private _http: Http) {

  }
  // making http call to fetch the data from json file
  getData(): Observable<any> {
    return this._http.get('../assets/data.json')
      .map((res) => res.json()); // transforming the data to json format
  }
}
