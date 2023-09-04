import produits from '../constants/produits'

const getAll = ()=>{
    return produits;
}

const getById = (id) =>{
    return produits.filter((produit)=>{
        return produit.id == id
    })[0]
}

export default {getAll, getById};