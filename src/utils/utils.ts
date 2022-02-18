import { cartPizzaStateInterface } from "../interfaces/interfaces"

export const saveCartStoreToLocalStorage = (store: cartPizzaStateInterface[]) => {
  window.localStorage.setItem('state', JSON.stringify(store))
}
