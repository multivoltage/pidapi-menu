import type { Component } from "solid-js";

import logo from "./logo.svg";
import styles from "./App.module.css";

// screens
import Screen from "./screen/selectLangageScreen/page";
import Header from "./components/header";

const App: Component = () => {
  return (
    <div class={styles.App}>
      <Header />
      <Screen />
    </div>
  );
};

export default App;
