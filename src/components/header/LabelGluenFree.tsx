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
  const { myStore } = useMyStore();
  const { t } = useTranslation();

  return (
    <>
      <div class="lampeggio">
        <Show when={props.showAllLabelGlutenFree}>
          <span class={styles.labelGlutenFee}>
            {t("header_senza_glutine", "it")}
          </span>
          <span class={styles.labelGlutenFee}>{" - "}</span>
          <span class={styles.labelGlutenFee}>
            {t("header_senza_glutine", "en")}
          </span>
        </Show>

        <Show when={!props.showAllLabelGlutenFree}>
          <Show when={myStore().lang === "it"}>
            <span class={styles.labelGlutenFee}>
              {t("header_senza_glutine")}
            </span>
          </Show>
          <Show when={myStore().lang === "en"}>
            <span class={styles.labelGlutenFee}>
              {t("header_senza_glutine")}
            </span>
          </Show>
        </Show>
      </div>
    </>
  );
};
