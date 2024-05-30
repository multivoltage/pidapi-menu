import type { Component } from "solid-js";

import logo from "./logo.svg";
import styles from "./App.module.css";

// screens
import Screen from "./screen/selectLangageScreen/page";

const App: Component = () => {
  return (
    <div class={styles.App}>
      <Screen />
    </div>
  );
};

export default App;
