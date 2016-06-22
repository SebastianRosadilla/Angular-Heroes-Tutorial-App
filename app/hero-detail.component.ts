import { RouteParams } from '@angular/router-deprecated';
import { Component, OnInit } from '@angular/core';
import { HeroService } from './hero.service';
import { Hero } from './hero';

@Component({
  selector: 'my-hero-detail',
  templateUrl: '../app/templates/heroDetail.html',
  styleUrls: ['app/styles/hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  public hero: Hero;

  constructor(
    private heroService: HeroService,
    private routeParams: RouteParams
  ) {}

  private async ngOnInit(): void {
    let id = parseInt(this.routeParams.get('id'));

    try {
      this.hero = await this.heroService.getHero(id);
    } catch(error: Error) {
      throw error;
    }
  }

  private goBack(): void {
    window.history.back();
  }
}
