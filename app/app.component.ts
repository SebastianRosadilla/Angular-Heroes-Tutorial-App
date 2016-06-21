import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: '../app/templates/heroDetail.html',
  styleUrls: ['../app/styles/style.css']
})
export class AppComponent {
  public heroes = HEROES;
  public selectedHero: Hero;

  public onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}

export class Hero {
  public id: number;
  public name: string;

  constructor(id, name) {
    this.id = id;
    this.name = name;
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
