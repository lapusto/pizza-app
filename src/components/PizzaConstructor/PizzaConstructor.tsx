import React from "react";
import { PizzaConstructorPropsInterface } from "../../interfaces/interfaces";
import {
  baseConstructorButtons,
  sizeConstructorButtons,
  toppingConstructorButtons,
} from "../../constants/constructorButtons";
import styles from "./PizzaConstructor.module.scss";

const PizzaConstructor: React.FC<PizzaConstructorPropsInterface> = ({
  baseHandler,
  sizeHandler,
  toppingHandler,
  base,
  size,
}) => {
  const checkboxHandler = (e: any) => {
    toppingHandler(e);
  };
  return (
    <div className={styles.constructor_wrapper}>
      <div className={styles.base}>
        {baseConstructorButtons.map((buttonTitle, index) => {
          return (
            <button
              key={index}
              className={base === buttonTitle ? styles.selected : ""}
              onClick={baseHandler}
              value={buttonTitle}
            >
              {buttonTitle}
            </button>
          );
        })}
      </div>
      <div className={styles.size}>
        {sizeConstructorButtons.map((pizzaSize, index) => {
          return (
            <button
              key={index}
              className={size === pizzaSize ? styles.selected : ""}
              onClick={sizeHandler}
              value={pizzaSize}
            >
              {pizzaSize}
            </button>
          );
        })}
      </div>
      <div className={styles.toppingList}>
        <div>
          {toppingConstructorButtons.map((topping, index) => {
            if (index <= 1) {
              return (
                <div className={styles.topping} key={index}>
                  <input
                  className={styles.toppingCheckbox}
                    type="checkbox"
                    id={topping.category}
                    name={topping.category}
                    value={topping.category}
                    onChange={checkboxHandler}
                  />
                  <label htmlFor={topping.category}>
                    {topping.category} (+${topping.price})
                  </label>
                </div>
              );
            }
          })}
        </div>
        <div>
          {toppingConstructorButtons.map((topping, index) => {
            if (index > 1) {
              return (
                <div className={styles.topping} key={index}>
                  <input
                  className={styles.toppingCheckbox}
                    type="checkbox"
                    id={topping.category}
                    name={topping.category}
                    value={topping.category}
                    onChange={checkboxHandler}
                  />
                  <label htmlFor={topping.category}>
                    {topping.category} (+${topping.price})
                  </label>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default PizzaConstructor;
