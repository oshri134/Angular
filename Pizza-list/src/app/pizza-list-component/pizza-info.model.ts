import { Pizza } from './pizza.mode';

export class PizzaInfo {
  public getPizza(): Pizza[] {
    let pizzaArr: Pizza[] = new Array<Pizza>(100);

    for (let i = 0; i < pizzaArr.length; i++) {
      let diameter: number = Math.floor(Math.random() * (50 - 10) + 10);
      let slice: number = Math.floor(Math.random() * (8 - 3) + 3);
      let toppings: number = Math.floor(Math.random() * 4);
      pizzaArr[i] = new Pizza(diameter, slice, toppings);
    }

    return pizzaArr;
  }
}
