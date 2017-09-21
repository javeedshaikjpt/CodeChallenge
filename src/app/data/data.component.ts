import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { SortorderPipe } from '../sortorder.pipe';
@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  data: any;
  column: any;
  flag : boolean = true;
  direction: number;

   // injecting data service
    constructor( private ds: DataService) {
      // subscribing to an observable in service
      this.ds.getData().subscribe( (data) => { this.data = data });
    }

  ngOnInit() {
  }

  // passing the column name to be sorted
  ev(property:string) {
    this.flag = !this.flag;
    this.direction = this.flag?-1:1;
    this.column = property;
  }

}
