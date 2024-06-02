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
    color: "var(--yellow-color)",
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
    color: "var(--yellow-color)",
    showHomeIcon: false,
    title: "",
    prev: {
      goToScreen: "scelta-croissant",
      label: "",
    },
    next: {
      goToScreen: "scelta-girella",
      label: "GIRELLA",
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
    prev: {
      goToScreen: "scelta-croissant",
      label: "",
    },
    next: {
      goToScreen: "scelta-crostata",
      label: "CROSTATA",
    },
  },
  "scelta-crostata": {
    screenName: "scelta-crostata",
    color: " --orange-color",
    showHomeIcon: false,
    title: "",
    prev: {
      goToScreen: "scelta-croissant",
      label: "",
    },
  },
};

export const RESET_TO_LANGUAGE_SELECTOR_TIME = 30 * 1000;

export const ITEMS_PIADA_AFFETTATI: AlternateListProps["list"] = [
  {
    label: "PROSCIUTTO CRUDO",
    urlImage: "/images/prosciutto_crudo.jpg",
  },
  {
    label: "SALAME",
    urlImage: "/images/salame.jpg",
  },
  {
    label: "PROSCIUTTO COTTO",
    urlImage: "/images/cotto.jpg",
  },
];

export const ITEMS_PIADA_VERDURE: AlternateListProps["list"] = [
  {
    label: "MISTICANZA",
    urlImage: "/images/misticanza.jpg",
  },
  {
    label: "RUCOLA",
    urlImage: "/images/rucola.webp",
  },
  {
    label: "POMODORINI",
    urlImage: "/images/pomodorini.jpg",
  },
  {
    label: "MELANZANE",
    urlImage: "/images/melanzane.jpg",
  },
  {
    label: "CIPOLLA ROSSA",
    urlImage: "/images/cipolla-rossa.webp",
  },
  {
    label: "CIPOLLA FRITTA",
    urlImage: "/images/cipolla-fritta.jpg",
  },
];

export const ITEMS_PIADA_FORMAGGI: AlternateListProps["list"] = [
  {
    label: "SQUACCHERONE",
    urlImage: "/images/squccherone.webp",
  },
  {
    label: "PECORINO",
    urlImage: "/images/pecorino.jpg",
  },
  {
    label: "STRACCIATELLA",
    urlImage: "/images/stracciatella.jpg",
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
    urlImage: "/images/cappelletti_stesi_2.jpg",
  },
  {
    label: "",
    urlImage: "/images/cappelletto_singolo.jpg",
  },
  {
    label: "",
    urlImage: "/images/cappelletti_stesi.jpg",
  },
];

export const ITEMS_CROSTATA: AlternateListProps["list"] = [
  {
    label: "",
    urlImage: "/images/crostata.jpg",
  },
  {
    label: "",
    urlImage: "/images/crostata_con_pezzi.jpg",
  },
];

export const ITEMS_GIRELLA: AlternateListProps["list"] = [
  {
    label: "",
    urlImage: "/images/girella.jpg",
  },
  {
    label: "",
  },
  {
    label: "",
  },
];

export const ITEMS_TOPPING: AlternateListProps["list"] = [
  {
    label: "CIOCCOLATO",
  },
  {
    label: "GRANELLA DI NOCCIOLA",
  },
  {
    label: "CIOCCOLATO BIANCO",
  },
  {
    label: "COCCO",
  },
  {
    label: "CREMA DI PISTACCHIO",
  },
  {
    label: "GRANELLA DI PISTACCHIO",
  },
];
