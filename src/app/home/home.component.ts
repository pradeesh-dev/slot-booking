import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { Carousel } from 'primeng/carousel';
import { SpeedDial } from 'primeng/speeddial';
import { ToastModule } from 'primeng/toast';
import { MenuItem, MessageService } from 'primeng/api';
import { FieldsetModule } from 'primeng/fieldset';

@Component({
  selector: 'app-home',
  imports: [
    CardModule,
    ButtonModule,
    Carousel,
    SpeedDial,
    ToastModule,
    FieldsetModule,
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
  constructor(private messageService: MessageService) {}
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
  // activeStep: number = 1;

  // name: string | undefined = 'rtes';

  // email: string | undefined = 'te';

  // password: string | undefined = 'sd';

  // option1: boolean | undefined = false;

  // option2: boolean | undefined = false;

  // option3: boolean | undefined = false;

  // option4: boolean | undefined = false;

  // option5: boolean | undefined = false;

  // option6: boolean | undefined = false;

  // option7: boolean | undefined = false;

  // option8: boolean | undefined = false;

  // option9: boolean | undefined = false;

  // option10: boolean | undefined = false;
}
