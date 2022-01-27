import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dress-item',
  templateUrl: './dress-item.component.html',
  styleUrls: ['./dress-item.component.css']
})
export class DressItemComponent implements OnInit {
  @Input() dress: any;
  constructor() { }

  ngOnInit(): void {
  }

}
