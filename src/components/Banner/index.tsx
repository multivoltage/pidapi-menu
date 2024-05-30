import { Show, type Component } from "solid-js";
import styles from "./banner.module.css";
import { Screen } from "../../types";
import { useMyStore } from "../../StoreProvider";

type Props = { width: string; goToScreen?: Screen["screenName"] } & (
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
  const { setScreen } = useMyStore();

  return (
    <div
      class={styles.container}
      style={{
        width: props.width,
      }}
      onClick={props.goToScreen ? [setScreen, props.goToScreen] : undefined}
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
