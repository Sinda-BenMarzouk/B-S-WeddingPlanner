import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CollectionsComponent } from './components/collections/collections.component';
import { DressesComponent } from './components/dresses/dresses.component';
import { DressItemComponent } from './components/dresses/dress-item/dress-item.component';
import { DressesListComponent } from './components/dresses/dresses-list/dresses-list.component';
import { HoneyMoonComponent } from './components/honey-moon/honey-moon.component';
import { ItemComponent } from './components/honey-moon/item/item.component';
import { HotelsListComponent } from './components/honey-moon/hotels-list/hotels-list.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { SuitsComponent } from './components/suits/suits.component';
import { SuitItemComponent } from './components/suits/suit-item/suit-item.component';
import { SuitsListComponent } from './components/suits/suits-list/suits-list.component';
import { ModalContentComponent } from './components/modal-content/modal-content.component';
import { ModalComponentComponent } from './components/modal-component/modal-component.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ContactComponent } from './components/contact/contact.component';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { AddSuitComponent } from './components/add-suit/add-suit.component';
import { AddDressComponent } from './components/add-dress/add-dress.component';
import { SearchdatearrPipe } from './pipes/searchdatearr.pipe';
import { SearchfilterPipe } from './pipes/searchfilter.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PacksComponent } from './components/packs/packs.component';
import { VenuesComponent } from './components/venues/venues.component';
import { VenuesListComponent } from './components/venues/venues-list/venues-list.component';
import { VenueDetailsComponent } from './components/venue-details/venue-details.component';
import { Home1Component } from './components/home1/home1.component';
import { BronzeComponent } from './components/bronze/bronze.component';
import { FormComponent } from './components/form/form.component';
import { ThanksComponent } from './components/thanks/thanks.component';
import { AccountComponent } from './components/account/account.component';
import { Header1Component } from './components/header1/header1.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CollectionsComponent,
    DressesComponent,
    DressItemComponent,
    DressesListComponent,
    HoneyMoonComponent,
    ItemComponent,
    HotelsListComponent,
    ReviewsComponent,
    SuitsComponent,
    SuitItemComponent,
    SuitsListComponent,
    ModalContentComponent,
    ModalComponentComponent,
    HomeComponent,
    ContactComponent,
    LoginComponent,
    SignUpComponent,
    SearchfilterPipe,
    SearchdatearrPipe,
    AddDressComponent,
    AddSuitComponent,
    PacksComponent,
    VenuesComponent,
    VenuesListComponent,
    VenueDetailsComponent,
    Home1Component,
    BronzeComponent,
    FormComponent,
    ThanksComponent,
    AccountComponent,
    Header1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({timeOut: 3500,
    positionClass: 'toast-center-center',
  preventDuplicates: true
  })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
