import React, { useState } from "react";
import { IpizzaProps } from "../../interfaces/interfaces";
import PizzaConstructor from "../PizzaConstructor/PizzaConstructor";
import { addNewPizzaToCart } from "../../store/actions";
import styles from "./PizzaComponent.module.scss";
import { useDispatch } from "react-redux";
import { toppingConstructorButtons } from "../../constants/constructorButtons";

const PizzaComponent: React.FC<IpizzaProps> = ({
  id,
  imgSrc,
  pizzaSizePrice,
  toppingPrice,
  name,
  availableSizes,
  availableBase,
}) => {
  const [pizzaComponentState, setPizzaComponentState] = useState({
    id: id,
    image: imgSrc,
    name: name,
    base: availableBase[0],
    size: availableSizes[0],
    price: 15,
    // toppings: {
    //   olives: false,
    //   pepperoni: false,
    //   mushrooms: false,
    //   pepper: false
    // }
  });




  const dispatch = useDispatch();

  const baseHandler = (event: any) => {
    setPizzaComponentState({
      ...pizzaComponentState,
      base: event.target.value,
    });
  };

  const sizeHandler = (event: any) => {
    setPizzaComponentState({
      ...pizzaComponentState,
      size: event.target.value,
      price: pizzaSizePrice[event.target.value],
    });
  };

  const toppingHandler = (event: any) => {
    if (event.target.checked) {
      setPizzaComponentState({
        ...pizzaComponentState,
        price: (pizzaComponentState.price + toppingPrice[event.target.value]),
      // toppings: {[event.target.value]: event.target.checked}
       }) 	 
    } else {
      setPizzaComponentState({
        ...pizzaComponentState,
        price: (pizzaComponentState.price - toppingPrice[event.target.value]),
      // toppings: {[event.target.value]: event.target.checked}
       }) 	 
    }
       
  };

  const addToCartHandler = () => {
    console.log(pizzaComponentState);
    dispatch(addNewPizzaToCart(pizzaComponentState));
  };

  return (
    <div className={styles.card} test-id="pizza-card">
      <img src={imgSrc} alt="pizza" />
      <h3>{name}</h3>

      <PizzaConstructor
        toppingHandler={toppingHandler}
        baseHandler={baseHandler}
        sizeHandler={sizeHandler}
        base={pizzaComponentState.base}
        size={pizzaComponentState.size}
        availableSizes={availableSizes}
        availableBase={availableBase}
      />

      <div className={styles.cardFooter}>
        <div className={styles.price}>${pizzaComponentState.price}</div>
        <button className={styles.toCartButton} onClick={addToCartHandler}>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default PizzaComponent;
