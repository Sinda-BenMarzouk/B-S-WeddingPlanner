import { Component, Input, OnInit } from '@angular/core';
import { COLOR } from 'src/assets/color/colors';

@Component({
  selector: 'app-suits',
  templateUrl: './suits.component.html',
  styleUrls: ['./suits.component.css']
})
export class SuitsComponent implements OnInit {
  @Input() suit: any;
  color= COLOR;
  constructor() { }

  ngOnInit(): void {
  }

}
