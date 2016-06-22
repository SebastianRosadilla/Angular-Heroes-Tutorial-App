import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HeroService {
    private heroesUrl = 'app/heroes';

    constructor(private http: Http) {}

    public getHeroes(): Promise<Hero[]> {
        return this.http.get(this.heroesUrl)
                   .toPromise()
                   .then(response => response.json().data)
                   .catch(this.handleError);
    }

    public getHero(id: string): Promise<Hero> {
        return this.getHeroes()
                   .then(heroes => heroes.find(function(hero) {
                       return hero.id === id }
                   ));
    }

    public save(hero: Hero): Promise<Hero> {
      if (hero.id) {
        return this.put(hero);
      }
      return this.post(hero);
    }

    public delete(hero: Hero) {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');

      let url = `${this.heroesUrl}/${hero.id}`;

      return this.http
                 .delete(url, headers)
                 .toPromise()
                 .catch(this.handleError);
    }

    // Add new Hero
    private post(hero: Hero): Promise<Hero> {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');


      return this.http
                 .post(this.heroesUrl, JSON.stringify(hero), {headers: headers})
                 .toPromise()
                 .then(res => res.json().data)
                 .catch(this.handleError);
    }

    // Update existing Hero
    private put(hero: Hero) {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');

      let url = `${this.heroesUrl}/${hero.id}`;

      return this.http
                 .put(url, JSON.stringify(hero), {headers: headers})
                 .toPromise()
                 .then(() => hero)
                 .catch(this.handleError);
    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
