import { Asset, Screen } from "../../types";

export const HOME_SCREEN_ASSETS: Array<
  Asset & { goToScreen: Screen["screenName"] }
> = [
  {
    type: "img",
    url: "https://www.frescopiada.com/wp-content/uploads/2020/01/La-piada-del-chiosco-fronte.jpg",
    goToScreen: "scelta-piada",
  },
  {
    type: "img",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/02_Cappelletti_-_Cappellacci_-_Pasta_ripiena_-_Cucina_tipica_-_Ferrara.jpg/520px-02_Cappelletti_-_Cappellacci_-_Pasta_ripiena_-_Cucina_tipica_-_Ferrara.jpg",
    goToScreen: "scelta-cappelletti",
  },
  {
    type: "img",
    url: "https://blog.giallozafferano.it/ricettepanedolci/wp-content/uploads/2023/09/cornetti-brioche-al-forno-1-1536x1022.jpeg",
    goToScreen: "scelta-croissant",
  },
];
