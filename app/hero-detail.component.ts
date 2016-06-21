import { Component, Input } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'my-hero-detail',
  templateUrl: '../app/templates/heroDetail.html',
  styleUrls: ['../app/styles/style.css']
})
export class HeroDetailComponent {
  @Input()
  public hero: Hero;
}
