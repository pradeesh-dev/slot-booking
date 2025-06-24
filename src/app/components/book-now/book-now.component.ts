import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DatePicker } from 'primeng/datepicker';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-book-now',
  imports: [
    InputTextModule,
    ButtonModule,
    DatePicker,
    FormsModule,
    CommonModule,
    ToastModule,
  ],
  templateUrl: './book-now.component.html',
  styleUrl: './book-now.component.scss',
  providers: [MessageService],
})
export class BookNowComponent {
  isBooking: boolean = false;
  bookingDate: Date | undefined;
  bookingMaxDate: Date | undefined;
  bookingMinDate: Date | undefined;
  bookingMaxTime: Date | undefined;
  bookingMinTime: Date | undefined;
  bookingTime: any | undefined;
  bookingHours: number = 1;
  constructor(private messageService: MessageService, private router: Router) {}

  ngOnInit() {
    const now = new Date();
    this.bookingDate = now;
    this.bookingTime = now;

    // Set min and max date
    this.bookingMinDate = new Date(now); // today
    this.bookingMaxDate = new Date(now);
    this.bookingMaxDate.setDate(this.bookingMaxDate.getDate() + 14); // next 2 weeks

    this.bookingTime.setHours(20, 0, 0, 0);
    // Set min time: 5:00 AM
    this.bookingMinTime = new Date();
    this.bookingMinTime.setHours(5, 0, 0, 0);

    // Set max time: 9:00 PM
    this.bookingMaxTime = new Date();
    this.bookingMaxTime.setHours(21, 0, 0, 0);
  }

  bookSlot() {
    if (
      this.isEmpty(this.bookingDate) ||
      this.isEmpty(this.bookingTime) ||
      this.isEmpty(this.bookingHours)
    ) {
      this.messageService.add({
        severity: 'warn',
        summary: 'Warning!',
        detail: 'Please fill all the required fields',
        life: 3000,
      });
    } else {
      console.log('test');
      let phoneNumber = '919787492204';
      let message = `Hi, I want to book a slot on your turf.

Date Time: ${this.formatCustomDate(this.bookingTime)}
Duration: ${this.bookingHours} hour(s)

Thanks.`;

      // Encode the message for a URL
      let encodedMessage = encodeURIComponent(message);
      let whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    }
  }

  isEmpty(value: any) {
    console.log(value);
    return value === undefined || value === null || value === '';
  }

  setTime() {
    if (this.bookingDate) {
      // Set booking time to 8:00 PM on selected date
      this.bookingTime = new Date(this.bookingDate);
      this.bookingTime.setHours(20, 0, 0, 0); // 8:00 PM

      // Set min time: 5:00 AM
      this.bookingMinTime = new Date(this.bookingDate);
      this.bookingMinTime.setHours(5, 0, 0, 0);

      // Set max time: 9:00 PM
      this.bookingMaxTime = new Date(this.bookingDate);
      this.bookingMaxTime.setHours(21, 0, 0, 0);
    }
  }

  formatCustomDate(date: Date): string {
    const day = date.getDate().toString().padStart(2, '0');
    const month = date.toLocaleString('en-US', { month: 'short' });
    const year = date.getFullYear();

    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const period = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12 || 12;
    const formattedHours = hours.toString().padStart(2, '0');

    return `${day} ${month} ${year}, ${formattedHours}:${minutes} ${period}`;
  }
}
