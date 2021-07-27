function displayProducts(products){
    const ul = document.querySelector('.lien_produit');

    for (let i = 0; i < products.length; i++) {

        const li = document.createElement('li')
        const price = Utils.convertCentimesToEuros(products[i].price);


        li.innerHTML = `<a href="produit.html?product=${products[i]._id}" class="product-card">
        <img src="${products[i].imageUrl}">
        <div>${products[i].name}</div>
        <div>${price}</div>
        <div>${products[i].description}</div>
    </a>`

        ul.appendChild(li)
    }
}

fetch('https://oc-p5-api.herokuapp.com/api/teddies')
    .then(res => res.json())
    .then(products => {
        displayProducts(products)        
    })






