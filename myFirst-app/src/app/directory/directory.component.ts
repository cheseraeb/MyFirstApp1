
import { Component, OnInit, Pipe } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { LoggingService } from '../logging.service';
import { DataService } from '../directory/data.service';
import { Config } from 'protractor';

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
  // data = [];
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
  showConfig() {
    this.dataservice.fetchData()
    .subscribe((data) => console.log(data));
  }
  ngOnInit() {
    this.showConfig();
    // this.dataservice.fetchdata().subscribe(
    //   (data) => console.log(data)
    // );

    }
}
