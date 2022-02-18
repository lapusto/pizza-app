import {
  cartPizzaInterface,
  addNewPizzaToCartActionType,
  clearCartActionType,
  cartPizzaStateInterface,
  reduceCountActionType,
  increaseCountActionType,
  deleteOrderActionType,
  loadCartStateActionType
} from '../interfaces/interfaces'

import {
  CLEAR_CART,
  ADD_NEW_PIZZA_TO_CART,
  REDUCE_COUNT,
  INCREASE_COUNT,
  DELETE_ORDER,
  LOAD_CART_STATE
} from '../constants/actionTypes'

export const addNewPizzaToCart = (pizza: cartPizzaInterface): addNewPizzaToCartActionType => {
  return {
    type: ADD_NEW_PIZZA_TO_CART,
    payload: pizza
  }
}

export const clearCart = (): clearCartActionType => {
  return {
    type: CLEAR_CART
  }
}

export const reduceCount = (newCartState: cartPizzaStateInterface[] | []): reduceCountActionType => {
  return {
    type: REDUCE_COUNT,
    payload: newCartState
  }
}

export const increaseCount = (newCartState: cartPizzaStateInterface[]): increaseCountActionType => {
  return {
    type: INCREASE_COUNT,
    payload: newCartState
  }
}

export const deleteOrder = (newCartState: cartPizzaStateInterface[] | []): deleteOrderActionType => {
  return {
    type: DELETE_ORDER,
    payload: newCartState
  }
}

export const loadCartState = (): loadCartStateActionType => {
  return {
    type: LOAD_CART_STATE
  }
}



