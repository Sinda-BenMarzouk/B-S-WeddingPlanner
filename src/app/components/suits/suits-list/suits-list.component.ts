import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-suits-list',
  templateUrl: './suits-list.component.html',
  styleUrls: ['./suits-list.component.css']
})
export class SuitsListComponent implements OnInit {
  @Output() suit: any;

  suits = [

    {
      price: '1000dt',
      src: 'assets/img/Suits/10.jfif',
    },
    {
      price: '1500dt',
      src: 'assets/img/Suits/12.jfif',
    },

    {
      price: '850dt',
      src: 'assets/img/Suits/4.png',
    },
    {
      price: '900dt',
      src: 'assets/img/Suits/5.jfif',
    },

    {
      price: '700dt',
      src: 'assets/img/Suits/7.jfif',
    },
    {
      price: '1400dt',
      src: 'assets/img/Suits/8.jfif',
    },
    {
      price: '1300dt',
      src: 'assets/img/Suits/9.jfif',
    },
    {
      price: '950dt',
      src: 'assets/img/Suits/8.jpg',
    },
    {
      price: '1200dt',
      src: 'assets/img/Suits//11.jfif',
    },
   

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
