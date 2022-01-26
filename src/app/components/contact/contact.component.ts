import { HttpHeaders } from '@angular/common/http';
import { Component, Injectable, OnInit, Type } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';


import { COLOR } from 'src/assets/color/colors';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
@Injectable()
export class ContactComponent implements OnInit {

  color = COLOR;
  constructor(private toastr: ToastrService,private http: HttpClient) { }

  ngOnInit(): void {
  }
    pop(): void
    {
      this.toastr.success('You are subscribed to our news letter', 'Great');
   }
   onSubmit(contactForm: NgForm): void {
    if (contactForm.valid) {
      const email = contactForm.value;
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      this.http.post('https://formspree.io/asdlf7asdf',
        { name: email.fn, replyto: email.email },
        { 'headers': headers }).subscribe(
          response => {
            console.log(response);
          }
        );
    }
  }}
