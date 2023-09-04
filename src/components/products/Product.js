import React from "react"
import { Link } from "react-router-dom"

const Product = ({product}) =>{
    return (
        <>
            <Link to={`/ProduitDetail/${product.id}`}><label>{product.name}</label></Link>
            <br/>
            <img src={product.imageUrl} alt={"Photo du "+ product.name}/>
            <hr/>
        </>
    )
}

export default Product