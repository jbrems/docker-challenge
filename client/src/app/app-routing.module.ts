import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { PizzaDetailComponent } from './pizza/pizza-detail/pizza-detail.component';
import { PizzaListComponent } from './pizza/pizza-list/pizza-list.component';
import { ScoreComponent } from './score/score.component';

const routes: Routes = [
  { path: 'pizzas', children: [
    { path: '', component: PizzaListComponent },
    { path: ':pizzaName', component: PizzaDetailComponent },
  ] },
  { path: 'admin', component: AdminComponent },
  { path: 'score', component: ScoreComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
