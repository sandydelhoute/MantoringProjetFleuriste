import React, { useEffect, useState } from "react"
import Produit from "../components/Produit"

import produitService from "../services/produit.service"

const Produits = () => {

    const [produits, setProduits] = useState([])
    useEffect(() =>{
        setProduits(produitService.getAll())
    }, [produits, setProduits])

    return(
        <>
            <h1>Produits</h1>
            {produits.map((produit, index) => <Produit produit={produit} key={index}/> )}
        </>
    )
}

export default Produits