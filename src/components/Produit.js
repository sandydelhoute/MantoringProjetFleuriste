import React from "react"
import { Link } from "react-router-dom"

const Produit = ({produit}) =>{
    return (
        <>
            <Link to={`/ProduitDetail/${produit.id}`}><label>{produit.name}</label></Link>
            <br/>
            <img src={produit.imageUrl} alt={"Photo du "+ produit.name}/>
            <hr/>
        </>
    )
}

export default Produit