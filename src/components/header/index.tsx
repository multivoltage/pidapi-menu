import { Show, type Component } from "solid-js";
import styles from "./header.module.css";
import { Lang, Screen } from "../../types";
import { useMyStore } from "../../StoreProvider";
import { MapScreens } from "../../const";

interface Props {
  showHome: boolean;
  prev?: Screen["next"];
  next?: Screen["prev"];
  showAllLabelGlutenFree: boolean;
}

const Header: Component<Props> = (props) => {
  const { myStore, setScreen } = useMyStore();
  const lang = myStore().lang;
  return (
    <header class={styles.container}>
      <div
        style={{
          flex: 1,
        }}
      >
        {lang === "it" && <button>EN</button>}
        {lang === "en" && <button>IT</button>}
      </div>

      <div
        style={{
          flex: 1,
        }}
      >
        <img
          onClick={() => setScreen(MapScreens.home)}
          src="/icons/icon_home.png"
          width={82}
        />
      </div>

      <div
        style={{
          flex: 1,
        }}
      >
        <Show when={props.showAllLabelGlutenFree}>
          <span class={styles.labelGlutenFee}>TUTTO SENZA GLUTINE</span>
          <br />
          <span class={styles.labelGlutenFee}>ALL GLUTEN FREE</span>
        </Show>

        <Show when={!props.showAllLabelGlutenFree}>
          <Show when={lang === "it"}>
            <span class={styles.labelGlutenFee}>TUTTO SENZA GLUTINE</span>
          </Show>
          <Show when={lang === "en"}>
            <span class={styles.labelGlutenFee}>ALL GLUTEN FREE</span>
          </Show>
        </Show>
      </div>
    </header>
  );
};

export default Header;
