import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartPizzaStateInterface } from "../../../../interfaces/interfaces";
import {
  reduceCount,
  increaseCount,
  deleteOrder,
} from "../../../../store/actions";
import { RootState } from "../../../../store/store";
import { saveCartStoreToLocalStorage } from "../../../../utils/utils";
import styles from "./PizzaInCart.module.scss";

interface PizzaInCartPropsInterface {
  imageSrc: string;
  id: number;
  name: string;
  count: number;
  base: string;
  size: string;
  price: number;
}

const PizzaInCart: React.FC<PizzaInCartPropsInterface> = ({
  imageSrc,
  id,
  name,
  count,
  base,
  size,
  price,
}) => {
  const cartState = useSelector<RootState, cartPizzaStateInterface[]>(
    (state) => state.cartReducer
  );
  const stateCopy = [...cartState];

  const dispatch = useDispatch();

  const reduceCountHandler = (id: number, base: string, size: string): void => {
    const reducedState = stateCopy.reduce(
      (acc: cartPizzaStateInterface[] | [], curr: cartPizzaStateInterface) => {
        if (curr.id === id && curr.base === base && curr.size === size) {
          if (curr.count === 1) {
            return [...acc];
          } else {
            return [
              ...acc,
              {
                ...curr,
                count: --curr.count,
              },
            ];
          }
        }
        return [...acc, curr];
      },
      []
    );
    dispatch(reduceCount(reducedState));
    saveCartStoreToLocalStorage(reducedState);
  };

  const increaseCountHandler = (
    id: number,
    base: string,
    size: string
  ): void => {
    const increasedState = stateCopy.reduce(
      (acc: cartPizzaStateInterface[], curr: cartPizzaStateInterface) => {
        if (curr.id === id && curr.base === base && curr.size === size) {
          return [
            ...acc,
            {
              ...curr,
              count: ++curr.count,
            },
          ];
        }
        return [...acc, curr];
      },
      []
    );
    dispatch(increaseCount(increasedState));
    saveCartStoreToLocalStorage(increasedState);
  };

  const deleteOrderHandler = (id: number, base: string, size: string): void => {
    const filtredState = stateCopy.reduce(
      (acc: cartPizzaStateInterface[], curr: cartPizzaStateInterface) => {
        if (curr.id === id && curr.base === base && curr.size === size) {
          return [...acc];
        }
        return [...acc, curr];
      },
      []
    );
    dispatch(deleteOrder(filtredState));
    saveCartStoreToLocalStorage(filtredState);
  };

  return (
    <div className={styles.order_container}>
      <div className={styles.image_n_description}>
        <img src={imageSrc} alt={name} />
        <div>
          <h4>{name}</h4>
          <p>{`${base}, ${size}`}</p>
        </div>
      </div>

      <div className={styles.counter}>
        <button
          onClick={() => {
            reduceCountHandler(id, base, size);
          }}
        >
          -
        </button>
        <span>{count}</span>
        <button
          onClick={() => {
            increaseCountHandler(id, base, size);
          }}
        >
          +
        </button>
      </div>

      <div></div>

      <div className={styles.price_wrapper}>
        {`$${(count * price).toFixed(0)}`}
      </div>

      <button
        onClick={() => {
          deleteOrderHandler(id, base, size);
        }}
        className={styles.delete_order}
      >
        x
      </button>
    </div>
  );
};

export default PizzaInCart;
