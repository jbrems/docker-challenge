import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Pizza } from '../pizza';
import { PizzaService } from '../pizza.service';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.scss']
})
export class PizzaListComponent implements OnInit {
  public pizzas$: Observable<Pizza[]> = of([]);

  constructor(private pizzaService: PizzaService) { }

  ngOnInit(): void {
    this.pizzas$ = this.pizzaService.getPizzas();
  }

}
