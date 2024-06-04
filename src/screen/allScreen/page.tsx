import { For, Index, Show, type Component } from "solid-js";
import styles from "./screen.module.css";
import { MyStore } from "../../types";
import { Banner } from "../../components/Banner";
import { HOME_SCREEN_ASSETS } from "./assets";
import {
  AlternateList,
  Props as AlternateListProps,
} from "../../components/AlternateList";
import {
  ITEMS_CAPPELLETTI,
  ITEMS_CROSTATA,
  ITEMS_GIRELLA,
  ITEMS_PIADA_AFFETTATI,
  ITEMS_PIADA_DOLCE,
  ITEMS_PIADA_FORMAGGI,
  ITEMS_PIADA_VERDURE,
  ITEMS_TOPPING,
  MapScreens,
} from "../../const";
import { useTranslation } from "../../i18n";

// banners home
const banner1 = HOME_SCREEN_ASSETS[0];
const banner2 = HOME_SCREEN_ASSETS[1];
const banner3 = HOME_SCREEN_ASSETS[2];

export const AllScrren: Component<{ screen: MyStore["screen"] }> = (props) => {
  const { t } = useTranslation();

  return (
    <div class={styles.container}>
      <Show when={props.screen.screenName === "home"}>
        <div
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
                topLabel={{
                  label: t("piada_farcita"),
                  color: getComputedStyle(document.body).getPropertyValue(
                    MapScreens["scelta-piada"].color
                      .replace("var(", "")
                      .replace(")", "")
                  ),
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                "justify-content": "center",
                gap: "3rem",
                "margin-top": "2rem",
              }}
            >
              <Banner
                type="img"
                url={banner2.url}
                width="40vw"
                goToScreen={banner2.goToScreen}
                topLabel={{
                  label: t("cappelletti_fritti"),
                  color: getComputedStyle(document.body).getPropertyValue(
                    MapScreens["scelta-cappelletti"].color
                      .replace("var(", "")
                      .replace(")", "")
                  ),
                }}
              />
              <Banner
                type="img"
                url={banner3.url}
                width="40vw"
                goToScreen={banner3.goToScreen}
                topLabel={{
                  label: t("croissant_fritti"),
                  color: getComputedStyle(document.body).getPropertyValue(
                    MapScreens["croissant-fritti"].color
                      .replace("var(", "")
                      .replace(")", "")
                  ),
                }}
              />
            </div>
          </div>
        </div>
      </Show>

      <Show when={props.screen.screenName === "scelta-piada"}>
        <div>
          <div>
            <div>{t("piada_piccola")}</div>
            <div>{t("piada_media")}</div>
            <div>{t("piada_grande")}</div>
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
                left: "5%",
                top: "50%",
                transform: "translateY(-50%)",
              }}
            >
              <Banner
                color="var(--orange-color)"
                label={t("affettati")}
                type="text"
                width="30vw"
                goToScreen="piada-affettati"
              />
            </div>
            <div
              style={{
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            >
              <Banner
                color="var(--green-color)"
                label={t("verdure")}
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
                label={t("piada_dolce")}
                type="text"
                width="30vw"
                goToScreen="piada-dolce"
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
                color="var(--blue-color)"
                label={t("formaggi")}
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
          {t("affettati")}
        </div>
        <div class={styles.containerAlternateSection}>
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
          {t("verdure")}
        </div>
        <div class={styles.containerAlternateSection}>
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
          {t("formaggi")}
        </div>
        <div class={styles.containerAlternateSection}>
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
          {t("dolci")}
        </div>
        <div class={styles.containerAlternateSection}>
          <AlternateList
            bannerWidth="30%"
            negativeOffsetRow="0"
            list={ITEMS_PIADA_DOLCE}
            color={props.screen.color}
          />
        </div>
      </Show>

      <Show when={props.screen.screenName === "scelta-cappelletti"}>
        <div
          class={styles.bigTitle}
          style={{
            color: props.screen.color,
          }}
        >
          {t("cappelletti_fritti")}
        </div>
        <div class={styles.containerAlternateSection}>
          <AlternateList
            bannerWidth="50%"
            negativeOffsetRow="7rem"
            list={ITEMS_CAPPELLETTI}
            color={props.screen.color}
          />
        </div>
      </Show>

      <Show when={props.screen.screenName === "scelta-croissant"}>
        <div
          class={styles.bigTitle}
          style={{
            color: props.screen.color,
          }}
        >
          {t("dolci")}
        </div>
        <div
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
                type="text"
                label={t("croissant_fritti")}
                color="var(--orange-light-color)"
                width="40vw"
                goToScreen="croissant-fritti"
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
                type="text"
                label={t("crostata")}
                color="var(--orange-color)"
                width="40vw"
                goToScreen="scelta-crostata"
              />
              <Banner
                type="text"
                label={t("girella")}
                color="var(--yellow-color)"
                width="40vw"
                goToScreen="scelta-girella"
              />
            </div>
          </div>
        </div>
      </Show>

      <Show when={props.screen.screenName === "scelta-crostata"}>
        <div
          class={styles.bigTitle}
          style={{
            color: props.screen.color,
          }}
        >
          {t("crostata")}
        </div>
        <div class={styles.containerAlternateSection}>
          <AlternateList
            bannerWidth="60%"
            list={ITEMS_CROSTATA}
            color={props.screen.color}
          />
        </div>
      </Show>

      <Show when={props.screen.screenName === "scelta-girella"}>
        <div
          class={styles.bigTitle}
          style={{
            color: props.screen.color,
          }}
        >
          {t("girella")}
        </div>
        <div class={styles.containerAlternateSection}>
          <AlternateList
            bannerWidth="60%"
            list={ITEMS_GIRELLA}
            color={props.screen.color}
          />
        </div>
      </Show>

      <Show when={props.screen.screenName === "croissant-fritti"}>
        <div
          class={styles.bigTitle}
          style={{
            color: props.screen.color,
          }}
        >
          {t("croissant_fritti")}
        </div>
        <div
          style={{
            display: "flex",
            "justify-content": "space-between",
            width: "90%",
          }}
        >
          <Banner
            type="img"
            url="/images/brioche_senza_niente.jpg"
            width="30%"
          />
          <Banner type="img" url="/images/brioche_solo_velo.jpg" width="30%" />
          <Banner type="img" url="/images/brioche_cioccolato.jpg" width="30%" />
        </div>

        <div
          style={{
            "margin-top": "2rem",
            color: props.screen.color,
          }}
        >
          TOPPINGS
        </div>

        <div
          style={{
            display: "grid",
            "grid-template-columns": "repeat(2, 1fr)",
            "grid-template-rows": "repeat(3, 1fr)",
            "grid-column-gap": "0px",
            "grid-row-gap": "0px",
            "row-gap": "2rem",
            width: "90%",
            height: "100%",
            overflow: "scroll",
          }}
        >
          <Index each={ITEMS_TOPPING}>
            {(item) => (
              <div
                style={{
                  "margin-top": "2rem",
                  display: "flex",
                  "justify-content": "space-between",
                  "align-items": "center",
                }}
              >
                <div
                  style={{
                    flex: "0.5",
                  }}
                >
                  <Banner
                    width="100%"
                    type="img"
                    url={item().urlImage as string}
                  />
                </div>
                <span
                  style={{
                    flex: 1,
                    "font-size": "2rem",
                  }}
                >
                  {t(item().label)}
                </span>
              </div>
            )}
          </Index>
        </div>
      </Show>
    </div>
  );
};
