import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home1',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.css']
})
export class Home1Component implements OnInit {
  colorPrimary="#042A38";
  colorSecondary="#dfa974";
  colorLight="#dfa974";
  colorLightSecondary='#f7f5eb';

  CompName =[ "Dresses" , "Suits" , "Honey-moon" ];
  constructor() { }

  ngOnInit(): void {
  }
  FlyMe(){
    
  }

}