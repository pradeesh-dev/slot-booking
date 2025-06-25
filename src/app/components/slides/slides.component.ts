import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-slides',
  imports: [CommonModule, CardModule, ButtonModule],
  templateUrl: './slides.component.html',
  styleUrl: './slides.component.scss'
})
export class SlidesComponent implements OnInit {
  coachingClasses: any[] = [];

  ngOnInit() {
    this.coachingClasses = [
      {
        title: 'Karate Coaching',
        subtitle: 'Every Thursday and Saturday',
        timing: '03:00 PM - 05:00 PM',
        description:
          'Build confidence and discipline with expert-led Karate sessions. Improve self-defense, agility, and focus in a fun and supportive environment.',
        image_url:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRqGW6dPJ7elX8g_xAVKTXvFAq9BMpDib2tNwcXYbJAnUSeLD9J7JaTZxElEGqeLodTX8&usqp=CAU',
      },
      {
        title: 'Football Coaching',
        subtitle: 'Every Tuesday and Sunday',
        timing: '06:00 AM - 08:00 AM',
        description:
          'Enhance skills with professional football training. Develop teamwork, endurance, and game strategy while having fun on the field.',
        image_url:
          'https://i.pinimg.com/736x/ae/98/e2/ae98e2b606619e035c2711fddcc0a5d7.jpg',
      },
      {
        title: 'Cricket Coaching',
        subtitle: 'Every Monday and Friday',
        timing: '06:00 AM - 08:00 AM',
        description:
          'Master the art of cricket with professional coaching. Learn batting, bowling, and fielding techniques from experienced coaches.',
        image_url:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9nF4-rDCck0L4X4RTFtdwvph4_YKFjeapoA&s',
      },
    ];
  }

  onContactClick() {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}