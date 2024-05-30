import { Show, type Component } from "solid-js";
import styles from "./header.module.css";
import { Screen } from "../../types";
import { useMyStore } from "../../StoreProvider";
import { MapScreens } from "../../const";

interface Props {
  showHome: boolean;
  prev?: Screen["next"];
  next?: Screen["prev"];
  showAllLabelGlutenFree: boolean;
}

const Header: Component<Props> = (props) => {
  const { myStore, setScreen, setLang } = useMyStore();

  return (
    <header class={styles.container}>
      <div
        style={{
          flex: 1,
        }}
      >
        <Show when={myStore().screen.screenName !== "langage-screen"}>
          {myStore().lang === "it" && (
            <img
              src="/images/bandiera_inglese.png"
              width={64}
              onClick={[setLang, "en"]}
            />
          )}
          {myStore().lang === "en" && (
            <img
              src="/images/bandiera_italiano.png"
              width={64}
              onClick={[setLang, "it"]}
            />
          )}
        </Show>
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
          <Show when={myStore().lang === "it"}>
            <span class={styles.labelGlutenFee}>TUTTO SENZA GLUTINE</span>
          </Show>
          <Show when={myStore().lang === "en"}>
            <span class={styles.labelGlutenFee}>ALL GLUTEN FREE</span>
          </Show>
        </Show>
      </div>
    </header>
  );
};

export default Header;
