import { Component } from '@angular/core';

@Component({
  selector: 'app-venue-info',
  imports: [],
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
})
export class VenueInfoComponent {
  getDirectionURL: string =
    'https://www.google.com/maps/dir/?api=1&destination=10.79083635146072,%2078.75734337486288';
}
