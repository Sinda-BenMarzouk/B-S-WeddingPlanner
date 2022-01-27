import { Component, OnInit, Output } from '@angular/core';
import { Hotel } from 'src/app/models/hotel/hotel';

@Component({
  selector: 'app-venues-list',
  templateUrl: './venues-list.component.html',
  styleUrls: ['./venues-list.component.css']
})
export class VenuesListComponent implements OnInit {

  
  @Output()  hotel: Hotel;
  @Output()hotels = [
  {
    name: 'Palais Kobbet Ennhas',
    src1: './assets/img/venues/kobbet/1.jpg',
    src2: './assets/img/venues/kobbet/2.jpg',
    src3: './assets/img/venues/kobbet/3.jpg',
    src4: './assets/img/venues/kobbet/4.jpg',
    src5: './assets/img/venues/kobbet/5.jpg',
    stars: 4,
    price: 500
  },
  {
    name: 'LELLA ceremonie',
    src1: './assets/img/venues/lella/3.jpg',
    src2: './assets/img/venues/lella/2.jpg',
    src3: './assets/img/venues/lella/1.jpg',
    src4: './assets/img/venues/lella/4.jpg',
    src5: './assets/img/venues/lella/5.jpg',
    stars: 3,
    price: 300
  },
  {
    name: 'Palais Des Roses',
    src1: './assets/img/venues/rose/1.jpg',
    src2: './assets/img/venues/rose/2.jpg',
    src3: './assets/img/venues/rose/3.jpg',
    src4: './assets/img/venues/rose/1.jpg',
    src5: './assets/img/venues/rose/2.jpg',
    stars: 5,
    price: 700
  },
  {
    name: 'Le Serail Salle des fêtes',
    src1: './assets/img/venues/serail/1.jpg',
    src2: './assets/img/venues/serail/2.jpg',
    src3: './assets/img/venues/serail/3.jpg',
    src4: './assets/img/venues/serail/4.jpg',
    src5: './assets/img/venues/serail/5.jpg',
    stars: 3,
    price: 400
  },

  {
    name: 'Jinène Khadija',
    src1: './assets/img/venues/jinene/1.jpg',
    src2: './assets/img/venues/jinene/2.jpg',
    src3: './assets/img/venues/jinene/3.jpg',
    src4: './assets/img/venues/jinene/4.jpg',
    src5: './assets/img/venues/jinene/1.jpg',
    stars: 4,
    price: 500
  },
  {
    name: 'Salle de fêtes La Vallée',
    src1: './assets/img/venues/vallee/1.jpg',
    src2: './assets/img/venues/vallee/2.jpg',
    src3: './assets/img/venues/vallee/3.jpg',
    src4: './assets/img/venues/vallee/4.jpg',
    src5: './assets/img/venues/vallee/5.jpg',
    stars: 5,
    price: 800
  },
  {
    name: 'ElKantaoui Golf Course',
    src1: './assets/img/venues/kantaoui/1.jpg',
    src2: './assets/img/venues/kantaoui/2.jpg',
    src3: './assets/img/venues/kantaoui/3.jpg',
    src4: './assets/img/venues/kantaoui/4.jpg',
    src5: './assets/img/venues/kantaoui/5.jpg',
    stars: 3,
    price: 500
  },
  {
    name: 'Salle Des Fêtes élégance',
    src1: './assets/img/venues/elegance/1.jpg',
    src2: './assets/img/venues/elegance/2.jpg',
    src3: './assets/img/venues/elegance/3.jpg',
    src4: './assets/img/venues/elegance/4.jpg',
    src5: './assets/img/venues/elegance/5.jpg',
    stars: 5,
    price: 500
  },
  {
    name: 'Salle Des Fêtes ARIZONA',
    src1: './assets/img/venues/arizona/1.jpg',
    src2: './assets/img/venues/arizona/2.jpg',
    src3: './assets/img/venues/arizona/3.jpg',
    src4: './assets/img/venues/arizona/4.jpg',
    src5: './assets/img/venues/arizona/5.jpg',
    stars: 2,
    price: 300
  }
];
  constructor() { }

  ngOnInit(): void {
  }

}
