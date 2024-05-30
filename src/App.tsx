import { Show, type Component } from "solid-js";
import { createStore } from "solid-js/store";

import styles from "./App.module.css";

// screens
import Screen from "./screen/selectLangageScreen/page";
import Header from "./components/header";
import { Lang, MyStore } from "./types";
import { AllScrren } from "./screen/allScreen/page";
import { MapScreens } from "./const";

const App: Component = () => {
  // Initialize store
  const [store, setStore] = createStore<MyStore>({
    screen: MapScreens["home"],
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

      <Show when={store.screen.screenName !== "langage-screen"}>
        <AllScrren screen={store.screen} />
      </Show>
    </div>
  );
};

export default App;
