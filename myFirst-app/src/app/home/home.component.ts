import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeTitle = 'Welcome to Angular 2';
  myValue = "I Love Cheeze";
  trueOrFalse = true;
  constructor() { }

  ngOnInit() {
  }

}
