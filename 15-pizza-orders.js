/// <reference path="./global.d.ts" />
//
// @ts-check

/**
 * Determine the price of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */
const MARGHERITA = 7;
const CAPRESE = 9;
const FORMAGGIO = 10;
const EXTRASAUCE = 1;
const EXTRATOPPINGS = 2;

export function pizzaPrice(pizza, ...extras) {

  let price = 0;

  if (pizza === 'margherita') {
    price += MARGHERITA;
  } else if (pizza === 'caprese') {
    price += CAPRESE;
  } else if (pizza === 'formaggio') {
    price += FORMAGGIO;
  }

  for (let i = 0; i < extras.length; i++) {
    if (extras[i] === 'extra sauce') {
      price += EXTRASAUCE;
    } else if (extras[i] === 'extra toppings') {
      price += EXTRATOPPINGS;
    }
  }

  return price;

}

/**
 * Calculate the price of the total order, given individual orders
 *
 * (HINT: For this exercise, you can take a look at the supplied "global.d.ts" file
 * for a more info about the type definitions used)
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */
export function orderPrice(pizzaOrders) {
  
  let total = 0;

  for (let i = 0; i < pizzaOrders.length; i++) {
    total += pizzaPrice(pizzaOrders[i].pizza, ...pizzaOrders[i].extras);
  };
  return total;
}