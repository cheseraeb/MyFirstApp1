import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeTitle = 'Welcome to Angular 2';
  // myValue = 'I Love Cheeze';
  // trueOrFalse = true;

// Two way property binding
inputarray1 = {
  name: 'BIG',
  surname: 'CHEEZE',
  comments: ''
};
// event binding
alertme(text) {
    alert(text);
  }
 constructor() {}
  ngOnInit() {}

}
