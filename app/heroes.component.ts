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
    ) { }

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

    public addHero(): void {
        this.addingHero = true;
        this.selectedHero = null;
    }

    public close(savedHero: Hero): void {
        this.addingHero = false;
        if (savedHero) { this.getHeroes(); }
    }

    public delete(hero: Hero, event: any): void {
        event.stopPropagation();
        this.heroService
            .delete(hero)
            .then(res => {
                this.heroes = this.heroes.filter(h => h !== hero);
                if (this.selectedHero === hero) { this.selectedHero = null; }
            })
            .catch(error => this.error = error); // TODO: Display error message
    }
}
