import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pizza } from './pizza';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor(private http: HttpClient) { }

  public getPizzas (): Observable<Pizza[]> {
    return this.http.get<Pizza[]>('/api/pizzas');
  }

  public getPizza (pizzaName: string): Observable<Pizza> {
    return this.http.get<Pizza>('/api/pizzas/' + pizzaName);
  }

  public savePizza (pizza: Pizza): Observable<Pizza> {
    return this.http.put<Pizza>(`/api/pizzas/${pizza.slug}`, pizza);
  }

  public deletePizza (slug: String): Observable<Pizza> {
    return this.http.delete<Pizza>(`/api/pizzas/${slug}`);
  }
}
