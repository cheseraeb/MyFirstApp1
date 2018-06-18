
import { Component, OnInit, Pipe } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { FilterPipe } from '../filter.pipe';
@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css'],
  // Pipe: [FilterPipe]
})
export class DirectoryComponent implements OnInit {
  cheeze1: string;
  classes = {'blue': true, 'red': false, 'underline': true};
  test = false;
  friends = [
    {name : 'Carika', catagory: 'green', class: '1'},
    {name : 'Duane', catagory: 'yellow', class: '3'},
    {name : 'Francois', catagory: 'blue', class: '2'},
    {name : 'Grant', catagory: 'green', class: '1'},
    {name : 'Rea', catagory: 'orange', class: '4'},
    {name : 'Dean', catagory: 'yellow', class: '3'},
    {name : 'Shane', catagory: 'green', class: '1'},
    {name : 'Vince', catagory: 'blue', class: '2'}
  ];
  term = '';
  constructor(private route: ActivatedRoute) {
      this.cheeze1 = route.snapshot.params['cheeze1'];
   }

  ngOnInit() {
  }

}
