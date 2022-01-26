import { Pipe, PipeTransform } from '@angular/core';
import { Hotel } from '../models/hotel/hotel';



@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(hotels: Hotel[], searchValue: string): Hotel[]{
    if (!hotels || !searchValue){
      return hotels;
    }

    return hotels.filter(hotel =>

        hotel.location.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
      );
  }

}
