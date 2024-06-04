import { Asset, Screen } from "../../types";

export const HOME_SCREEN_ASSETS: Array<
  Asset & { goToScreen: Screen["screenName"] }
> = [
  {
    type: "img",
    url: "/images/piada_1.jpg",
    goToScreen: "scelta-piada",
  },
  {
    type: "img",
    url: "/images/cappelletti_coppia.jpg",
    goToScreen: "scelta-cappelletti",
  },
  {
    type: "img",
    url: "/images/brioche_solo_velo.jpg",
    goToScreen: "croissant-fritti",
  },
];
