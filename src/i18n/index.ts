import { useMyStore } from "../StoreProvider";
import { Lang } from "../types";

interface LabelsDictionary {
  it: {
    [key: string]: string;
  };
  en: {
    [key: string]: string;
  };
}
const dictionary: LabelsDictionary = {
  it: {
    header_senza_glutine: "TUTTO SENZA GLUTINE",
    piada_piccola: "PIADA PICCOLA: 1 GUSTO",
    piada_media: "PIADA MEDIA: 2 GUSTI",
    piada_grande: "PIADA GRANDE: 3 GUSTI",
    affettati: "AFFETTATI",
    verdure: "VERDURE",
    formaggi: "FORMAGGI",
    scelta_dolci: "SCELTA DOLCI",
    prosciutto_crudo: "PROSCIUTTO CRUDO",
    salame: "SALAME",
    prosciutto_cotto: "PROSCIUTTO COTTO",
    misticanza: "MISTICANZA",
    rucola: "RUCOLA",
    pomodorini: "POMODORINI",
    melanzane: "MELANZANE",
    cipolla_rossa: "CIPOLLA ROSSA",
    cipolla_fritta: "CIPOLLA FRITTA",
    squaccherone: "SQUACCHERONE",
    pecorino: "PECORINO",
    stracciatella: "STRACCIATELLA",
    crostata: "CROSTATA",
    cappelletti_fritti: "CAPPELLETTI FRITTI",
    girella: "GIRELLA",
    cioccolato: "CIOCCOLATO",
    granella_di_nocciola: "GRANELLA DI NOCCIOLA",
    cioccolato_bianco: "CIOCCOLATO BIANCO",
    cocco: "COCCO",
    crema_di_pistacchio: "CREMA DI PISTACCHIO",
    granella_di_pistacchio: "GRANELLA DI PISTACCHIO",
    croissant_fritti: "CROISSANT FRITTI",
    piada_dolce: "PIADA DOLCE",
    piada_farcita: "PIADA FARCITA",
    nutella: "NUTELLA",
    piade_dolci: "PIADE DOLCI",
  },
  en: {
    header_senza_glutine: "ALL GLUTEEN FREE",
    piada_piccola: "SMALL PIADA: 1 TASTE",
    piada_media: "MEDIUM PIADA: 2 TASTES",
    piada_grande: "BIG PIADS: 3 TASTES",
    affettati: "COLD CUTS",
    verdure: "VEGETABLE",
    formaggi: "CHEESES",
    scelta_dolci: "DESSERT",
    prosciutto_crudo: "CURED HAM",
    salame: "SALAMI",
    prosciutto_cotto: "HAM STEACK",
    misticanza: "MESCLUN",
    rucola: "ARUGULA",
    pomodorini: "SMALL TOMATOES",
    melanzane: "EGGPLANT",
    cipolla_rossa: "RED ONION",
    cipolla_fritta: "FRIED ONION",
    squaccherone: "SQUACCHERONE",
    pecorino: "PECORINO",
    stracciatella: "STRACCIATELLA",
    crostata: "CROSTATA",
    cappelletti_fritti: "FRIED CAPPELLETTI",
    girella: "GIRELLA",
    cioccolato: "CHOCOLATE",
    granella_di_nocciola: "RAPE' COCONUT FLAKES",
    cioccolato_bianco: "WHITE CHOCOLATE",
    cocco: "COCONUT",
    crema_di_pistacchio: "PISTACHIO CREAM",
    granella_di_pistacchio: "CHOPPED PISTACHIO",
    croissant_fritti: "FRIED CROISSANTS",
    piada_dolce: "SWEET PIADA",
    piada_farcita: "STUFFED PIADA",
    nutella: "NUTELLA",
    piade_dolci: "SWEET PIADINA",
  },
};

export function useTranslation() {
  const { myStore } = useMyStore();

  function t(key: string, locale?: Lang) {
    if (locale) {
      return dictionary[locale][key];
    } else {
      return dictionary[myStore().lang][key];
    }
  }

  return { t };
}
