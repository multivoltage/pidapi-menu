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
    next: {
      goToScreen: "scelta-piada",
      label: "piada_farcita",
    },
  },
  "scelta-piada": {
    screenName: "scelta-piada",
    color: "var(--red-color)",
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
    color: "var(--orange-color)",
    showHomeIcon: false,
    title: "",
    prev: {
      goToScreen: "home",
      label: "",
    },
  },
  "croissant-fritti": {
    screenName: "croissant-fritti",
    color: "var(--orange-light-color)",
    showHomeIcon: false,
    title: "",
    prev: {
      goToScreen: "home",
      label: "",
    },
    next: {
      goToScreen: "scelta-cappelletti",
      label: "cappelletti_fritti",
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
      goToScreen: "piada-affettati",
      label: "affettati",
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
      goToScreen: "piada-dolce",
      label: "piade_dolci",
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
      goToScreen: "piada-formaggi",
      label: "formaggi",
    },
  },
  "scelta-girella": {
    screenName: "scelta-girella",
    color: "var(--yellow-color)",
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
    color: "var(--orange-color)",
    showHomeIcon: false,
    title: "",
    prev: {
      goToScreen: "scelta-croissant",
      label: "",
    },
    next: {
      goToScreen: "croissant-fritti",
      label: "cappelletti_fritti",
    },
  },
};

export const RESET_TO_LANGUAGE_SELECTOR_TIME_MS = 20 * 1000;

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
    label: "nutella",
    urlImage: "/images/nutella.jpg",
  },
  {
    label: "cioccolato_bianco",
    urlImage: "/images/cioccolato_bianco.jpg",
  },
  {
    label: "crema_di_pistacchio",
    urlImage: "/images/crema_pistacchio.jpg",
  },
  {
    label: "cocco",
    urlImage: "/images/cocco.jpg",
  },
  {
    label: "granella_di_nocciola",
    urlImage: "/images/granella_nocciole.jpg",
  },
  {
    label: "granella_di_pistacchio",
    urlImage: "/images/granella_pistacchio.jpg",
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
    animationRotate: true,
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
    urlImage: "/images/cioccolato.jpg",
  },
  {
    label: "granella_di_nocciola",
    urlImage: "/images/granella_nocciole.jpg",
  },
  {
    label: "cioccolato_bianco",
    urlImage: "/images/cioccolato_bianco.jpg",
  },
  {
    label: "cocco",
    urlImage: "/images/cocco.jpg",
  },
  {
    label: "crema_di_pistacchio",
    urlImage: "/images/crema_pistacchio.jpg",
  },
  {
    label: "granella_di_pistacchio",
    urlImage: "/images/granella_pistacchio.jpg",
  },
];
