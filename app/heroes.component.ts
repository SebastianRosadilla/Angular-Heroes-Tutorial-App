import { Hero } from './hero';
import { HeroService } from './hero.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';
import { HeroDetailComponent } from './hero-detail.component';

@Component({
    selector: 'my-heroes',
    templateUrl: 'app/templates/heroes.html',
    styleUrls: ['app/styles/main.css'],
    directives: [HeroDetailComponent]
})
export class HeroesComponent implements OnInit {
    public heroes: Hero[];
    public selectedHero: Hero;

    constructor(
        private heroService: HeroService,
        private router: Router
    ) {}

    private async ngOnInit(): void {
        try {
            this.heroes = await this.heroService.getHeroes();
        } catch (error: Error) {
            throw error;
        }
    }

    public onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

    public gotoDetail(): void {
        this.router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
    }
}
