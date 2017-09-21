import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-challenge3',
  templateUrl: './challenge3.component.html',
  styleUrls: ['./challenge3.component.css']
})
export class Challenge3Component implements OnInit {

  data;
  datalen;
  data_arr;
  sortedArray: any =[];
  constructor( private ds: DataService ) {
    // subscribing to the data from service
    this.ds.getData().subscribe((data) => {
      this.data = data;
      this.datalen = this.data.length;
      this.data_arr = {};
      // formatting the data as per requirement
      for (let i = 0; i < this.datalen; i++) {
        if (this.data_arr[this.data[i].name]) { // checking whether key exist in the object
          this.data_arr[this.data[i].name][this.data[i].category] = this.data[i].amount;
        } else {
          this.data_arr[this.data[i].name] = {};
          this.data_arr[this.data[i].name]["name"] = data[i].name;
          this.data_arr[this.data[i].name][this.data[i].category] = this.data[i].amount;
        }
      }
      console.log(Object.values(this.data_arr));

      this.sortedArray = Object.values(this.data_arr);
    });
  }
    ngOnInit() {

    }
}


