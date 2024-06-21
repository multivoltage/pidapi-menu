import { Show, type Component } from "solid-js";
import styles from "./header.module.css";
import { Screen } from "../../types";
import { useMyStore } from "../../StoreProvider";
import { MapScreens } from "../../const";
import { LabelGluenFree } from "./LabelGluenFree";
import { useTranslation } from "../../i18n";

interface Props {
  showHome: boolean;
  prev?: Screen["next"];
  next?: Screen["prev"];
  showAllLabelGlutenFree: boolean;
}

const Header: Component<Props> = (props) => {
  const { myStore, setScreen, setLang } = useMyStore();
  const { t } = useTranslation();

  return (
    <header class={styles.container}>
      <div
        style={{
          flex: 1,
          display: "flex",
          "justify-content": "left",
          "align-items": "center",
        }}
      >
        <Show when={myStore().screen.screenName !== "langage-screen"}>
          <div>
            {myStore().lang === "it" && (
              <img
                src="/images/bandiera_inglese.png"
                width={54}
                onClick={[setLang, "en"]}
              />
            )}
            {myStore().lang === "en" && (
              <img
                src="/images/bandiera_italiano.png"
                width={54}
                onClick={[setLang, "it"]}
              />
            )}
          </div>
        </Show>
        <Show when={!!myStore().screen.prev}>
          <div
            class={styles.navigationButton}
            onClick={() =>
              setScreen(
                MapScreens[
                  myStore().screen.prev?.goToScreen as Screen["screenName"]
                ]
              )
            }
          >
            <img src="/icons/icon_back.png" width={42} />
            <span>{t(myStore().screen.prev?.label as string)}</span>
          </div>
        </Show>
      </div>
      <div
        style={{
          flex: 1,
          "flex-grow": 0,
        }}
      >
        <img
          onClick={() => setScreen(MapScreens["langage-screen"])}
          src="/icons/icon_home.png"
          width={54}
        />
      </div>

      <div
        style={{
          flex: 1,
        }}
      >
        <Show when={!!myStore().screen.next}>
          <div
            class={styles.navigationButton}
            onClick={() =>
              setScreen(
                MapScreens[
                  myStore().screen.next?.goToScreen as Screen["screenName"]
                ]
              )
            }
          >
            <span class={styles.labelNext}>
              {t(myStore().screen.next?.label as string)}
            </span>
            <img
              src="/icons/icon_back.png"
              width={42}
              class={styles.nextArrow}
            />
          </div>
        </Show>
      </div>

      <div
        style={{
          flex: 1,
          "flex-basis": "100%",
        }}
      >
        <LabelGluenFree showAllLabelGlutenFree={props.showAllLabelGlutenFree} />
      </div>

      <Show when={myStore().screen.screenName !== "langage-screen"}>
        <div class={styles["actions"]}>
          <div>{t("vedi_info")}</div>
          <div>{t("vedi_preview")}</div>
        </div>
      </Show>
    </header>
  );
};

export default Header;
