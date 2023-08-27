import home from "../pages/home";
import titreA from "../pages/titre1";
import titreB from "../pages/titre2";

export const menus = [
    {
        title : "home",
        path : "/",
        exact : true,
        component : home
    },
    {
        title : "titre1",
        path : "/titre1",
        exact : true,
        component : titreA
    },
    {
        title : "titre2",
        path : "/titre2",
        exact : true,
        component : titreB
    }
]