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
      price: '300$',
      src: 'assets/img/Suits/10.jfif',
    },
    {
      price: '300$',
      src: 'assets/img/Suits/12.jfif',
    },

    {
      price: '300$',
      src: 'assets/img/Suits/4.png',
    },
    {
      price: '300$',
      src: 'assets/img/Suits/5.jfif',
    },

    {
      price: '300$',
      src: 'assets/img/Suits/7.jfif',
    },
    {
      price: '300$',
      src: 'assets/img/Suits/8.jfif',
    },
    {
      price: '300$',
      src: 'assets/img/Suits/9.jfif',
    },
    {
      price: '300$',
      src: 'assets/img/Suits/8.jpg',
    },
    {
      price: '300$',
      src: 'assets/img/Suits//11.jfif',
    },
    {
      price: '300$',
      src: 'assets/img/Suits//1.jpg',
    },

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
