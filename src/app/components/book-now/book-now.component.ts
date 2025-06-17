import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DatePicker } from 'primeng/datepicker';
import { FloatLabel } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-book-now',
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    DatePicker,
    FloatLabel,
    InputTextModule,
    ToastModule
  ],
  templateUrl: './book-now.component.html',
  styleUrl: './book-now.component.scss',
  providers: [MessageService]
})
export class BookNowComponent implements OnInit {
  isBooking: boolean = false;
  bookingDate: Date | undefined;
  bookingMaxDate: Date | undefined;
  bookingMinDate: Date | undefined;
  bookingTime: any | undefined;
  bookingHours: number = 1;

  constructor(private messageService: MessageService) {}

  ngOnInit() {
    this.setupBookingDates();
  }

  setupBookingDates() {
    this.bookingDate = new Date();
    this.bookingMaxDate = new Date();
    this.bookingMinDate = new Date();
    this.bookingMinDate.setDate(this.bookingMinDate.getDate() + 30);
    this.bookingTime = '08:00';
  }

  getBookingDetails() {
    this.isBooking = true;
    this.setupBookingDates();
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

      let encodedMessage = encodeURIComponent(message);
      let whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    }
  }

  isEmpty(value: any) {
    return value === undefined || value === null || value === '';
  }
}