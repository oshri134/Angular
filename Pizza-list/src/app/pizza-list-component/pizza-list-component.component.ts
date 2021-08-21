import { Component, OnInit } from '@angular/core';
import { Pizza } from './pizza.mode';
import { PizzaInfo } from './pizza-info.model';

@Component({
  selector: 'app-pizza-list-component',
  templateUrl: './pizza-list-component.component.html',
  styleUrls: ['./pizza-list-component.component.css'],
})
export class PizzaListComponentComponent implements OnInit {
  public pizzaList: Pizza[] | undefined;

  constructor() {
    let pizzaInfo: PizzaInfo = new PizzaInfo();
    this.pizzaList = pizzaInfo.getPizza();
  }

  ngOnInit(): void {}
}
