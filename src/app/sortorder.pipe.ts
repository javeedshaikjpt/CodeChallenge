import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortorder'
})
export class SortorderPipe implements PipeTransform {

  transform(values: Array<any>, args?: any): any {

    if(values) {
      return values.sort( function (a, b) {
        // console.log(a[args.property]);
        if( a[args.property] < b[args.property]  )
          return 1 * args.direction;
        else if( a[args.property] > b[args.property])
          return -1 * args.direction;
        else
          return 0;

      });
    }

  }

}
