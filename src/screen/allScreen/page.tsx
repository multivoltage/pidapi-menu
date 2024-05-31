import { For, Show, type Component } from "solid-js";
import styles from "./screen.module.css";
import { MyStore } from "../../types";
import { Banner } from "../../components/Banner";
import { HOME_SCREEN_ASSETS } from "./assets";
import {
  AlternateList,
  Props as AlternateListProps,
} from "../../components/AlternateList";
import {
  ITEMS_PIADA_AFFETTATI,
  ITEMS_PIADA_DOLCE,
  ITEMS_PIADA_FORMAGGI,
  ITEMS_PIADA_VERDURE,
} from "../../const";

const banner1 = HOME_SCREEN_ASSETS[0];
const banner2 = HOME_SCREEN_ASSETS[1];
const banner3 = HOME_SCREEN_ASSETS[2];

export const AllScrren: Component<{ screen: MyStore["screen"] }> = (props) => {
  return (
    <div class={styles.container}>
      <Show when={props.screen.screenName === "home"}>
        <div
          class="pluto"
          style={{
            display: "flex",
            "align-items": "center",
            height: "100%",
          }}
        >
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
        </div>
      </Show>

      <Show when={props.screen.screenName === "scelta-piada"}>
        <div>
          <div>
            <div>PIADA PICCOLA: 1 GUSTO</div>
            <div>PIADA MEDIA: 2 GUSTI</div>
            <div>PIADA GRANDE: 3 GUSTI</div>
          </div>

          <div
            style={{
              "margin-top": "1rem",
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
                goToScreen="piada-affettati"
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
              <Banner
                color="var(--green-color)"
                label="VERDURE"
                type="text"
                width="30vw"
                goToScreen="piada-verdure"
              />
            </div>

            <div
              style={{
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)",
                bottom: 0,
              }}
            >
              <Banner
                color="var(--purple-color)"
                label="DOLCi"
                type="text"
                width="30vw"
                goToScreen="piada-dolce"
              />
            </div>

            <div
              style={{
                position: "absolute",
                left: "5%",
                top: "50%",
                transform: "translateY(-50%)",
              }}
            >
              <Banner
                color="var(--blue-color)"
                label="FORMAGGI"
                type="text"
                width="30vw"
                goToScreen="piada-formaggi"
              />
            </div>
          </div>
        </div>
      </Show>

      <Show when={props.screen.screenName === "piada-affettati"}>
        <div
          class={styles.bigTitle}
          style={{
            color: props.screen.color,
          }}
        >
          AFFETTATI
        </div>
        <div
          style={{
            overflow: "auto",
            "max-height": "100%",
          }}
        >
          <AlternateList
            bannerWidth="40%"
            list={ITEMS_PIADA_AFFETTATI}
            color={props.screen.color}
          />
        </div>
      </Show>

      <Show when={props.screen.screenName === "piada-verdure"}>
        <div
          class={styles.bigTitle}
          style={{
            color: props.screen.color,
          }}
        >
          VERDURE
        </div>
        <div
          style={{
            overflow: "auto",
            "max-height": "100%",
          }}
        >
          <AlternateList
            bannerWidth="30%"
            negativeOffsetRow="5rem"
            list={ITEMS_PIADA_VERDURE}
            color={props.screen.color}
          />
        </div>
      </Show>

      <Show when={props.screen.screenName === "piada-formaggi"}>
        <div
          class={styles.bigTitle}
          style={{
            color: props.screen.color,
          }}
        >
          FORMAGGI
        </div>
        <div
          style={{
            overflow: "auto",
            "max-height": "100%",
          }}
        >
          <AlternateList
            bannerWidth="40%"
            list={ITEMS_PIADA_FORMAGGI}
            color={props.screen.color}
          />
        </div>
      </Show>

      <Show when={props.screen.screenName === "piada-dolce"}>
        <div
          class={styles.bigTitle}
          style={{
            color: props.screen.color,
          }}
        >
          DOLCI
        </div>
        <div
          style={{
            overflow: "auto",
            "max-height": "100%",
          }}
        >
          <AlternateList
            bannerWidth="30%"
            negativeOffsetRow="0"
            list={ITEMS_PIADA_DOLCE}
            color={props.screen.color}
          />
        </div>
      </Show>
    </div>
  );
};
