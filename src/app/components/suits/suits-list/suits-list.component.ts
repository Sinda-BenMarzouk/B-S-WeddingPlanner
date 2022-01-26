import { Component, OnInit, Output } from '@angular/core';
import { Suit } from 'src/app/models/suit/suit';
import { SuitService } from 'src/app/services/suits/suit.service';

@Component({
  selector: 'app-suits-list',
  templateUrl: './suits-list.component.html',
  styleUrls: ['./suits-list.component.css']
})
export class SuitsListComponent implements OnInit {
  @Output() suit: any;

  suits: Suit[];

  constructor(

    private suitService: SuitService
  ) { }

  ngOnInit(): void {
    this.suitService.getSuits().subscribe(
       (suits) => this.suits = suits




    );
    }

}
