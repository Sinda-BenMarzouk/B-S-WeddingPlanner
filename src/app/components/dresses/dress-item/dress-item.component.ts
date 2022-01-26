import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/services/authentification/authentification.service';
import { DressService } from 'src/app/services/dresses/dress.service';

@Component({
  selector: 'app-dress-item',
  templateUrl: './dress-item.component.html',
  styleUrls: ['./dress-item.component.css']
})
export class DressItemComponent implements OnInit {
  @Input() dress: any;
  constructor(private dressService: DressService, private router: Router,  public  authentificationService: AuthentificationService) { }

  ngOnInit(): void {
  }


delete(id: number): void{

this.dressService.deleteDress(id).subscribe(


  (response) => {
    this.router.navigate(['/dresses']);
  },
   (error) => {
  console.log(error);
  }


);
}

}
