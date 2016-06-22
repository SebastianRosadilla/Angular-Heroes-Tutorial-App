import { Router } from '@angular/router-deprecated';
import { Component, OnInit } from '@angular/core';
import { HeroService } from './hero.service';
import { Hero } from './hero';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/templates/dashboard.html',
  styleUrls: ['app/styles/dashboard.component.css'],
  providers: [HeroService]
})
export class DashboardComponent implements OnInit {
  public heroes: Hero[] = [];

  constructor(
    private heroService: HeroService,
    private router: Router
  ) {}

  private async ngOnInit(): void {
    try {
      this.heroes = await this.heroService.getHeroes();
      this.heroes.slice(1, 5);
    } catch (error: Error) {
      throw error;
    }
  }

  public gotoDetail(hero: Hero): void {
    let link = ['HeroDetail', { id: hero.id }];
    this.router.navigate(link);
  }
}
