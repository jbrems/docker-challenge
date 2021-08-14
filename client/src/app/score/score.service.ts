import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable, of } from 'rxjs';
import { map, mergeMap, tap, catchError } from 'rxjs/operators';
import { Pizza } from '../pizza/pizza';
import { PizzaService } from '../pizza/pizza.service';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {
  public score$: BehaviorSubject<number> = new BehaviorSubject(0);

  constructor(private http: HttpClient, private pizzaService: PizzaService) { }

  private get scorePizza () {
    return { 
      name: btoa(Math.random().toString().substr(2, 6)), 
      description: 'Pizza used by the scoring algorithm', 
      toppings: ['none'],
    };
  }

  resetScore () {
    this.score$.next(0);
  }

  updateScoreSubject (points: number) {
    this.score$.next(this.score$.value + points);
  }

  scoreApi (): Observable<number> {
    const scorePizza = this.scorePizza;

    // Create a new pizza
    return this.pizzaService.savePizza(scorePizza).pipe(
      // Fetch all pizzas after creating the new pizza
      mergeMap(_ => this.pizzaService.getPizzas()),
      // Find the newly created pizza among the fetched pizzas
      map((pizzas: Pizza[]) => pizzas.find(p => p.name === scorePizza.name) as Pizza),
      // Delete the newly created pizza
      mergeMap((pizza: Pizza) => this.pizzaService.deletePizza(pizza.slug as string)),
      // Award 1 point if everything succeeds
      map((pizza: Pizza) => pizza ? 1 : 0),
      // Award 0 points if an error occurs
      catchError(_ => of(0)),
      tap(this.updateScoreSubject.bind(this))
    );
  }

  scoreApiSubdomain (): Observable<number> {
    // Fetch the list of pizzas normally and via the api.localhost subdomain
    return combineLatest([
      this.http.get<Pizza[]>('http://api.localhost/pizzas'),
      this.pizzaService.getPizzas(),
    ]).pipe(
      // Award 1 point if both responses are equal
      map(([pizzas1, pizzas2]) => JSON.stringify(pizzas1) === JSON.stringify(pizzas2) ? 1 : 0),
      // Award 0 points if an error occurs
      catchError(_ => of(0)),
      tap(this.updateScoreSubject.bind(this))
    );
  }

  scoreAdminSubdomain (): Observable<number> {
    return this.http.get('/admin').pipe(
    //return this.http.get('http://admin.localhost').pipe(
      map((response) => {
        console.log(response);
        return 1;
      }),
      // Award 0 points if an error occurs
      catchError(_ => of(0)),
      tap(this.updateScoreSubject.bind(this))
    );
  }

  scorePizzaSubdomains (): Observable<number> {
    return this.http.get('http://margherita.localhost').pipe(
      // Award 1 point if no error occurs
      map(_ => 1),
      // Award 0 points if an error occurs
      catchError(_ => of(0)),
      tap(this.updateScoreSubject.bind(this))
    );
  }

  scoreHttpsProtocol (): Observable<number> {
    return combineLatest([
      this.http.get('https://localhost'),
      this.http.get('https://localhost/api/pizzas')
    ]).pipe(
      // Award 1 point if no error occurs
      map(_ => 1),
      // Award 0 points if an error occurs
      catchError(_ => of(0)),
      tap(this.updateScoreSubject.bind(this))
    );
  }
}
