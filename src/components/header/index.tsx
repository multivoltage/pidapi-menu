import { Show, type Component } from "solid-js";
import styles from "./header.module.css";
import { Screen } from "../../types";
import { useMyStore } from "../../StoreProvider";
import { MapScreens } from "../../const";
import { LabelGluenFree } from "./LabelGluenFree";

interface Props {
  showHome: boolean;
  prev?: Screen["next"];
  next?: Screen["prev"];
  showAllLabelGlutenFree: boolean;
}

const Header: Component<Props> = (props) => {
  const { myStore, setScreen, setLang } = useMyStore();

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
                width={64}
                onClick={[setLang, "en"]}
              />
            )}
            {myStore().lang === "en" && (
              <img
                src="/images/bandiera_italiano.png"
                width={64}
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
            <img src="/icons/icon_back.png" width={64} />
            <span>{myStore().screen.prev?.label}</span>
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
          width={82}
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
            <img
              src="/icons/icon_back.png"
              width={64}
              class={styles.nextArrow}
            />
            <span>{myStore().screen.next?.label}</span>
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
    </header>
  );
};

export default Header;
