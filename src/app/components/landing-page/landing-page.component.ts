import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing-page',
  imports: [ButtonModule, CommonModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
  onBookNowClick() {
    const bookNowSection = document.getElementById('book-now-section');
    if (bookNowSection) {
      bookNowSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}