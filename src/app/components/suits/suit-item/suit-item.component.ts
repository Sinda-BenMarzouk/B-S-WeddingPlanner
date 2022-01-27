import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-suit-item',
  templateUrl: './suit-item.component.html',
  styleUrls: ['./suit-item.component.css']
})
export class SuitItemComponent implements OnInit {
  @Input() suit: any;
  constructor() { }

  ngOnInit(): void {
  }

}
