import type { Component } from "solid-js";
import styles from "./screen.module.css";
import { Lang } from "../../types";

interface Props {
  onSelectLang: (lang: Lang) => void;
}

const Scrren: Component<Props> = (props) => {
  return (
    <div class={styles.container}>
      <div class={styles.flag} onClick={[props.onSelectLang, "it"]}>
        <img src="/images/bandiera_italiano.png" />
        <span>ITALIANO</span>
      </div>

      <div class={styles.flag} onClick={[props.onSelectLang, "en"]}>
        <img src="/images/bandiera_inglese.png" />
        <span>ENGLISH</span>
      </div>
    </div>
  );
};

export default Scrren;
