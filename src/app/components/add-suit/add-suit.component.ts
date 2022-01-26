import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SuitService } from 'src/app/services/suits/suit.service';

@Component({
  selector: 'app-add-suit',
  templateUrl: './add-suit.component.html',
  styleUrls: ['./add-suit.component.css']
})
export class AddSuitComponent implements OnInit {

  constructor(private suitService: SuitService, private router: Router ) { }

  ngOnInit(): void {
  }

addSuit(formulaire: NgForm): void{
  this.suitService.addSuit(formulaire.value).subscribe(

(response) => {


  this.router.navigate(['/suits']);

},
 (error) => {
console.log(error);


}

  );
}


}
