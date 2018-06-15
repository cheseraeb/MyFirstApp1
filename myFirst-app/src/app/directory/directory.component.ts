import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {
  cheeze1: string;
  classes = {'blue': true, 'red': false, 'underline': true};
  test = true;
  constructor(private route: ActivatedRoute) {
      this.cheeze1 = route.snapshot.params['cheeze1'];
   }

  ngOnInit() {
  }

}
