import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-gamer-slides',
  imports: [
    CarouselModule
  ],
  templateUrl: './gamer-slides.component.html',
  styleUrl: './gamer-slides.component.scss',
})
export class GamerSlidesComponent {

  games: any;
  responsiveOptions: any;

  ngOnInit() {
    this.games = [
      {
        image: '../../assets/images/cricket.jpg',
        name: 'Cricket',
        description:
          'Cricket is a bat-and-ball sport played between two teams of 11 players, with the objective of scoring runs by striking the ball and running between the wickets, while simultaneously trying to get the opposition out (taking wickets).',
        price: 100,
      },
      {
        image: '../../assets/images/football_bg.jpg',
        name: 'Football',
        description:
          'Football is a global sport played between two teams, aiming to score by getting the ball into the opposing goal. Known for its fast pace and teamwork.',
        price: 300,
      },
      {
        image: '../../assets/images/cricket_1.jpg',
        name: 'Volleyball',
        description:
          "Volleyball is a team sport where two teams are separated by a net, aiming to ground the ball on the opponent's side. It emphasizes agility and coordination.",
        price: 200,
      }
    ];

    this.responsiveOptions = [
      {
        breakpoint: '1400px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '1199px',
        numVisible: 3,
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
  }
}
