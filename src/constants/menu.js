import React from "react"
import Home from "../pages/home";
import TitreA from "../pages/titreA";
import Contact from "../pages/Contact";
import Error404Page from '../pages/Error404Page';


export const menus = [
    {
        title : "home",
        path : "/",
        exact : true,
        element : <Home />,
        componentBis : Home
    },
    {
        title : "titreA",
        path : "/titreA",
        exact : true,
        element : <TitreA />,
        componentBis : TitreA
    },
    {
        title : "Contact",
        path : "/Contact",
        exact : true,
        element : <Contact />,
        componentBis : Contact
    },
    {
        title : "page 404",
        path : "*",
        exact : false,
        element : <Error404Page />,
        componentBis : Error404Page
    }
]