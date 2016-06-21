import { Hero } from './hero';
import { Component } from '@angular/core';
import { HeroDetailComponent } from './hero-detail.component';


@Component({
  selector: 'my-app',
  templateUrl: '../app/templates/heroes.html',
  styleUrls: ['../app/styles/style.css'],
  directives: [HeroDetailComponent]
})
export class AppComponent {
  public heroes = HEROES;
  public selectedHero: Hero;

  public onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}

const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];
