import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  fetchdata() {
    return this.http.get('/public/friends.json').subscribe(
      (data) => console.log(data)
    );
  }
}
