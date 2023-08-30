import React from "react"
import Produit from "../components/Produit"

import produits from '../constants/produits'

const Produits = () => {
    return(
        <>
            <h1>Produits</h1>
            {produits.map((produit, index) => <Produit produit={produit} key={index}/> )}
        </>
    )
}

export default Produits