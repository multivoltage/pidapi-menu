import { type Component } from "solid-js";
import styles from "./header.module.css";

const Header: Component = () => {
  return (
    <header class={styles.container}>
      <div>
        <span class={styles.labelGlutenFee}>TUTTO SENZA GLUTINE</span>
        <br />
        <span class={styles.labelGlutenFee}>ALL GLUTEN FREE</span>
      </div>
    </header>
  );
};

export default Header;
