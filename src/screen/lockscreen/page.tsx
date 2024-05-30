import "solid-slider/slider.css";
import type { Component } from "solid-js";
import styles from "./screen.module.css";
import { createSlider } from "solid-slider";
import Slider from "../../components/lockScreenSlider";

const Scrren: Component = () => {
  const [slider, { current, next, prev, moveTo }] = createSlider();

  return (
    <div class={styles.container}>
      <Slider />
    </div>
  );
};

export default Scrren;
