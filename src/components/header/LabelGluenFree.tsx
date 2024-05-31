import { Show, type Component } from "solid-js";
import styles from "./header.module.css";
import { Screen } from "../../types";
import { useMyStore } from "../../StoreProvider";
import { MapScreens } from "../../const";

interface Props {
  showAllLabelGlutenFree: boolean;
}

export const LabelGluenFree: Component<Props> = (props) => {
  const { myStore } = useMyStore();

  return (
    <>
      <Show when={props.showAllLabelGlutenFree}>
        <span class={styles.labelGlutenFee}>TUTTO SENZA GLUTINE</span>
        <br />
        <span class={styles.labelGlutenFee}>ALL GLUTEN FREE</span>
      </Show>

      <Show when={!props.showAllLabelGlutenFree}>
        <Show when={myStore().lang === "it"}>
          <span class={styles.labelGlutenFee}>TUTTO SENZA GLUTINE</span>
        </Show>
        <Show when={myStore().lang === "en"}>
          <span class={styles.labelGlutenFee}>ALL GLUTEN FREE</span>
        </Show>
      </Show>
    </>
  );
};
