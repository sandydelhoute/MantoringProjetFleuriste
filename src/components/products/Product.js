import React from "react"
import { Link } from "react-router-dom"

import '../../styles/App.css'

const Product = ({product}) =>{
    return (
        <Link to={`/ProduitDetail/${product.id}`}>
            <div className="m-2 card" style={{width: "18rem"}}>
                <img className="card-img-top" src={product.imageUrl} alt={"Photo du "+ product.name} />
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.description}</p>
                </div>
            </div>
        </Link>
    )
}

export default Product