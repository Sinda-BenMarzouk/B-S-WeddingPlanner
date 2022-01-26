import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { isNamedExportBindings } from 'typescript';
import { AuthentificationService } from 'src/app/services/authentification/authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
email = 'hesaidyes@gmail.com';
isAdmin: boolean;
  constructor(private authentificationService: AuthentificationService, private router: Router,    private toaster: ToastrService
    ) {
   }


   ngOnInit(): void {}

   login(loginForm: NgForm): void  {
     this.authentificationService.login(loginForm.value).subscribe(
       (data) => {
         localStorage.setItem('token', data.id);
         this.router.navigate(['/home']);
         this.isAdmin = this.email === loginForm.value.email ;
         console.log(this.isAdmin);

       },
       (erreur) => {
         if ( erreur.status === 401 ){
         this.toaster.error(`Incorrect Email/Password`);
         }

         else {
          this.toaster.error(`Server Error`);
         }
         console.log(erreur);
       }
     );
   }



}
