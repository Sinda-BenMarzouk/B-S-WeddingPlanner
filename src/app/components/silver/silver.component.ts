import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/services/authentification/authentification.service';
import { COLOR } from 'src/assets/color/colors';


@Component({
  selector: 'app-header1',
  templateUrl: './header1.component.html',
  styleUrls: ['./header1.component.css']
})
export class Header1Component implements OnInit {

  color = COLOR;
  constructor(
    public  authentificationService: AuthentificationService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }


  logOut(): void {
    this.authentificationService.logout();
    this.router.navigate(['login']);
  }
}
