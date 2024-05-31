import { MappingScreens } from "./types";

export const MapScreens: MappingScreens = {
  "langage-screen": {
    screenName: "langage-screen",
    color: "white",
    showHomeIcon: false,
    title: "home",
  },
  home: {
    screenName: "home",
    color: "white",
    showHomeIcon: false,
    title: "home",
  },

  "scelta-cappelletti": {
    screenName: "scelta-cappelletti",
    color: "red",
    showHomeIcon: true,
    title: "",
    prev: {
      goToScreen: "home",
      label: "indietro",
    },
  },
  "scelta-piada": {
    screenName: "scelta-piada",
    color: "red",
    showHomeIcon: true,
    title: "",
    prev: {
      goToScreen: "home",
      label: "indietro",
    },
  },
  "piada-affettati": {
    screenName: "piada-affettati",
    color: "red",
    showHomeIcon: true,
    title: "",
  },

  "scelta-croissant": {
    screenName: "scelta-cappelletti",
    color: "red",
    showHomeIcon: true,
    title: "",
    prev: {
      goToScreen: "home",
      label: "indietro",
    },
  },
  "croissant-fritti": {
    screenName: "scelta-cappelletti",
    color: "red",
    showHomeIcon: true,
    title: "",
    prev: {
      goToScreen: "home",
      label: "indietro",
    },
  },
  "piada-dolce": {
    screenName: "scelta-cappelletti",
    color: "red",
    showHomeIcon: true,
    title: "",
  },
  "piada-formaggi": {
    screenName: "scelta-cappelletti",
    color: "red",
    showHomeIcon: true,
    title: "",
  },
  "piada-verdure": {
    screenName: "scelta-cappelletti",
    color: "red",
    showHomeIcon: true,
    title: "",
  },
  "scelta-girella": {
    screenName: "scelta-cappelletti",
    color: "red",
    showHomeIcon: true,
    title: "",
  },
};

export const RESET_TO_LANGUAGE_SELECTOR_TIME = 30 * 1000;
