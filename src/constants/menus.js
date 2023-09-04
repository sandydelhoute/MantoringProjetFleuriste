import React from "react"
import Home from "../pages/Home"
import Produits from "../pages/Produits";
import Contact from "../pages/Contact";
import Error404Page from '../pages/Error404Page';
import AboutUs from '../pages/AboutUs';
import ProduitDetail from '../components/ProduitDetail';

const menus = [
    {
        title : "Home",
        path : "/",
        element : <Home />,
        exact : true,
        display : true,
    },
    {
        title : "Produits",
        path : "/Produits",
        element : <Produits />,
        exact : true,
        display : true,
    },
    {
        title : "ProduitDetail",
        path : "/ProduitDetail/:Id",
        element : <ProduitDetail />,
        exact : true,
        display : false,
    },
    {
        title : "Contact",
        path : "/Contact",
        element : <Contact />,
        exact : true,
        display : true,
    },
    {
        title : "AboutUs",
        path : "/AboutUs",
        element : <AboutUs />,
        exact : true,
        display : true,
    },
    {
        title : "page 404",
        path : "*",
        element : <Error404Page />,
        exact : false,
        display : false,
    }
]

export default menus