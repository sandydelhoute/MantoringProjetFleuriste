import React, { useEffect, useState } from "react"
import { useParams } from "react-router"
import produitService from "../services/produit.service"
import Error404Page from "../pages/Error404Page";

const ProduitDetail = () =>{
    let params = useParams();
    const [produit, setProduit] = useState()
    useEffect(() =>{
        if(!produit){
            setProduit(produitService.getById(params.Id))
        }
    },[produit,params])

    return (
        produit ? 
        <>
            <label>{produit.name}</label>
            <br/>
            <img src={produit.imageUrl} alt={"Photo du "+ produit.name}/>
            <hr/>
        </> 
        :
        <Error404Page />
    )
}

export default ProduitDetail