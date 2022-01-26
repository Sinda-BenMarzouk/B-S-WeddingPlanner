import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIS } from 'src/app/constantes/api';
import { Dress } from 'src/app/models/dress/dress';

@Injectable({
  providedIn: 'root'
})
export class DressService {
  private   dresses: Dress[];
  constructor(  private http: HttpClient) { }




  getDresses(): Observable<Dress[]>{
    return this.http.get<Dress[]>(APIS.dresses);
  }
addDress(dress: Dress): Observable<any>{

  return this.http.post<any>(APIS.dresses, dress);


}



deleteDress(id: number): Observable<any>{
return this.http.delete(APIS.dresses + `/${id}` );

}
}
