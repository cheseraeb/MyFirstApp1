import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Cheeze APP Angular 2';
  inputarray2 = {
    name: 'Cheeze',
    surname: 'BIG'

  };

  yell(e) {
    alert('WHAT THE HELL!!!!!');
  }

}
