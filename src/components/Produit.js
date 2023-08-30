import React from "react"

const Produit = ({produit}) =>{
    return (
        <>
            <label>{produit.name}</label>
            <br/>
            <img src={produit.imageUrl} alt={"Photo du "+ produit.name}/>
            <hr/>
        </>
    )
}

export default Produit