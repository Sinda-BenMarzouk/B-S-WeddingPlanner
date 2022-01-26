import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/services/authentification/authentification.service';
import { COLOR } from 'src/assets/color/colors';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

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
