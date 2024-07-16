import type { Component } from "solid-js";
import styles from "./screen.module.css";
import { useMyStore } from "../../StoreProvider";
import { MapScreens } from "../../const";

const Screen: Component = () => {
  const { setScreen } = useMyStore();

  return (
    <video
      controls={false}
      muted
      autoplay
      class={styles.container}
      onClick={[setScreen, MapScreens.home]}
      loop
    >
      <source src="/video/screensaver.mp4" type="video/mp4" />
    </video>
  );
};

export default Screen;
