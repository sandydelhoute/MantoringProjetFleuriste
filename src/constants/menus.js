import React from "react"
import Home from "../pages/Home"
import Products from "../pages/Products";
import Contact from "../pages/Contact";
import Error404Page from '../pages/Error404Page';
import AboutUs from '../pages/AboutUs';
import ProductDetail from '../pages/ProductDetail';

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
        element : <Products />,
        exact : true,
        display : true,
    },
    {
        title : "ProduitDetail",
        path : "/ProduitDetail/:Id",
        element : <ProductDetail />,
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