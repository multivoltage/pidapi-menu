type AssetType = "img" | "video" | "text";

export type Asset = {
  type: AssetType;
  url: string;
};

export type Lang = "it" | "en";

export type ScreenName =
  | "langage-screen"
  | "home" // pagina 4
  //
  | "scelta-piada" // pagina 5
  | "piada-affettati" // pagina 6
  | "piada-verdure" // pagina 7
  | "piada-formaggi" // pagina 8
  | "piada-dolce" // pagina 9
  //
  | "scelta-cappelletti" // pagina 10
  //
  | "scelta-croissant" // pagina 11
  | "croissant-fritti" // pagina 12
  | "scelta-girella"; // pagina 13

export type Screen = {
  screenName: ScreenName;
  showHomeIcon: boolean;
  title: string;
  color: string;
  prev?: {
    goToScreen: Screen["screenName"];
    label: string;
  };
  next?: {
    goToScreen: Screen["screenName"];
    label: string;
  };
};

export type MyStore = {
  screen: Screen;
  lang: Lang;
};

export type MappingScreens = { [key in ScreenName]: Screen };
