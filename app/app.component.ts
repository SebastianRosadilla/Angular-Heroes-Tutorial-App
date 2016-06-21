import { Hero } from './hero';
import { Component , OnInit } from '@angular/core';
import { HeroService } from './hero.service';
import { HeroDetailComponent } from './hero-detail.component';

@Component({
  selector: 'my-app',
  templateUrl: '../app/templates/heroes.html',
  styleUrls: ['../app/styles/style.css'],
  directives: [HeroDetailComponent],
  providers: [HeroService]
})
export class AppComponent implements OnInit {
  public heroes: Hero[];
  public selectedHero: Hero;

  constructor(private heroService: HeroService) {

  }

  private async ngOnInit(): void {
    try {
      this.heroes = await this.heroService.getHeroes();
    } catch(error: Error) {
      throw new Error(error);
    }
  }

  public onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
