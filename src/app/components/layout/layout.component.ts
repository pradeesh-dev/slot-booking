import { Component } from '@angular/core';
import { LandingPageComponent } from "../landing-page/landing-page.component";
import { BookNowComponent } from "../book-now/book-now.component";
import { TurfInfoComponent } from "../turf-info/turf-info.component";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    LandingPageComponent, 
    BookNowComponent, 
    TurfInfoComponent,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {}
