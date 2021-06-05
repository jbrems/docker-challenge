import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PizzaListComponent } from './pizza-list/pizza-list.component';
import { PizzaDetailComponent } from './pizza-detail/pizza-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PizzaListComponent,
    PizzaDetailComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
  ]
})
export class PizzaModule { }
