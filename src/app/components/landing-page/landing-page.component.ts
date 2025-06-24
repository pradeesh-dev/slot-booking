import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  imports: [],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent {
  scrollToBooking() {
    const el = document.getElementById('book-now-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
