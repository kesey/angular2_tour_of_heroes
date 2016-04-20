import {Component} from 'angular2/core';
import {HeroDetailComponent} from './hero-detail.component';
import {Hero} from './hero';
import {HeroService} from './hero.service';
import {OnInit} from 'angular2/core';
import { Router } from 'angular2/router';

@Component({
    selector: 'my-heroes',
    directives: [HeroDetailComponent],
    templateUrl: 'app/heroes.component.html',
    styleUrls:  ['app/heroes.component.css'],
})
export class HeroesComponent implements OnInit{
    title = 'Tour of Heroes';
    heroes: Hero[];
    getHeroes() {
        this._heroService
            .getHeroes()
            .then(heroes => this.heroes = heroes);
    }
    ngOnInit() {
        this.getHeroes();
    }
    constructor(
        private _router: Router,
        private _heroService: HeroService)
    {}
    selectedHero: Hero;
    onSelect(hero: Hero) { this.selectedHero = hero; }
    gotoDetail() {
        this._router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
    }
}
