import { Show, onCleanup, type Component } from "solid-js";

import styles from "./App.module.css";

// screens
import ScreenLangSelector from "./screen/selectLangageScreen/page";
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
    // TODO creare and restart the timer on click
    // setScreen(MapScreens["langage-screen"]);
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
        <ScreenLangSelector />
      </Show>

      <Show when={myStore().screen.screenName !== "langage-screen"}>
        <AllScrren screen={myStore().screen} />
      </Show>

      {!import.meta.env.PROD && (
        <div class={styles.debug}>
          <pre>{JSON.stringify(myStore(), null, "\t")}</pre>
        </div>
      )}
    </div>
  );
};

export default App;
