import {
  Show,
  createEffect,
  onCleanup,
  onMount,
  type Component,
} from "solid-js";
import styles from "./banner.module.css";
import { Screen } from "../../types";
import { useMyStore } from "../../StoreProvider";
import { MapScreens } from "../../const";

type Props = {
  width: string;
  goToScreen?: Screen["screenName"];
} & (
  | {
      type: "img";
      url: string;
      objectFit?: "cover" | "contain";
      animationRotate?: boolean;

      label?: string;
      topLabel?: {
        label: string;
        color: string;
      };
    }
  | {
      type: "text";
      label: string;
      color: string;
    }
  | {
      type: "img-with-label";
      url: string;
      centerLabel: {
        label: string;
        color: string;
      };
    }
);

export const Banner: Component<Props> = (props) => {
  const { setScreen } = useMyStore();

  const idCanvas = `${props.type}-${props.goToScreen}-${props.width}`;
  let container!: HTMLDivElement;

  function setupTopLabel() {
    let canvas = document.getElementById(idCanvas) as HTMLCanvasElement;

    if (!canvas) {
      return;
    }

    const lato = container.getBoundingClientRect().width;
    canvas.width = lato;
    canvas.height = lato;
    /* This method returns a drawing context
        on the canvas, or null if the context
        identified is not supported. */
    let context = canvas.getContext("2d");
    if (!context || props.type !== "img") {
      return;
    }

    /* It will change the style and appearance 
        of the text to make it look more geeky. */
    context.font = "3rem Caveat";

    context.fillStyle = props.topLabel?.color || "red";
    context.textAlign = "center";

    let angle = Math.PI * 0.5; // in radians
    let radius = lato / 2;

    // context.translate(lato / 2, lato / 2 + 1);
    context.translate(lato / 2, lato);
    context.rotate((-1 * angle) / 1.8);

    const string = props.topLabel?.label || "";

    for (let i = 0; i < string.length; i++) {
      /* It is worth noting that we are not
            rotating the text,here the whole
            context is being rotated and
            translated, and the letters are just
            filled in it. */
      context.rotate(angle / string.length);
      context.save();
      context.translate(0, -1 * radius);
      context.fillText(string[i], 0, 0);
      context.restore();
    }
  }

  createEffect(() => {
    setTimeout(() => {
      setupTopLabel();
    }, 200);
  });

  return (
    <div
      ref={container}
      class={styles.container}
      classList={{
        [styles.container]: true,
        [styles["filigrana"]]: props.type === "img-with-label",
        "rotazione-loop": props.type === "img" && !!props.animationRotate,
      }}
      style={{
        width: props.width,
        position: "relative",
      }}
      onClick={
        props.goToScreen ? [setScreen, MapScreens[props.goToScreen]] : undefined
      }
    >
      {props.type === "img" && (
        <div
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <img
            class={styles.image}
            src={props.url}
            style={{
              "object-fit": props.objectFit || "cover",
            }}
          />
          <canvas
            id={idCanvas}
            width="50%"
            height="50%"
            style={{
              position: "absolute",
              top: "-55%",
              left: 0,
            }}
          ></canvas>
        </div>
      )}
      {props.type === "text" && (
        <span
          style={{
            color: props.color,
          }}
          class="lampeggio"
        >
          {props.label}
        </span>
      )}

      {props.type === "img-with-label" && (
        <div
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <img
            class={styles.image}
            src={props.url}
            style={{
              "object-fit": "cover",
            }}
          />

          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
              display: "flex",
              "justify-content": "center",
              "align-items": "center",
            }}
          >
            <span
              style={{
                color: props.centerLabel.color,
              }}
              class="lampeggio"
            >
              {props.centerLabel.label}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
