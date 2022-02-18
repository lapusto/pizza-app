import { cartPizzaStateInterface, cartReducerActionsTypes } from '../interfaces/interfaces';
import {
  CLEAR_CART,
  ADD_NEW_PIZZA_TO_CART,
  REDUCE_COUNT,
  INCREASE_COUNT,
  DELETE_ORDER,
  LOAD_CART_STATE
} from '../constants/actionTypes'
import { saveCartStoreToLocalStorage } from '../utils/utils';

const initialCartState: [] = [];

export const cartReducer = (state: cartPizzaStateInterface[] | [] = initialCartState, action: cartReducerActionsTypes): cartPizzaStateInterface[] | [] => {
  switch (action.type) {

    case ADD_NEW_PIZZA_TO_CART:

      const stateCopy = [...state];
      const newPizza = action.payload;

      if (!stateCopy.find((item) => item.base === newPizza.base && item.name === newPizza.name && item.size === newPizza.size)) {
        const newState = [
          ...stateCopy,
          {
            ...newPizza,
            count: 1,
            id: Date.now()
          }
        ]
        saveCartStoreToLocalStorage(newState)
        return newState;

      }

      const newStateCopy = stateCopy.map((item) => {
        if (item.base === newPizza.base && item.name === newPizza.name && item.size === newPizza.size) {
          return {
            ...item,
            count: item.count + 1
          }
        }
        return item;
      })

      return [
        ...newStateCopy
      ]

    case CLEAR_CART:
      return initialCartState

    case REDUCE_COUNT:
      return action.payload

    case INCREASE_COUNT:
      return action.payload

    case DELETE_ORDER:
      return action.payload

      case LOAD_CART_STATE:

        if (localStorage.getItem('state')) {
        
          const loadedStateJSON = localStorage.getItem('state');
          
          if (typeof loadedStateJSON === 'string') {
            const loadedState: cartPizzaStateInterface[] = JSON.parse(loadedStateJSON)
              return loadedState
          }
        
        } else {
          localStorage.clear()
        }
          return state

    default:
      return state;
  }
}
