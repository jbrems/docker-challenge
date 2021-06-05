import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Pizza } from '../pizza';
import { PizzaService } from '../pizza.service';

@Component({
  selector: 'app-pizza-detail',
  templateUrl: './pizza-detail.component.html',
  styleUrls: ['./pizza-detail.component.scss']
})
export class PizzaDetailComponent implements OnInit {
  public pizza$: Observable<Pizza> = of();

  constructor(private route: ActivatedRoute, private pizzaService: PizzaService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      console.log(params);
      const pizzaName = params.get('pizzaName');
      if (pizzaName) {
        this.pizza$ = this.pizzaService.getPizza(pizzaName);
      }
    });
  }

}
