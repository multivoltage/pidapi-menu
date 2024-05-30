import { Show, type Component } from "solid-js";
import { createStore } from "solid-js/store";

import styles from "./App.module.css";

// screens
import Screen from "./screen/selectLangageScreen/page";
import Header from "./components/header";
import { Lang, MyStore } from "./types";

const App: Component = () => {
  // Initialize store
  const [store, setStore] = createStore<MyStore>({
    screen: {
      screenName: "langage-screen",
      showHomeIcon: false,
      color: "white",
      title: "",
    },
    lang: "it",
  });

  function handleLangSelected(lang: Lang) {
    setStore({
      lang,
      screen: {
        screenName: "home",
        showHomeIcon: false,
        title: "home",
        color: "red",
      },
    });
  }

  return (
    <div class={styles.App}>
      <Header
        lang={store.lang}
        showAllLabelGlutenFree={store.screen.screenName === "langage-screen"}
        showHome={false}
      />
      <Show when={store.screen.screenName === "langage-screen"}>
        <Screen onSelectLang={handleLangSelected} />
      </Show>
    </div>
  );
};

export default App;
