import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIS } from 'src/app/constantes/api';
import { Hotel } from 'src/app/models/hotel/hotel';


@Injectable({
  providedIn: 'root'
})
export class HotelsListService {

  private hotels:Hotel[];

  constructor(private http: HttpClient) {
    this.hotels=[];

   }
     public getHotels(): Observable<Hotel[]>{
    return this.http.get<Hotel[]>(APIS.hotels);
  }



/*public getHotel(id): Observable<Hotel>{
  let hotels:Hotel[]=this.getHotels();
  return hotels.find(p => p.id==id);
}*/
public getHotel(id): Observable<Hotel>{
  return this.http.get<Hotel>(APIS.hotels + `/${id}`);
}
}
