let datas = []

// Recuperation des infos produits et de l'ID envoyé dans l'url
async function init(){
    const queryURL = window.location.search
    const getID = new URLSearchParams(queryURL)
    const id = getID.get('id')
    datas = await getProduct()
    displayProduct(datas, id)
}

// Recuperation du fichier JSON
async function getProduct(){
    const request = await fetch('http://localhost:3000/api/products')
    return await request.json()
}

init()


// Affichage du produit selectionner
async function displayProduct(datas, id){
    // Details
    const product = datas.find(prod => prod._id === id)
    document.title = `${product.name} - Kanap`
    document.querySelector('.item__img').innerHTML = `<img src="${product.imageUrl}" alt="Photographie d'un canapé">`
    document.querySelector('#title').innerHTML = product.name
    document.querySelector('#price').innerHTML = product.price
    document.querySelector('#description').innerHTML = product.description

    let addcolor = ``
    product.colors.forEach(el => {
        addcolor +=`<option value="${el}">${el}</option>`
    })
    document.querySelector('#colors').innerHTML += addcolor
}