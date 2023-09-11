import productService from "./product.service"

describe('Test product service', () => {
    it('Test getAll', () => {
        const getAll = productService.getAll();
        expect(getAll.length).toEqual(3)
    })

    it('Test getById', () => {
        const getById = productService.getById(1);
        expect(getById).not.toBeNull();
        expect(getById.name).toEqual('Produit 1')
        expect(getById.description).toEqual('Produit 1 ...')
        expect(getById.price).toEqual(30.33)
        expect(getById.id).toEqual(1)
    })
})