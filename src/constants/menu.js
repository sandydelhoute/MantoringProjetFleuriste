import React from "react"
import Home from "../pages/home";
import TitreA from "../pages/titreA";
import TitreB from "../pages/titreB";
import  Error404Page from '../pages/Error404Page';


export const menus = [
    {
        title : "home",
        path : "/",
        exact : true,
        component : <Home />
    },
    {
        title : "titreA",
        path : "/titreA",
        exact : true,
        component : <TitreA />
    },
    {
        title : "titreB",
        path : "/titreB",
        exact : true,
        component : <TitreB />
    },
    {
        title : "page 404",
        path : "*",
        exact : false,
        component : <Error404Page />
    }
]