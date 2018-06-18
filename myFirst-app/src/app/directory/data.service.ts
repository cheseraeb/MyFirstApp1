import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  Url = 'assets/friends.json';
  fetchData() {
    return this.http.get(this.Url);
  }
}
