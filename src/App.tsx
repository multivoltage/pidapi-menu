import { Show, onCleanup, type Component } from "solid-js";

import styles from "./App.module.css";

// screens
import Screen from "./screen/selectLangageScreen/page";
import Header from "./components/header";
import { Lang } from "./types";
import { AllScrren } from "./screen/allScreen/page";
import { MapScreens, RESET_TO_LANGUAGE_SELECTOR_TIME } from "./const";
import { useMyStore } from "./StoreProvider";

const App: Component = () => {
  const { myStore, setScreen } = useMyStore();

  function handleLangSelected(lang: Lang) {
    setScreen(MapScreens["home"]);
  }

  const timer = window.setTimeout(() => {
    setScreen(MapScreens["langage-screen"]);
  }, RESET_TO_LANGUAGE_SELECTOR_TIME);

  onCleanup(() => {
    window.clearTimeout(timer);
  });

  return (
    <div class={styles.App}>
      <Header
        showAllLabelGlutenFree={
          myStore().screen.screenName === "langage-screen"
        }
        showHome={false}
      />
      <Show when={myStore().screen.screenName === "langage-screen"}>
        <Screen onSelectLang={handleLangSelected} />
      </Show>

      <Show when={myStore().screen.screenName !== "langage-screen"}>
        <AllScrren screen={myStore().screen} />
      </Show>

      {!import.meta.env.PROD && (
        <div class={styles.debug}>{JSON.stringify(myStore())}</div>
      )}
    </div>
  );
};

export default App;
