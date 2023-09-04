import products from '../constants/products'

const getAll = ()=>{
    return products;
}

const getById = (id) =>{
    return products.filter((product)=>{
        return product.id === parseInt(id)
    })[0]
}

export default {getAll, getById};