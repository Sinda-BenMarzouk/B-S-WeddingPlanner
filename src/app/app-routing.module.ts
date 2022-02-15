import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './guards/login.guard';
import { AdminGuard } from './guards/admin.guard';
import { HomeComponent } from './components/home/home.component';
import { Home1Component } from './components/home1/home1.component';
import { HoneyMoonComponent } from './components/honey-moon/honey-moon.component';
import { LoginComponent } from './components/login/login.component';
import { AddDressComponent } from './components/add-dress/add-dress.component';
import { AddSuitComponent } from './components/add-suit/add-suit.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { CollectionsComponent } from './components/collections/collections.component';
import { DressesComponent } from './components/dresses/dresses.component';
import { VenueDetailsComponent } from './components/venue-details/venue-details.component';
import { SuitsComponent } from './components/suits/suits.component';
import { ContactComponent } from './components/contact/contact.component';
import { PacksComponent } from './components/packs/packs.component';
import { FormComponent } from './components/form/form.component';
import { ThanksComponent } from './components/thanks/thanks.component';
import { VenuesComponent } from './components/venues/venues.component';
import { BronzeComponent } from './components/bronze/bronze.component';
import { AccountComponent } from './components/account/account.component';
import { VenuesListComponent } from './components/venues/venues-list/venues-list.component';

const routes: Routes = [

  {
    path: '',
    component : HomeComponent
  },

  {
    path: 'homee',
    component : Home1Component
  },
  
  {
    path: 'login',
    component : LoginComponent,
  },
  {
    path: 'thanks',
    component : ThanksComponent,
  },
  {
    path: 'account',
    component : AccountComponent,
  },
  {
    path: 'form',
    component : FormComponent,
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
  path: 'bronze',
  component : BronzeComponent
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
  path: 'packs',
  component : PacksComponent
},
{
  path: 'venues',
  component : HoneyMoonComponent
},
{
  path: 'venuesList',
  component : VenuesListComponent
},
{
  path: 'venueDetails',
  component : VenueDetailsComponent
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
