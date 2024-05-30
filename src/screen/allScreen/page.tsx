import { Show, type Component } from "solid-js";
import styles from "./screen.module.css";
import { MyStore } from "../../types";
import { Banner } from "../../components/Banner";
import { HOME_SCREEN_ASSETS } from "./assets";

const banner1 = HOME_SCREEN_ASSETS[0];
const banner2 = HOME_SCREEN_ASSETS[1];
const banner3 = HOME_SCREEN_ASSETS[2];

export const AllScrren: Component<{ screen: MyStore["screen"] }> = (props) => {
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
            <Banner
              type="img"
              url={banner1.url}
              width="40vw"
              goToScreen={banner1.goToScreen}
            />
          </div>
          <div
            style={{
              display: "flex",
              "justify-content": "center",
              gap: "3rem",
            }}
          >
            <Banner
              type="img"
              url={banner2.url}
              width="40vw"
              goToScreen={banner2.goToScreen}
            />
            <Banner
              type="img"
              url={banner3.url}
              width="40vw"
              goToScreen={banner3.goToScreen}
            />
          </div>
        </div>
      </Show>

      <Show when={props.screen.screenName === "scelta-piada"}>
        <div>
          <div
            style={{
              "font-size": "2rem",
            }}
          >
            <p>PIADA PICCOLA: 1 GUSTO</p>
            <p>PIADA MEDIA: 2 GUSTI</p>
            <p>PIADA GRANDE: 3 GUSTI</p>
          </div>

          <div
            style={{
              position: "relative",
              width: "90vw",
              height: "60vh",
            }}
          >
            <div
              style={{
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            >
              <Banner
                color="orange"
                label="AFFETTATI"
                type="text"
                width="30vw"
              />
            </div>
            <div
              style={{
                position: "absolute",
                right: "5%",
                top: "50%",
                transform: "translateY(-50%)",
              }}
            >
              <Banner color="green" label="VERDURE" type="text" width="30vw" />
            </div>

            <div
              style={{
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)",
                bottom: 0,
              }}
            >
              <Banner color="purple" label="DOLCi" type="text" width="30vw" />
            </div>

            <div
              style={{
                position: "absolute",
                left: "5%",
                top: "50%",
                transform: "translateY(-50%)",
              }}
            >
              <Banner color="blue" label="FORMAGGI" type="text" width="30vw" />
            </div>
          </div>
        </div>
      </Show>
    </div>
  );
};
