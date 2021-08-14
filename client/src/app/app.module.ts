import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminModule } from './admin/admin.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { PizzaModule } from './pizza/pizza.module';
import { ScoreModule } from './score/score.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PizzaModule,
    HomeModule,
    AdminModule,
    ScoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
