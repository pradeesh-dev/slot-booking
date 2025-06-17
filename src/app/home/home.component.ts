import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from '../components/landing-page/landing-page.component';
import { BookNowComponent } from '../components/book-now/book-now.component';
import { SlidesComponent } from '../components/slides/slides.component';
import { ContactComponent } from '../components/contact/contact.component';
import { AddressComponent } from '../components/address/address.component';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    LandingPageComponent,
    BookNowComponent,
    SlidesComponent,
    ContactComponent,
    AddressComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {}