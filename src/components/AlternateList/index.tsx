import { For, Index, type Component } from "solid-js";
import { Banner } from "../Banner";

export interface Props {
  color: string;
  list: Array<{ label: string; urlImage?: string }>;
  bannerWidth: string;
}

export const AlternateList: Component<Props> = ({
  color,
  list,
  bannerWidth,
}) => {
  return (
    <Index each={list}>
      {(item, i) => (
        <div
          style={{
            display: "flex",
            color,
            "flex-direction": i % 2 === 0 ? "row" : "row-reverse",
            "align-items": "center",
            "justify-content": "space-between",
            "margin-top": i === 0 ? 0 : "-3rem",
          }}
        >
          <div
            style={{
              "flex-basis": "50%",
              display: "flex",
              "justify-content": "center",
            }}
          >
            <Banner
              width={bannerWidth}
              type="img"
              url={
                item().urlImage ||
                "https://www.frescopiada.com/wp-content/uploads/2020/01/La-piada-del-chiosco-fronte.jpg"
              }
            />
          </div>
          <span
            style={{
              "flex-basis": "50%",
            }}
          >
            {item().label}
          </span>
        </div>
      )}
    </Index>
  );
};
