import { Show, type Component } from "solid-js";
import styles from "./header.module.css";
import { Lang, Screen } from "../../types";

interface Props {
  lang: Lang;
  showHome: boolean;
  prev?: Screen["next"];
  next?: Screen["prev"];
  showAllLabelGlutenFree: boolean;
  onClickHome: () => void;
}

const Header: Component<Props> = (props) => {
  return (
    <header class={styles.container}>
      <div
        style={{
          flex: 1,
        }}
      >
        {props.lang === "it" && <button>EN</button>}
        {props.lang === "en" && <button>IT</button>}
      </div>

      <div
        style={{
          flex: 1,
        }}
      >
        <img
          onClick={props.onClickHome}
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
          <Show when={props.lang === "it"}>
            <span class={styles.labelGlutenFee}>TUTTO SENZA GLUTINE</span>
          </Show>
          <Show when={props.lang === "en"}>
            <span class={styles.labelGlutenFee}>ALL GLUTEN FREE</span>
          </Show>
        </Show>
      </div>
    </header>
  );
};

export default Header;
