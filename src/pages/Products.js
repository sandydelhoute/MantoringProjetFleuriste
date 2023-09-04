import React, { useEffect, useState } from "react"
import Product from "../components/products/Product"

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
                {products.map((product, index) => <Product product={product} key={index}/> )}
            </div>
        </>
    )
}

export default Products