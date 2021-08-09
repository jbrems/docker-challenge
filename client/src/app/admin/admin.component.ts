import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { map } from 'rxjs/operators';
import { Pizza } from '../pizza/pizza';
import { PizzaService } from '../pizza/pizza.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  public pizzasForm: FormGroup;

  public showOverlay = false;

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
          slug: [pizza.slug],
          description: [pizza.description],
          toppings: [pizza.toppings.join(', ')],
        })); 
      }),
      map((pizzaFormGroups: FormGroup[]) => this.fb.array(pizzaFormGroups)),
    ).subscribe((pizzasFormArray) => {
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

  save (pizzaForm : FormGroup) {
    this.showOverlay = true;
    const toppings = pizzaForm.value.toppings.split(',').map((t: String) => { t.trim(); return t; });
    this.pizzaService.savePizza({ ...pizzaForm.value, toppings }).subscribe(() => {
      this.showOverlay = false;
    });
  }

  delete (pizzaForm : FormGroup) {
    console.log('Delete', pizzaForm);
    this.pizzaService.deletePizza(pizzaForm.value.slug).subscribe(() => {
      const index = this.pizzas.value.findIndex((p : Pizza) => p.slug === pizzaForm.value.slug);
      this.pizzas.removeAt(index);
      this.showOverlay = false;
    });
  }
}
