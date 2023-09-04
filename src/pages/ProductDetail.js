import React, { useEffect, useState } from "react"
import { useParams } from "react-router"
import productService from "../services/product.service"
import Error404Page from "./Error404Page";

const ProductDetail = () =>{
    let params = useParams();
    const [product, setProduct] = useState()
    useEffect(() =>{
        if(!product){
            setProduct(productService.getById(params.Id))
        }
    },[product,params])

    return (
        product ? 
        <>
            <label>{product.name}</label>
            <br/>
            <img src={product.imageUrl} alt={"Photo du "+ product.name}/>
            <hr/>
        </> 
        :
        <Error404Page />
    )
}

export default ProductDetail