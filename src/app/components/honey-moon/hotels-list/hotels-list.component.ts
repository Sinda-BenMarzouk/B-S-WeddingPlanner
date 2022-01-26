import { Component, OnInit, Output } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Hotel } from 'src/app/models/hotel/hotel';
import { HotelsListService } from 'src/app/services/hotels/hotels-list.service';
import { COLOR } from 'src/assets/color/colors';

@Component({
  selector: 'app-hotels-list',
  templateUrl: './hotels-list.component.html',
  styleUrls: ['./hotels-list.component.css']
})
export class HotelsListComponent implements OnInit {

  color = COLOR;
  model: NgbDateStruct;
  searchValue: string;
  searcharrDate: string;
  searchdepDate: string;
  @Output()  hotel: Hotel;
  @Output()hotels = [];
  constructor(private HotelService: HotelsListService) {
  }

  ngOnInit(): void {
    this.HotelService.getHotels().subscribe(
      (hotels) => this.hotels = hotels
);
  }

}
