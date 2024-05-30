import { Show, onCleanup, type Component } from "solid-js";
import { createStore } from "solid-js/store";

import styles from "./App.module.css";

// screens
import Screen from "./screen/selectLangageScreen/page";
import Header from "./components/header";
import { Lang, MyStore } from "./types";
import { AllScrren } from "./screen/allScreen/page";
import { MapScreens, RESET_TO_LANGUAGE_SELECTOR_TIME } from "./const";

const App: Component = () => {
  // Initialize store
  const [store, setStore] = createStore<MyStore>({
    screen: MapScreens["langage-screen"],
    lang: "it",
  });

  function handleLangSelected(lang: Lang) {
    setStore({
      lang,
      screen: MapScreens["home"],
    });
  }

  const timer = window.setTimeout(() => {
    setStore({
      screen: MapScreens["langage-screen"],
    });
  }, RESET_TO_LANGUAGE_SELECTOR_TIME);

  onCleanup(() => {
    window.clearTimeout(timer);
  });

  return (
    <div class={styles.App}>
      <Header
        lang={store.lang}
        showAllLabelGlutenFree={store.screen.screenName === "langage-screen"}
        showHome={false}
        onClickHome={() =>
          setStore({
            screen: MapScreens["home"],
          })
        }
      />
      <Show when={store.screen.screenName === "langage-screen"}>
        <Screen onSelectLang={handleLangSelected} />
      </Show>

      <Show when={store.screen.screenName !== "langage-screen"}>
        <AllScrren screen={store.screen} />
      </Show>

      {!import.meta.env.PROD && (
        <div class={styles.debug}>{JSON.stringify(store)}</div>
      )}
    </div>
  );
};

export default App;
