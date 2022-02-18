import React from 'react';
import { useSelector } from 'react-redux';
import { cartPizzaStateInterface } from '../../interfaces/interfaces';
import { RootState } from '../../store/store';
import EmptyCart from './EmptyCart/EmptyCart';
import FullCart from './FullCart/FullCart';

const Cart: React.FC = () => {

  const cartState = useSelector<RootState, cartPizzaStateInterface[]>(state => state.cartReducer);
  
  return (
    cartState.length 
    ? <FullCart/>
    : <EmptyCart/>
  )
}

export default Cart
