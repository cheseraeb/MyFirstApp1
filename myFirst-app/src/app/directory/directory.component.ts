
import { Component, OnInit, Pipe } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoggingService } from '../logging.service';
import { DataService } from '../data.service';

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
  friends = [

  ];
  term = '';


  // constructor(private route: ActivatedRoute) {
  //     this.cheeze1 = route.snapshot.params['cheeze1'];
  //   } // (private logger: LoggingService) {
  //     logit(){
  //       this.logger.log();
  //     }
  //  };
  constructor(private logger: LoggingService, private route: ActivatedRoute, private dataservice: DataService) {
    this.cheeze1 = route.snapshot.params['cheeze1'];
  }
  logit() {
    this.logger.log();
  }

  ngOnInit() {
    this.dataservice.fetchdata();
  }

}
