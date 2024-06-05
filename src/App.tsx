import {
  Show,
  createEffect,
  createSignal,
  onCleanup,
  onMount,
  type Component,
} from "solid-js";

import styles from "./App.module.css";

// screens
import ScreenLangSelector from "./screen/selectLangageScreen/page";
import Header from "./components/header";
import { Lang } from "./types";
import { AllScrren } from "./screen/allScreen/page";
import { MapScreens, RESET_TO_LANGUAGE_SELECTOR_TIME_MS } from "./const";
import { useMyStore } from "./StoreProvider";

function createTimer(ms: number, onEnd: () => void) {
  let ref: number | undefined;
  const createTimer = () => {
    ref = setTimeout(() => {
      onEnd();
    }, ms);
  };

  const resetTimer = () => {
    window.clearTimeout(ref);
    createTimer();
  };

  return {
    restart: () => {
      resetTimer();
    },
  };
}

const App: Component = () => {
  const { myStore, setScreen } = useMyStore();
  const { restart } = createTimer(
    import.meta.env.PROD ? RESET_TO_LANGUAGE_SELECTOR_TIME_MS : 99999999,
    () => {
      console.log("xxx go language");
      setScreen(MapScreens["langage-screen"]);
    }
  );

  onMount(() => {
    restart();
  });

  return (
    <div class={styles.App} on:touchstart={restart}>
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
