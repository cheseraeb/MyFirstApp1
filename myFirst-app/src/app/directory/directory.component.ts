
import { Component, OnInit, Pipe } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { LoggingService } from '../logging.service';
import { DataService } from '../directory/data.service';

declare var firebase: any;

// import { FilterPipe } from '../filter.pipe';
@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css'],
  providers: [LoggingService, DataService],
  // Pipe: [FilterPipe]
})
export class DirectoryComponent implements OnInit {
  cheeze1: string;
  classes = {'blue': true, 'red': false, 'underline': true};
  test = false;
  friends = [];
  term = '';
  constructor(private logger: LoggingService, private route: ActivatedRoute, private dataservice: DataService) {
    this.cheeze1 = route.snapshot.params['cheeze1'];
  }
  logit() {
    this.logger.log();
  }

  ngOnInit() {
    this.fbGetData();
    // this.dataservice.fetchData()
    // .subscribe((data) => this.friends = data);

    }

    fbGetData() {
      firebase.database().ref('/').on('child_added', (snapshot) => {
        this.friends.push(snapshot.val());
        console.log(snapshot.val());
      });
    }
    fbPostData(name, catagory, class1) {
      firebase.database().ref('/').push({name: name, catagory: catagory, class1: class1});
    }
}
