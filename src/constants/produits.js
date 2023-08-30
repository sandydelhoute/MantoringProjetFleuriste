const replaceStr = "[SEED]"
const imageUrl= "https://picsum.photos/seed/"+replaceStr+"/200"

const produits = [
    {
        id: 1,
        name: "Produit 1",
        description : 'Produit 1',
        prix : 30.33,
        imageUrl: imageUrl.replace(replaceStr, "Prodduit1"),
        cdate : ""
    },
    {
        id: 2,
        name: "Produit 2",
        description : 'Produit 2',
        prix : 30.33,
        imageUrl: imageUrl.replace(replaceStr, "Prodduit2"),
        cdate : ""
    },
    {
        id: 3,
        name: "Produit 3",
        description : 'Produit 3',
        prix : 30.33,
        imageUrl: imageUrl.replace(replaceStr, "Prodduit3"),
        cdate : ""
    }
]

export default produits