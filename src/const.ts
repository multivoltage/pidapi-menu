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
      label: "verdure",
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
      label: "girella",
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
      label: "formaggi",
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
      label: "affettati",
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
      label: "dolci",
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
      label: "crostata",
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
    label: "prosciutto_crudo",
    urlImage: "/images/prosciutto_crudo.jpg",
  },
  {
    label: "salame",
    urlImage: "/images/salame.jpg",
  },
  {
    label: "prosciutto_cotto",
    urlImage: "/images/cotto.jpg",
  },
];

export const ITEMS_PIADA_VERDURE: AlternateListProps["list"] = [
  {
    label: "misticanza",
    urlImage: "/images/misticanza.jpg",
  },
  {
    label: "rucola",
    urlImage: "/images/rucola.webp",
  },
  {
    label: "pomodorini",
    urlImage: "/images/pomodorini.jpg",
  },
  {
    label: "melanzane",
    urlImage: "/images/melanzane.jpg",
  },
  {
    label: "cipolla_rossa",
    urlImage: "/images/cipolla-rossa.webp",
  },
  {
    label: "cipolla_fritta",
    urlImage: "/images/cipolla-fritta.jpg",
  },
];

export const ITEMS_PIADA_FORMAGGI: AlternateListProps["list"] = [
  {
    label: "squaccherone",
    urlImage: "/images/squccherone.webp",
  },
  {
    label: "pecorino",
    urlImage: "/images/pecorino.jpg",
  },
  {
    label: "stracciatella",
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
    objectFit: "contain",
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
    label: "cioccolato",
  },
  {
    label: "granella_di_nocciola",
  },
  {
    label: "cioccolato_bianco",
  },
  {
    label: "cocco",
  },
  {
    label: "crema_di_pistacchio",
  },
  {
    label: "granella_di_pistacchio",
  },
];
