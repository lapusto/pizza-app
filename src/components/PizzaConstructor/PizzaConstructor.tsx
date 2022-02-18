import React from "react";
import { PizzaConstructorPropsInterface } from "../../interfaces/interfaces";
import {
  baseConstructorButtons,
  sizeConstructorButtons,
} from "../../constants/constructorButtons";
import styles from "./PizzaConstructor.module.scss";

const PizzaConstructor: React.FC<PizzaConstructorPropsInterface> = ({
  baseHandler,
  sizeHandler,
  base,
  size,
}) => {
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
    </div>
  );
};

export default PizzaConstructor;
