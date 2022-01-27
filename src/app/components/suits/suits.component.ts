import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-suits',
  templateUrl: './suits.component.html',
  styleUrls: ['./suits.component.css']
})
export class SuitsComponent implements OnInit {
  @Input() suit: any;
  constructor() { }

  ngOnInit(): void {
  }

}
