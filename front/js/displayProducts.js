let datas = {}

// Recuperation et affichage des produits
async function init(){
    datas = await displayProducts();
    let add = ''
    datas.forEach(product => {
        add += `
        <a href="./product.html?id=${product._id}">
            <article>
                <img src="${product.imageUrl}" alt="${product.altTxt}">
                <h3 class="productName">${product.name}</h3>
                <p class="productDescription">${product.description}</p>
            </article>
        </a>
        `
        document.querySelector('#items').innerHTML = add
        
    })
}

// Recuperation du fichier JSON
async function displayProducts(){
    const request = await fetch('http://localhost:3000/api/products')
    return await request.json()
}

init()