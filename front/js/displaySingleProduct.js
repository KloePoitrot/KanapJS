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


// Empeche d'aller au dessu de 100 ou en dessou de 1
let addToCart = document.querySelector('#addToCart')
addToCart.addEventListener('click', () => {
    let quantProd = document.querySelector('#quantity').value
    let colorProd = document.querySelector('#colors').value

    // Verifie la couleurs et la quantité
    if(quantProd > 100){
        alert("Vous avez dépassé la limite maximal d'item (100)")
    }
    if(quantProd <= 0){
        alert('Vous devez selectionner au minimun 1 item')
    }
    if(colorProd == ""){
        alert('Veuillez selectionner une couleur')
    }

    // La couleur et la quantité est ok
    if(quantProd > 0 && quantProd <= 100 && colorProd != ""){
        const color = document.querySelector('#colors')
        let valColor = color.options[color.selectedIndex].value

        // recupere les donnée a ajouter
        const queryURL = window.location.search
        const getID = new URLSearchParams(queryURL)
        const id = getID.get('id')
        const product = datas.find(prod => prod._id === id)
        

        // Vérifie si l'item existe deja dans le local host
        let getCart = localStorage.getItem('cart')

        // Si il existe
        if(getCart){
            // Recupere et cherche
            getCart = JSON.parse(localStorage.getItem('cart'))
            const addCart = getCart.find(el => el.id === product._id && el.couleur === valColor)

            // Si l'item existe deja
            if(addCart){
                addCart.quantite +=  parseInt(quantProd)

                if(addCart.quantite <= 100){
                    getCart.quantite = addCart.quantite
                    localStorage.setItem("cart", JSON.stringify(getCart))
                    alert('Votre item a été ajouté au panier!')
                }

                if(addCart.quantite > 100){
                    alert('Votre panier est plein!')
                    addCart.quantite = 100
                    getCart.quantite = addCart.quantite
                    localStorage.setItem("cart", JSON.stringify(getCart))
                }
            }

            // Si l'item n'existe pas dans la liste
            if(!addCart){
                getCart.push({
                    "id": product._id,
                    "couleur": valColor,
                    "quantite": parseInt(quantProd),
                })
                localStorage.setItem("cart", JSON.stringify(getCart))
                alert('Votre item a été ajouté au panier!')
            }
            
        }

        // Si il n'existe pas
        if(!getCart){
            const cart = [{
                "id": product._id,
                "couleur": valColor,
                "quantite": parseInt(quantProd),
            }]
            localStorage.setItem("cart", JSON.stringify(cart))
            alert('Votre item a été ajouté au panier!')
        }

    }
})