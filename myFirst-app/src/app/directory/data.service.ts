import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  Url = 'https://myfirst-204810.firebaseio.com/.json';
  fetchData() {
    return this.http.get(this.Url);
  }
}
