import "solid-slider/slider.css";
import { Index, Show, type Component } from "solid-js";
import styles from "./slider.module.css";
import { createSlider } from "solid-slider";
import { LOCKSCREEN_ASSET_LIST } from "../../screen/lockscreen/assets";

const Slider: Component = () => {
  const [slider, { current, next, prev, moveTo }] = createSlider({
    loop: true,
  });

  return (
    <div use:slider>
      <Index each={LOCKSCREEN_ASSET_LIST}>
        {(item, index) => (
          <div class="slide">
            <div class={styles.slide}>
              <Show when={item().type === "video"}>
                <video
                  autoplay
                  muted
                  style={{
                    width: "100vw",
                  }}
                >
                  <source src={item().url} />
                </video>
              </Show>

              <Show when={item().type === "img"}>
                <img src={item().url} />
              </Show>
            </div>
          </div>
        )}
      </Index>
    </div>
  );
};

export default Slider;
