import { MappingScreens } from "./types";
import { Props as AlternateListProps } from "./components/AlternateList";

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
      label: "",
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
    color: "var(--orange-color)",
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
    screenName: "scelta-croissant",
    color: "red",
    showHomeIcon: false,
    title: "",
    prev: {
      goToScreen: "home",
      label: "",
    },
  },
  "croissant-fritti": {
    screenName: "croissant-fritti",
    color: "red",
    showHomeIcon: false,
    title: "",
    prev: {
      goToScreen: "home",
      label: "",
    },
  },
  "piada-dolce": {
    screenName: "piada-dolce",
    color: "var(--purple-color)",
    showHomeIcon: false,
    title: "",
    prev: {
      goToScreen: "scelta-piada",
      label: "",
    },
    next: {
      goToScreen: "piada-formaggi",
      label: "FORMAGGI",
    },
  },
  "piada-formaggi": {
    screenName: "piada-formaggi",
    color: "var(--blue-color)",
    showHomeIcon: false,
    title: "",
    prev: {
      goToScreen: "scelta-piada",
      label: "",
    },
    next: {
      goToScreen: "piada-affettati",
      label: "AFFETTATI",
    },
  },
  "piada-verdure": {
    screenName: "piada-verdure",
    color: "var(--green-color)",
    showHomeIcon: false,
    title: "",
    prev: {
      goToScreen: "scelta-piada",
      label: "",
    },
    next: {
      goToScreen: "piada-dolce",
      label: "DOLCI",
    },
  },
  "scelta-girella": {
    screenName: "scelta-girella",
    color: "red",
    showHomeIcon: false,
    title: "",
  },
};

export const RESET_TO_LANGUAGE_SELECTOR_TIME = 30 * 1000;

export const ITEMS_PIADA_AFFETTATI: AlternateListProps["list"] = [
  {
    label: "PROSCIUTTO CRUDO",
  },
  {
    label: "SALAME",
  },
  {
    label: "PROSCIUTTO COTTO",
  },
];

export const ITEMS_PIADA_VERDURE: AlternateListProps["list"] = [
  {
    label: "MISTICANZA",
  },
  {
    label: "RUCOLA",
  },
  {
    label: "POMODORINI",
  },
  {
    label: "MELANZANE",
  },
  {
    label: "CIPOLLA ROSSA",
  },
  {
    label: "CIPOLLA FRITTA",
  },
];

export const ITEMS_PIADA_FORMAGGI: AlternateListProps["list"] = [
  {
    label: "SQUACCHERONE",
  },
  {
    label: "PECORINO",
  },
  {
    label: "STRACCIATELLA",
  },
];

export const ITEMS_PIADA_DOLCE: AlternateListProps["list"] = [
  {
    label: "NUTELLA",
  },
  {
    label: "CIOCCOLATO BIANCO",
  },
  {
    label: "CREMA DI PISTACCHIO",
  },
  {
    label: "COCCO",
  },
  {
    label: "GRANELLA NOCCIOLE",
  },
  {
    label: "GRANELLA PISTACCIO",
  },
];

export const ITEMS_CAPPELLETTI: AlternateListProps["list"] = [
  {
    label: "",
  },
  {
    label: "",
  },
  {
    label: "",
  },
];
