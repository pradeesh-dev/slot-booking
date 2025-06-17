import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeedDial } from 'primeng/speeddial';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, SpeedDial],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {
  items: MenuItem[] = [];

  ngOnInit() {
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
}