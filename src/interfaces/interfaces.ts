import {
  ADD_NEW_PIZZA_TO_CART,
  CLEAR_CART,
  REDUCE_COUNT,
  INCREASE_COUNT,
  DELETE_ORDER,
  LOAD_CART_STATE
} from '../constants/actionTypes'

export interface IpizzaDescription {
  id: number,
  title: string,
  type: string,
  image: string,
  availableBase: string[],
  availableSizes: string[],
  price: object,
  topping?: object
}

export interface IpizzaProps {
  objPrice: any
  toppingPrice: any
  id: number
  imgSrc: string
  name: string
  availableSizes: string[]
  availableBase: string[]
}

export interface PizzaConstructorPropsInterface {
  availableSizes: string[]
  availableBase: string[]
  base: string
  size: string
  baseHandler: (event: React.MouseEvent<HTMLButtonElement>) => void
  sizeHandler: (event: React.MouseEvent<HTMLButtonElement>) => void
  toppingHandler: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export type sortingModeParameterType = 'price' | 'popularity' | 'alphabet';

export interface RouterLinkPropsType {
  path: string
  title: string
}

export interface cartPizzaInterface {
  id: number,
  image: string,
  name: string,
  base: string,
  size: string,
  price: number,
}

export interface cartPizzaStateInterface {
  id: number,
  image: string,
  name: string,
  base: string,
  size: string,
  price: number,
  count: number
}

export type addNewPizzaToCartActionType = {
  type: typeof ADD_NEW_PIZZA_TO_CART
  payload: cartPizzaInterface
}

export type clearCartActionType = {
  type: typeof CLEAR_CART
}

export type reduceCountActionType = {
  type: typeof REDUCE_COUNT,
  payload: cartPizzaStateInterface[] | []
}

export type increaseCountActionType = {
  type: typeof INCREASE_COUNT,
  payload: cartPizzaStateInterface[]
}

export type deleteOrderActionType = {
  type: typeof DELETE_ORDER
  payload: cartPizzaStateInterface[] | []
}

export type loadCartStateActionType = {
  type: typeof LOAD_CART_STATE
}

export type cartReducerActionsTypes =
  reduceCountActionType
  | increaseCountActionType
  | addNewPizzaToCartActionType
  | clearCartActionType
  | deleteOrderActionType
  | loadCartStateActionType

