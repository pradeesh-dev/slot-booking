import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldsetModule } from 'primeng/fieldset';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-address',
  imports: [CommonModule, FieldsetModule, ButtonModule],
  templateUrl: './address.component.html',
  styleUrl: './address.component.scss'
})
export class AddressComponent {
  getDirectionURL: string =
    'https://www.google.com/maps/dir/?api=1&destination=10.79083635146072,%2078.75734337486288';
}