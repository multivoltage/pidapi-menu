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
    header_fatto_a_mano: "TUTTO FATTO A MANO",
    piada_piccola: "1 GUSTO - 5€",
    piada_media: "2 GUSTI - 6€",
    piada_grande: "3 GUSTI - 7€",
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
    cipolla_rossa: "CIPOLLA",
    cipolla_fritta: "CIPOLLA FRITTA",
    squaccherone: "SQUACQUERONE",
    pecorino: "PECORINO",
    stracciatella: "STRACCIATELLA",
    crostata: "CROSTATA",
    cappelletti_fritti: "CAPPELLETTI FRITTI",
    cappelletti_fritti_page_title: "CAPPELLETTI FRITTI - 6€",
    girella: "GIRELLA",
    cioccolato: "CIOCCOLATO",
    granella_di_nocciola: "GRANELLA DI NOCCIOLA",
    cioccolato_bianco: "CIOCCOLATO BIANCO",
    cocco: "GRANELLA DI COCCO",
    crema_di_pistacchio: "CREMA DI PISTACCHIO",
    granella_di_pistacchio: "GRANELLA DI PISTACCHIO",
    croissant_fritti: "CROISSANT FRITTI",
    croissant_fritti_page_title: "CROISSANT FRITTI - 5€",
    piada_dolce: "PIADA DOLCE",
    piada_farcita: "MINI PIADA",
    nutella: "NUTELLA",
    piade_dolci: "PIADE DOLCI",
    marmellata_pere: "MARMELLATA DI PERE",
    vedi_info: "vedi info",
    vedi_preview: "vedi video",
    our_products: "I nostri prodotti sono fatti da:",
  },
  en: {
    header_senza_glutine: "ALL GLUTEN FREE",
    header_fatto_a_mano: "ALL HANDMADE",
    piada_piccola: "1 TASTE - 5€",
    piada_media: "2 TASTES - 5€",
    piada_grande: "3 TASTES - 5€",
    affettati: "COLD CUTS",
    verdure: "VEGETABLES",
    formaggi: "CHEESES",
    scelta_dolci: "DESSERT",
    prosciutto_crudo: "CURED HAM",
    salame: "SALAMI",
    prosciutto_cotto: "HAM STEAK",
    misticanza: "MIXED SALAD",
    rucola: "ARUGULA",
    pomodorini: "SMALL TOMATOES",
    melanzane: "EGGPLANT",
    cipolla_rossa: "ONION",
    cipolla_fritta: "FRIED ONION",
    squaccherone: "SQUACQUERONE",
    pecorino: "PECORINO",
    stracciatella: "STRACCIATELLA",
    crostata: "CROSTATA",
    cappelletti_fritti: "FRIED CAPPELLETTI",
    cappelletti_fritti_page_title: "FRIED CAPPELLETTI - 6€",
    girella: "GIRELLA",
    cioccolato: "MILK CHOCOLATE",
    granella_di_nocciola: "GRAIN HAZELNUTS",
    cioccolato_bianco: "WHITE CHOCOLATE",
    cocco: "COCONUT FLAKE",
    crema_di_pistacchio: "PISTACHIO CREAM",
    granella_di_pistacchio: "GRAIN HAZELNUTS",
    croissant_fritti: "FRIED CROISSANTS",
    croissant_fritti_page_title: "FRIED CROISSANTS - 5€",
    piada_dolce: "SWEET PIADA",
    piada_farcita: "MINI PIADA",
    nutella: "NUTELLA",
    piade_dolci: "SWEET PIADINA",
    marmellata_pere: "PEAR JAM",
    vedi_info: "view info",
    vedi_preview: "view video",
    our_products: "Our products come from:",
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
