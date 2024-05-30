import { Show, type Component } from "solid-js";
import styles from "./banner.module.css";

type Props = { width: string } & (
  | {
      type: "img";
      url: string;
    }
  | {
      type: "text";
      label: string;
      color: string;
    }
);

export const Banner: Component<Props> = (props) => {
  return (
    <div
      class={styles.container}
      style={{
        width: props.width,
      }}
    >
      {props.type === "img" && <img class={styles.image} src={props.url} />}
      {props.type === "text" && (
        <span
          style={{
            color: props.color,
          }}
        >
          {props.label}
        </span>
      )}
    </div>
  );
};
