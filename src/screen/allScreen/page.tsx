import { Index, Show, type Component } from "solid-js";
import styles from "./screen.module.css";
import { MyStore } from "../../types";
import { Banner } from "../../components/Banner";
import { HOME_SCREEN_ASSETS } from "./assets";

export const AllScrren: Component<{ screen: MyStore["screen"] }> = (props) => {
  const banner1 = HOME_SCREEN_ASSETS[0];
  const banner2 = HOME_SCREEN_ASSETS[1];
  const banner3 = HOME_SCREEN_ASSETS[2];

  return (
    <div class={styles.container}>
      <Show when={props.screen.screenName === "home"}>
        <div>
          <div
            style={{
              display: "flex",
              "justify-content": "center",
            }}
          >
            <Banner type="img" url={banner1.url} width="40vw" />
          </div>
          <div
            style={{
              display: "flex",
              "justify-content": "center",
              gap: "3rem",
            }}
          >
            <Banner type="img" url={banner2.url} width="40vw" />
            <Banner type="img" url={banner3.url} width="40vw" />
          </div>
        </div>
      </Show>
    </div>
  );
};