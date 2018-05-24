import { Injectable } from '@angular/core';
import { hero } from "./hero";
import { HEROES } from "./mock-heroes";
import {Observable} from 'rxjs/observable';
import {of} from 'rxjs/observable/of'
import { MessagesService } from "./messages.service";
@Injectable() 
export class HeroService {

  
  getHeroes(): Observable<hero[]> {
    this.messageService.add('HeroService: fetched heroes1111'+HEROES)
    return of(HEROES);
  }
  constructor(private messageService: MessagesService) { }
  getHero(id: number): Observable<hero> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}
