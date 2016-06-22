import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {
  public getHeroes(): Promise<Hero[]> {
    return new Promise<Hero[]>(resolve => {
      setTimeout(() => resolve(HEROES), 1000)
    })
  }

  public getHero(id: string): Promise<Hero> {
    return new Promise<Hero>(resolve => {
      resolve(HEROES.find(function(hero) {
        return hero.id === id;
      })
    })
  )}
}
