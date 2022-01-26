import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DressService } from 'src/app/services/dresses/dress.service';

@Component({
  selector: 'app-add-dress',
  templateUrl: './add-dress.component.html',
  styleUrls: ['./add-dress.component.css']
})
export class AddDressComponent implements OnInit {

  constructor(private dressService: DressService, private router: Router ) { }

  ngOnInit(): void {
  }

addDress(formulaire: NgForm): void{
  this.dressService.addDress(formulaire.value).subscribe(

(response) => {


  this.router.navigate(['/dresses']);

},
 (error) => {
console.log(error);


}

  );
}


}
