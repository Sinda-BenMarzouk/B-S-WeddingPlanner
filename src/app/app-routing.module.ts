import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AuthGuard } from './guards/login.guard';
import { AdminGuard } from './guards/admin.guard';
import { HomeComponent } from './components/home/home.component';
import { HoneyMoonComponent } from './components/honey-moon/honey-moon.component';
import { LoginComponent } from './components/login/login.component';
import { AddDressComponent } from './components/add-dress/add-dress.component';
import { AddSuitComponent } from './components/add-suit/add-suit.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { CollectionsComponent } from './components/collections/collections.component';
import { DressesComponent } from './components/dresses/dresses.component';
import { HotelDetailsComponent } from './components/hotel-details/hotel-details.component';
import { SuitsComponent } from './components/suits/suits.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [

  {
    path: '',
    component : HomeComponent
  },
  {
    path: 'honey-moon',
    component : HoneyMoonComponent
  },
  {
    path: 'login',
    component : LoginComponent,


  },
  {
    path: 'add-dress',
    component :  AddDressComponent,
    canActivate: [  AdminGuard, AuthGuard ]
  },
  {
    path: 'add-suit',
    component :  AddSuitComponent,
    canActivate: [ AdminGuard, AuthGuard ]
  },
  {
    path: 'sign-up',
    component : SignUpComponent

  },

{
  path: 'collections',
  component : CollectionsComponent
},
{
  path: 'dresses',
  component : DressesComponent
},
{
  path: 'honey-moon/:id',
  component : HotelDetailsComponent
},
{
  path: 'suits',
  component : SuitsComponent
},
{
  path: 'home',
  component : HomeComponent
},
{
  path: 'contact',
  component : ContactComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
