import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { COLOR } from 'src/assets/color/colors';
import { AuthentificationService } from 'src/app/services/authentification/authentification.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css'],
  providers: [NgbRatingConfig]
})
export class ReviewsComponent implements OnInit {
  color = COLOR;
  currentDate = new Date();
  selected = 0;
  hovered = 0;
  readonly = false;
 review = {
   'name' : 'x',
 'rating': 0,
    ' com': 'this website is amazing'};

  reviews = [];
  constructor(rtconfig: NgbRatingConfig, public  authentificationService: AuthentificationService) {
    rtconfig.max = 5;
    rtconfig.readonly = true;
   }

  ngOnInit(): void {


  }

  addReviews(form: NgForm): void{
    const com = form.value;
    console.log(com);

    this.reviews.push(com);
    console.log(this.reviews);


}
}
