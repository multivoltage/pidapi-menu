import { Index, type Component } from "solid-js";
import { Banner } from "../Banner";

export interface Props {
  color: string;
  list: Array<{ label: string; urlImage?: string }>;
  bannerWidth: string;
  negativeOffsetRow?: string;
}

export const AlternateList: Component<Props> = ({
  color,
  list,
  bannerWidth,
  negativeOffsetRow,
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
            "margin-top":
              i === 0
                ? 0
                : !!negativeOffsetRow
                ? `-${negativeOffsetRow}`
                : "-3rem",
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

          <span
            style={{
              "flex-basis": "50%",
              "text-align": i % 2 === 0 ? "left" : "right",
            }}
          >
            {item().label}
          </span>

          <span
            style={{
              flex: 0.5,
            }}
          ></span>
        </div>
      )}
    </Index>
  );
};
