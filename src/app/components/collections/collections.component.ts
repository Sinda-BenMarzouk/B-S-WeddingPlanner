import { Component, OnInit } from '@angular/core';
import { COLOR } from 'src/assets/color/colors';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css']
})
export class CollectionsComponent implements OnInit {
  color=COLOR;
  constructor() { }

  ngOnInit(): void {
  }

}
