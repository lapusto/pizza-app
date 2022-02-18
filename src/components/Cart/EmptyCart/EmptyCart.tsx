import React from 'react';
import { Link } from 'react-router-dom';

import image from '../../../images/empty-cart.png';
import styles from './EmptyCart.module.scss';


const EmptyCart: React.FC = () => {
  return (
    <div className={styles.cart_wrapper}>
      <div className={styles.cart_container}>
        <h3>Cart is empty...</h3>
        <p>Probably, you haven't ordered pizza yet.<br/>To order pizza, go to the main page.</p>
        <img src={image} alt="empty cart"/>
        <Link to='/'><button>Main page</button></Link>
      </div>
    </div>
  )
}

export default EmptyCart;
