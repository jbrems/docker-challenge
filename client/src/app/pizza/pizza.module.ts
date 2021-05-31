import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PizzaListComponent } from '../pizza-list/pizza-list.component';
import { PizzaDetailComponent } from '../pizza-detail/pizza-detail.component';



@NgModule({
  declarations: [
    PizzaListComponent,
    PizzaDetailComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PizzaModule { }
