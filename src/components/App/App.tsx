import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import AppHeader from "../AppHeader/AppHeader";
import Cart from "../Cart/Cart";
import PizzaList from "../PizzaList/PizzaList";
import styles from "./App.module.scss";

const App: React.FC = () => {
  return  (
    <Router>
      <div className={styles.app_wrapper}>
        <div className={styles.content_wrapper}>
          <AppHeader />
          <Routes>
            <Route path="/cart" element={<Cart />} />
            <Route path="/" element={<PizzaList />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </div>
    </Router>
  ) 
};

export default App;
