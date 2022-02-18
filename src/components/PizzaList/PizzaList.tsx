import React from "react";
import { IpizzaDescription } from "../../interfaces/interfaces";
import styles from "./PizzaList.module.scss";
import PizzaComponent from "../PizzaComponent/PizzaComponent";
import { pizzaDescription } from "../../constants/pizzaDescription";

const PizzaList: React.FC = () => {
  const pizzaList = pizzaDescription
  return (
    <div className={styles.list_wrapper}>
      <div className={styles.list}>
        {pizzaList.map((pizza: IpizzaDescription) => {
          return (
            <PizzaComponent
              key={pizza.id}
              id={pizza.id}
              imgSrc={pizza.image}
              startPrice={pizza.startPrice}
              name={pizza.title}
              availableSizes={pizza.availableSizes}
              availableBase={pizza.availableBase}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PizzaList;
