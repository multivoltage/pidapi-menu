import { Show, type Component } from "solid-js";
import styles from "./header.module.css";
import { Lang, Screen } from "../../types";

interface Props {
  lang: Lang;
  showHome: boolean;
  prev?: Screen["next"];
  next?: Screen["prev"];
  showAllLabelGlutenFree: boolean;
}

const Header: Component<Props> = (props) => {
  return (
    <header class={styles.container}>
      <div>
        <span class={styles.labelGlutenFee}>TUTTO SENZA GLUTINE</span>
        <br />
        <span class={styles.labelGlutenFee}>ALL GLUTEN FREE</span>
      </div>

      <div>
        <div class={styles.prev}>
          <Show when={props.prev}>{"<"}</Show>
        </div>

        <div class={styles.next}>
          <Show when={props.next}>{">"}</Show>
        </div>
      </div>
    </header>
  );
};

export default Header;
