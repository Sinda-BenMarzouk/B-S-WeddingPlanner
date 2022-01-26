import { Component, Input, OnInit, Output } from '@angular/core';
import { NgbCarouselConfig, NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { Hotel } from 'src/app/models/hotel/hotel';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
  providers: [NgbCarouselConfig, NgbRatingConfig]
})
export class ItemComponent implements OnInit {
  @Input() @Output() hotel: Hotel;

  constructor(config: NgbCarouselConfig, rtconfig: NgbRatingConfig) {
    config.interval = 1000000;
    config.wrap = false;
    config.pauseOnHover = false;
   // config.showNavigationIndicators =false;
    rtconfig.max = 5;
    rtconfig.readonly = true;

   }

  ngOnInit(): void {
  }

}
