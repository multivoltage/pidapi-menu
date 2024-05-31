import { MappingScreens } from "./types";

export const MapScreens: MappingScreens = {
  "langage-screen": {
    screenName: "langage-screen",
    color: "white",
    showHomeIcon: true,
    title: "home",
  },
  home: {
    screenName: "home",
    color: "white",
    showHomeIcon: false,
    title: "home",
    prev: {
      goToScreen: "langage-screen",
      label: "",
    },
  },

  "scelta-cappelletti": {
    screenName: "scelta-cappelletti",
    color: "red",
    showHomeIcon: false,
    title: "",
    prev: {
      goToScreen: "home",
      label: "indietro",
    },
  },
  "scelta-piada": {
    screenName: "scelta-piada",
    color: "red",
    showHomeIcon: false,
    title: "",
    prev: {
      goToScreen: "home",
      label: "",
    },
  },
  "piada-affettati": {
    screenName: "piada-affettati",
    color: "red",
    showHomeIcon: false,
    title: "",
    prev: {
      goToScreen: "scelta-piada",
      label: "",
    },
    next: {
      goToScreen: "piada-verdure",
      label: "VERDURE",
    },
  },

  "scelta-croissant": {
    screenName: "scelta-cappelletti",
    color: "red",
    showHomeIcon: false,
    title: "",
    prev: {
      goToScreen: "home",
      label: "indietro",
    },
  },
  "croissant-fritti": {
    screenName: "scelta-cappelletti",
    color: "red",
    showHomeIcon: false,
    title: "",
    prev: {
      goToScreen: "home",
      label: "indietro",
    },
  },
  "piada-dolce": {
    screenName: "scelta-cappelletti",
    color: "red",
    showHomeIcon: false,
    title: "",
    prev: {
      goToScreen: "scelta-piada",
      label: "",
    },
  },
  "piada-formaggi": {
    screenName: "scelta-cappelletti",
    color: "red",
    showHomeIcon: false,
    title: "",
    prev: {
      goToScreen: "scelta-piada",
      label: "",
    },
  },
  "piada-verdure": {
    screenName: "scelta-cappelletti",
    color: "red",
    showHomeIcon: false,
    title: "",
    prev: {
      goToScreen: "scelta-piada",
      label: "",
    },
  },
  "scelta-girella": {
    screenName: "scelta-cappelletti",
    color: "red",
    showHomeIcon: false,
    title: "",
  },
};

export const RESET_TO_LANGUAGE_SELECTOR_TIME = 30 * 1000;
