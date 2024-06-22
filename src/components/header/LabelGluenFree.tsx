import { Show, type Component } from "solid-js";
import styles from "./header.module.css";
import { Screen } from "../../types";
import { useMyStore } from "../../StoreProvider";
import { MapScreens } from "../../const";
import { useTranslation } from "../../i18n";

interface Props {
  showAllLabelGlutenFree: boolean;
}

export const LabelGluenFree: Component<Props> = (props) => {
  const { myStore, setScreen } = useMyStore();
  const { t } = useTranslation();

  return (
    <>
      <div class="lampeggio">
        <Show when={props.showAllLabelGlutenFree}>
          <div>
            <span class={styles.labelGlutenFee}>
              {t("header_senza_glutine", "it")} -{" "}
              {t("header_senza_glutine", "en")}
            </span>
          </div>
          <div class={styles.labelFattoAMano}>{t("header_fatto_a_mano")}</div>
        </Show>

        <Show when={!props.showAllLabelGlutenFree}>
          <div>
            <Show when={myStore().lang === "it"}>
              <div
                class={styles.labelGlutenFee}
                onClick={() => setScreen(MapScreens["vedi-info"])}
              >
                {t("header_senza_glutine")} ({t("vedi_info")})
              </div>
              <div
                class={styles.labelFattoAMano}
                // onClick={() => setScreen(MapScreens["vedi-preview"])}
              >
                {t("header_fatto_a_mano")}
              </div>
            </Show>
            <Show when={myStore().lang === "en"}>
              <div
                class={styles.labelGlutenFee}
                onClick={() => setScreen(MapScreens["vedi-info"])}
              >
                {t("header_senza_glutine")} ({t("vedi_info")})
              </div>
              <div
                class={styles.labelFattoAMano}
                // onClick={() => setScreen(MapScreens["vedi-preview"])}
              >
                {t("header_fatto_a_mano")}
              </div>
            </Show>
          </div>
          <div></div>
        </Show>
      </div>
    </>
  );
};
