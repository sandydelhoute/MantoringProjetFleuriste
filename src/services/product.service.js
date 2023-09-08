import products from '../constants/products'
import shuffle from '../utils/arrayFunction'

const getAll = ()=>{
    return products;
}

const getById = (id) =>{
    return products.filter((product)=>{
        return product.id === parseInt(id)
    })[0]
}

const getRandomProducts = (numberMax, actualId) =>{
    const returnProduct = shuffle(products.filter(product => product.id != actualId))
    // limit size return 
    returnProduct.length = numberMax > products.length-1 ? products.length-1 : numberMax
    return  returnProduct ;
}

export default {getAll, getById, getRandomProducts};