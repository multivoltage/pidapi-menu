import {
  createContext,
  createSignal,
  useContext,
  ParentComponent,
} from "solid-js";
import { MyStore, Screen } from "./types";
import { MapScreens } from "./const";

function useProviderValue() {
  const [myStore, setMyStore] = createSignal<MyStore>({
    lang: "it",
    screen: MapScreens["langage-screen"],
  });

  function setScreen(screen: Screen) {
    setMyStore(() => ({
      screen,
      lang: myStore().lang,
    }));
  }
  return { myStore, setScreen };
}

export type ContextType = ReturnType<typeof useProviderValue>;

const MyStoreContext = createContext<ContextType | undefined>(undefined);

export const MyStoreProvider: ParentComponent = (props) => {
  const value = useProviderValue();
  return (
    <MyStoreContext.Provider value={value}>
      {props.children}
    </MyStoreContext.Provider>
  );
};

export function useMyStore() {
  const context = useContext(MyStoreContext);
  if (context === undefined) {
    throw new Error(`useMyStore must be used within a MyStoreProvider`);
  }
  return context;
}
