import React from "react";
import CartButton from "./CartButton/CartButton";
import pizza from "../../images/pizza-icon.png";
import styles from "./AppHeader.module.scss";
import { Link } from "react-router-dom";

const AppHeader: React.FC = () => {
  return (
    <>
      <header className={styles.app_header}>
        <div className={styles.logo_wrapper}>
          <img src={pizza} alt="pizza-icon" />
          <div className={styles.title_and_description_wrapper}>
            <h1> PIZZA TEST</h1>
          </div>
        </div>
        <Link to="/cart">
          <CartButton />
        </Link>
      </header>
      <br />
    </>
  );
};

export default AppHeader;
