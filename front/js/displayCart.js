let datas = []

// Recuperation des produits dans l'api
async function displayProducts(){
    datas = await getProduct();
    displayCart()
}
// Recuperation du fichier JSON
async function getProduct(){
    const request = await fetch('http://localhost:3000/api/products')
    return await request.json()
}
displayProducts()

// Recupération du localstorage
async function displayCart(){
    const cart = JSON.parse(localStorage.getItem('cart'))
    let addInfo = ``
    let api = ``
    let finalPrice = 0
    let finalQuant = 0
    
    // affiche si il y a au moin 1 item
    if(cart !== null){
        cart.forEach(product => {
            api = datas.find(el => el._id == product.id)
            addInfo += `
                <article class="cart__item" data-id="${product.id}" data-color="${product.couleur}">
                    <div class="cart__item__img">
                        <img src="${api.imageUrl}" alt="${api.altTxt}">
                    </div>
                    <div class="cart__item__content">
                        <div class="cart__item__content__description">
                        <h2>${api.name}</h2>
                        <p>${product.couleur}</p>
                        <p>${api.price}</p>
                        </div>
                        <div class="cart__item__content__settings">
                        <div class="cart__item__content__settings__quantity">
                            <p>Qté : </p>
                            <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${product.quantite}">
                        </div>
                        <div class="cart__item__content__settings__delete">
                            <p class="deleteItem">Supprimer</p>
                        </div>
                        </div>
                    </div>
                </article>
            `
            finalPrice += parseInt(product.quantite) * api.price
            finalQuant += parseInt(product.quantite)
    
            console.log(finalPrice, finalQuant)
        });
    }

    // Affiche si il n'y a aucun item
    if(cart == null){
        addInfo = '<h2>Votre panier est vide</h2>'
    }

    // Modification du DOM
    document.querySelector('#cart__items').innerHTML = addInfo
    document.querySelector('#totalQuantity').innerHTML = finalQuant
    document.querySelector('#totalPrice').innerHTML = finalPrice
}