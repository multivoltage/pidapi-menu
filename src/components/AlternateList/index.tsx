import { Index, type Component } from "solid-js";
import { Banner } from "../Banner";
import { useTranslation } from "../../i18n";

export interface Props {
  color: string;
  list: Array<{
    label: string;
    urlImage?: string;
    objectFit?: "cover" | "contain";
    animationRotate?: boolean;
  }>;
  bannerWidth: string;
  negativeOffsetRow?: string;
}

export const AlternateList: Component<Props> = ({
  color,
  list,
  bannerWidth,
  negativeOffsetRow,
}) => {
  const { t } = useTranslation();
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
            url={item().urlImage || "https://placehold.co/800x800"}
            objectFit={item().objectFit}
            animationRotate={item().animationRotate}
          />

          <span
            style={{
              "flex-basis": "50%",
              "text-align": i % 2 === 0 ? "left" : "right",
            }}
          >
            {t(item().label)}
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
