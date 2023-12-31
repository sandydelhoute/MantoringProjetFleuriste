import React, { useEffect, useState } from "react"
import { useParams } from "react-router"
import productService from "../services/product.service"
import Error404Page from "./Error404Page";
import ProductCard from "../components/products/ProductCard";

const Product = () =>{
    let params = useParams();
    const [product, setProduct] = useState()
    const [products, setProducts] = useState([])

    useEffect(() =>{
        setProduct(productService.getById(params.Id))
        product ?  setProducts(productService.getRandomProducts(3, product.id)) : null
    },[product,params, product, setProducts])

    return (
        product ? 
        <>
            <div className="m-2 parent">
                <div className="m-2 LeftDiv">
                    <img src={product.imageUrl} alt={"Photo du "+ product.name}/>
                </div>
                <div className="m-2 RightDiv">
                    <h2>{product.name}</h2>
                    <h4>{product.price}</h4>
                    <p>{product.description}</p>
                </div>
            </div>
            <div className="OthersProducts">
                <h4>D'autres choix son disponible sur ce site :</h4>
                <div className="m-2 d-flex" >
                    {products.map((product, index) => <ProductCard product={product} key={index} overitedWitdh={14}/> )}
                </div>
            </div>
        </> 
        :
        <Error404Page />
    )
}

export default Product