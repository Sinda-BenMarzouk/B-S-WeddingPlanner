import { Component, Input, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Hotel } from 'src/app/models/hotel/hotel';

@Component({
  selector: 'app-honey-moon',
  templateUrl: './honey-moon.component.html',
  styleUrls: ['./honey-moon.component.css']
})
export class HoneyMoonComponent implements OnInit {
  model: NgbDateStruct;
  hotels: Hotel[];
  location:any;
  constructor() { }

  ngOnInit(): void {
     }

}
