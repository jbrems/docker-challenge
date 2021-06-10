import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Pizza } from '../pizza/pizza';
import { PizzaService } from '../pizza/pizza.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  public pizzasForm: FormGroup;

  constructor(private fb: FormBuilder, private pizzaService: PizzaService) { 
    this.pizzasForm = this.fb.group({
      pizzas: this.fb.array([]),
    });
  }

  ngOnInit(): void {
    this.pizzaService.getPizzas().pipe(
      map((pizzas: Pizza[]) => { 
        return pizzas.map((pizza: Pizza) => this.fb.group({
          name: [pizza.name],
          description: [pizza.description],
          toppings: [pizza.toppings.join(', ')],
          imageUrl: [pizza.imageUrl],
        })); 
      }),
      map((pizzaFormGroups: FormGroup[]) => this.fb.array(pizzaFormGroups)),
    ).subscribe((pizzasFormArray) => {
      console.log(pizzasFormArray);
      this.pizzasForm = this.fb.group({
        pizzas: pizzasFormArray,
      });
    });
  }

  get pizzas (): FormArray {
    return this.pizzasForm.get('pizzas') as FormArray;
  }

  get pizzaForms (): FormGroup[] {
    return this.pizzas.controls as FormGroup[];
  }

}
