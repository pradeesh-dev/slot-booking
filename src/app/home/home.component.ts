import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { Carousel } from 'primeng/carousel';
import { SpeedDial } from 'primeng/speeddial';
import { ToastModule } from 'primeng/toast';
import { MenuItem, MessageService } from 'primeng/api';
import { FieldsetModule } from 'primeng/fieldset';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DatePicker } from 'primeng/datepicker';
import { FloatLabel } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-home',
  imports: [
    CardModule,
    ButtonModule,
    SpeedDial,
    ToastModule,
    FieldsetModule,
    CommonModule,
    DatePicker,
    FormsModule,
    FloatLabel,
    InputTextModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers: [MessageService],
})
export class HomeComponent implements OnInit {
  responsiveOptions: any[] | undefined;
  coachingClasses: any[] = [];
  items: MenuItem[] = [];
  getDirectionURL: string =
    'https://www.google.com/maps/dir/?api=1&destination=10.79083635146072,%2078.75734337486288';

  isBooking: boolean = false;
  bookingDate: Date | undefined;
  bookingMaxDate: Date | undefined;
  bookingMinDate: Date | undefined;
  bookingTime: any | undefined;
  bookingHours: number = 1;

  constructor(private messageService: MessageService, private router: Router) {}

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
          'Enhance skills with professional football training. Develop teamwork, endurance, and game strategy while having fun on the field.',
        image_url:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9nF4-rDCck0L4X4RTFtdwvph4_YKFjeapoA&s',
      },
    ];

    this.responsiveOptions = [
      {
        breakpoint: '1400px',
        numVisible: 1,
        numScroll: 1,
      },
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1,
      },
      {
        breakpoint: '767px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '575px',
        numVisible: 1,
        numScroll: 1,
      },
    ];

    this.items = [
      {
        icon: 'pi pi-instagram instagram-icon',
        command: () => {
          window.open(
            'https://www.instagram.com/unitedsports_620019/',
            '_blank',
            'noopener,noreferrer'
          );
        },
      },
      {
        icon: 'pi pi-phone phone-icon',

        command: () => {
          window.location.href = 'tel:+91 9787492204';
        },
      },
      {
        icon: 'pi pi-whatsapp whatsapp-icon',
        command: () => {
          window.open(
            'https://wa.me/+919787492204?text=Hi%2C%20I%20checked%20out%20your%20website.%20Can%20you%20share%20more%20details%20about%20your%20turf%3F',
            '_blank',
            'noopener,noreferrer'
          );
        },
      },
    ];
  }

  getBookinDetails() {
    this.isBooking = true;
    this.bookingDate = new Date();
    this.bookingMaxDate = new Date();
    this.bookingTime = '08:00';
  }

  bookSlot() {
    if (
      !this.isBooking ||
      this.isEmpty(this.bookingDate) ||
      this.isEmpty(this.bookingTime) ||
      this.isEmpty(this.bookingHours)
    ) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Please fill all the required fields',
        life: 3000,
      });
    } else {
      let phoneNumber = '919787492204';
      let message = `Hi, I want to book a slot on your turf.

Date: ${this.bookingDate?.toLocaleDateString()}
Time: ${this.bookingTime}
Duration: ${this.bookingHours} hour

Thanks.`;

      // Encode the message for a URL
      let encodedMessage = encodeURIComponent(message);
      let whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    }
  }

  isEmpty(value: any) {
    return value === undefined || value === null || value === '';
  }
}
