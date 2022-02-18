import { pizzaDescription } from './pizzaDescription';

export const vegetarianPizza = pizzaDescription.filter((item) => item.type === 'vegetarian');
export const meatPizza = pizzaDescription.filter((item) => item.type === 'meat');
export const spicyPizza = pizzaDescription.filter((item) => item.type === 'spicy');
export const allPizza = pizzaDescription;