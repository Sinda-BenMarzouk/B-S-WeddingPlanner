import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dresses-list',
  templateUrl: './dresses-list.component.html',
  styleUrls: ['./dresses-list.component.css']
})
export class DressesListComponent implements OnInit {
  @Output() dress: any;

  dresses = [

    {
      price: '300dt',
      src: 'assets/img/Dresses/7.jpg',
    },
    {
      price: '500dt',
      src: 'assets/img/Dresses/8.jpg',
    },
    {
      price: '1000dt',
      src: 'assets/img/Dresses/9.jpg',
    },
    {
      price: '800dt',
      src: 'assets/img/Dresses/10.jpg',
    },

    {
      price: '500dt',
      src: 'assets/img/Dresses/2.jpg',
    },
    {
      price: '300dt',
      src: 'assets/img/Dresses/3.jpg',
    },
    {
      price: '1000dt',
      src: 'assets/img/Dresses/1.jfif',
    },
    {
      price: '300dt',
      src: 'assets/img/Dresses/5.jfif',
    },
    {
      name: 'Dress 10',
      price: '500dt',
      src: 'assets/img/Dresses/4.jpg',
    },

    {
      price: '650dt',
      src: 'assets/img/Dresses/6.jpg',
    },
    {
      price: '1000dt',
      src: 'assets/img/Dresses/11.jpg',
    },
    {
      price: '750dt',
      src: 'assets/img/Dresses/2.jfif',
    },
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
