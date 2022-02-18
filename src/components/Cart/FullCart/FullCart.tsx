import React, { useState } from 'react';

import { clearCart } from '../../../store/actions';
import { useDispatch, useSelector } from 'react-redux';
import PizzaInCart from './PizzaInCart/PizzaInCart';
import { Link } from 'react-router-dom';

import cartImage from '../../../images/shopping-cart-black.png'
import trashImage from '../../../images/trash.png'
import styles from './FullCart.module.scss';
import { RootState } from '../../../store/store';
import { cartPizzaStateInterface } from '../../../interfaces/interfaces';
import Modal from '../../Modal/Modal';


const FullCart: React.FC = () => {
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false)
 
  const cartState = useSelector<RootState, cartPizzaStateInterface[]>(state => state.cartReducer);
  const cartStateCopy = [...cartState];
  
  const clearCartHandler = (): void => {
    dispatch(clearCart());
    localStorage.clear();
  }

  const totalCount = cartStateCopy.reduce((acc, curr) => {
    return acc + curr.count
  }, 0);
  
  const totalPrice= cartStateCopy.reduce((acc, curr) => {
    return acc + (curr.count * curr.price)
  }, 0);

  return (
    <div className={styles.cart_wrapper}>
      <div className={styles.cart_container}>
        <header>
          <span className={styles.cart_name}>
            <img src={cartImage} alt="cart" />
            Cart
          </span>
          <button className={styles.clear_cart} onClick={clearCartHandler}>
            <img src={trashImage} alt="cart" />
            Clear cart
          </button>
        </header>
        <main>
          {cartState.map((pizza) => 
          <PizzaInCart 
            key={pizza.id}
            imageSrc={pizza.image} 
            id={pizza.id}
            name={pizza.name}
            count={pizza.count}
            base={pizza.base}
            size={pizza.size}
            price={pizza.price}  
          />)}
          <div className={styles.totals}>
            <h3>Total count: <strong>{totalCount}</strong></h3>
            <h3>Total price: <strong>{totalPrice.toFixed(0)}BYN</strong></h3>
          </div>
          <footer>
            <Link to='/'>
              <button className={styles.main_page_button}>
                {`< Main page`}
              </button>
            </Link>
            <button className={styles.pay_now_button} onClick={()=>setModal(true)}>Pay now</button>
          {
            modal && <Modal isOpened={modal} onModalClose={() => setModal(false)}></Modal>
          }
           
          </footer>

        </main>
      </div>
    </div>
  )
}

export default FullCart
