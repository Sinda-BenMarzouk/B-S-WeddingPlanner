import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/services/authentification/authentification.service';
import { SuitService } from 'src/app/services/suits/suit.service';

@Component({
  selector: 'app-suit-item',
  templateUrl: './suit-item.component.html',
  styleUrls: ['./suit-item.component.css']
})
export class SuitItemComponent implements OnInit {
  @Input() suit: any;
  constructor(private suitService: SuitService, private router: Router,  public  authentificationService: AuthentificationService) { }

  ngOnInit(): void {
  }


  delete(id: number): void{

    this.suitService.deleteSuit(id).subscribe(
      (response) => {
        this.router.navigate(['/suits']);
      },
       (error) => {
      console.log(error);
      }
    );
    }



}
