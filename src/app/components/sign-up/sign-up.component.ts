import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthentificationService } from 'src/app/services/authentification/authentification.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private authentificationService: AuthentificationService, private router: Router,    private toaster: ToastrService
    ) {
   }

  ngOnInit(): void {
  }
  signUp(signUpForm: NgForm): void  {
    this.authentificationService.signUp(signUpForm.value).subscribe(
      (data) => {
        localStorage.setItem('token', data.id);
        this.router.navigate(['/home']);
      },
      (erreur) => {
        if ( erreur.status === 422 ){
          this.toaster.error(`Email exists. Choose another email`);
          }
          else {

            this.toaster.error(`Server Error`);
            console.log(erreur);
          }

      }
    );
  }
}
