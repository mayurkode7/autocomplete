import { Component, OnInit } from '@angular/core';

import { SearchServiceService } from './search-service.service';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SearchServiceService]
})
export class AppComponent implements OnInit {



  results: Object;
  searchTerm$ = new Subject<string>();


  ngOnInit() {
  }

  constructor(private searchService: SearchServiceService) {
    this.searchService.search(this.searchTerm$)
      .subscribe(results => {
        this.results = results.results;
      });
  }

  select(item) {

    console.log(item);

  }
}
