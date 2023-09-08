import React from "react"
import { Link } from "react-router-dom"

import '../../styles/App.css'

const ProductCard = ({product, overitedWitdh}) =>{
    return (
        <Link className="m-2 card" to={`/Produit/${product.id}`} style={{width: `${overitedWitdh}rem`}}>
                <img className="card-img-top" src={product.imageUrl} alt={"Photo du "+ product.name} />
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.description}</p>
                </div>
        </Link>
    )
}

export default ProductCard