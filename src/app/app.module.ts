import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
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
import { HotelDetailsComponent } from './components/hotel-details/hotel-details.component';
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
import { FormsModule } from '@angular/forms';
import { AddSuitComponent } from './components/add-suit/add-suit.component';
import { AddDressComponent } from './components/add-dress/add-dress.component';
import { SearchdatearrPipe } from './pipes/searchdatearr.pipe';
import { SearchfilterPipe } from './pipes/searchfilter.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




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
    HotelDetailsComponent,
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
    AddSuitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
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
