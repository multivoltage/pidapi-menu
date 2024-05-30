import "solid-slider/slider.css";
import type { Component } from "solid-js";
import styles from "./screen.module.css";
import { createSlider } from "solid-slider";
import Slider from "../../components/lockScreenSlider";

const Scrren: Component = () => {
  return (
    <div class={styles.container}>
      <div class={styles.flag}>
        <img src="/images/bandiera_italiano.png" />
        <span>ITALIANO</span>
      </div>

      <div class={styles.flag}>
        <img src="/images/bandiera_inglese.png" />
        <span>ENGLISH</span>
      </div>
    </div>
  );
};

export default Scrren;
