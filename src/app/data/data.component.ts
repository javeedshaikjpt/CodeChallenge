import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  data: any;

   // injecting data service
    constructor( private ds: DataService) {
      // subscribing to an observable in service
      this.ds.getData().subscribe( (data) => { this.data = data });
    }

  ngOnInit() {
  }


}
