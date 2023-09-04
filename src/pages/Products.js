import React, { useEffect, useState } from "react"
import ProductCard from "../components/products/ProductCard"

import productService from "../services/product.service"

const Products = () => {

    const [products, setProducts] = useState([])
    useEffect(() =>{
        setProducts(productService.getAll())
    }, [products, setProducts])

    return(
        <>
            <h1>Produits</h1>
            <div className="container d-flex flex-wrap align-items-center" >
                {products.map((product, index) => <ProductCard product={product} key={index}/> )}
            </div>
        </>
    )
}

export default Products