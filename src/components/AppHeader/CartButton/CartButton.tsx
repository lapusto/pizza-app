import React from "react";
import { useSelector } from "react-redux";
import image from "../../../images/shopping-cart.png";
import { cartPizzaStateInterface } from "../../../interfaces/interfaces";
import { RootState } from "../../../store/store";
import styles from "./CartButton.module.scss";

const CartButton: React.FC = () => {
  const pizzaState = useSelector<RootState, cartPizzaStateInterface[]>(
    (state) => state.cartReducer
  );
  const pizzaStateCopy = [...pizzaState];

  const pizzaCount = pizzaStateCopy.reduce((acc, curr) => {
    return acc + curr.count;
  }, 0);

  const allPizzaSumm = pizzaStateCopy.reduce((acc, curr) => {
    return acc + curr.count * (curr.price + curr.toppingsPrice);
  }, 0);

  return (
    <button className={styles.cartButton}>
      {pizzaCount ? (
        <>
          <span>$ {allPizzaSumm}</span>
          <span> | </span>
          <span>
            <img src={image} alt="cart" />
            {pizzaCount}
          </span>
        </>
      ) : (
        <span>Cart</span>
      )}
    </button>
  );
};

export default CartButton;
