import { Pipe, PipeTransform } from '@angular/core';
import { Hotel } from '../models/hotel/hotel';


@Pipe({
  name: 'searchdatearr'
})
export class SearchdatearrPipe implements PipeTransform {

  transform(hotels: Hotel[], searchValue: string): Hotel[]{
    if (!hotels || !searchValue){
      return hotels;
    }

    return hotels.filter(hotel =>

        hotel.location.includes(searchValue)
      );
  }

}
