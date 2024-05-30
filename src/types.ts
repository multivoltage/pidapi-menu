type AssetType = "img" | "video";

export type Asset = {
  type: AssetType;
  url: string;
};

export type Lang = "it" | "en";

export type Screen = {
  screenName:
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
  showHomeIcon: boolean;
  title: string;
  color: string;
  prev?: Screen["screenName"];
  next?: Screen["screenName"];
};

export type MyStore = {
  screen: Screen;
  lang: Lang;
};
