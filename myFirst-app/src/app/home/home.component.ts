import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent implements OnInit {
  inputarray1 = {
    name: 'BIG',
    surname: 'CHEEZE',
    comments: 'here goes comment',
  };

  homeTitle = 'Welcome to Angular 2';
  myValue = 'I Love Cheeze';
  trueOrFalse = true;
// Input
  @Input() cheeze;
// output
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onYell = new EventEmitter();

// Two way property binding

// event binding
fireYellEvent(e) {
  this.onYell.emit(e);
}

yell(e) {
  alert('WHAT THE HELL!!!!!');
}

alertme(text) {
    alert(text);
  }
 constructor() {}

  ngOnInit() {}

}
