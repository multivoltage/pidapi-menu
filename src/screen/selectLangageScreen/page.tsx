import type { Component } from "solid-js";
import styles from "./screen.module.css";
import { useMyStore } from "../../StoreProvider";
import { MapScreens } from "../../const";

const Screen: Component = () => {
  const { setMyStore } = useMyStore();
  return (
    <div class={styles.container}>
      <div
        class={styles.flag}
        onClick={() => {
          setMyStore(() => ({
            lang: "it",
            screen: MapScreens["home"],
          }));
        }}
      >
        <img src="/images/bandiera_italiano.png" />
        <span>ITALIANO</span>
      </div>

      <div
        class={styles.flag}
        onClick={() => {
          setMyStore(() => ({
            lang: "en",
            screen: MapScreens["home"],
          }));
        }}
      >
        <img src="/images/bandiera_inglese.png" />
        <span>ENGLISH</span>
      </div>
    </div>
  );
};

export default Screen;
