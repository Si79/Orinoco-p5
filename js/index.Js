const products = ["produit 1", "produit 2", "produit 3", "produit 4"];

const body = document.querySelector('body');
const ul = document.createElement('ol')


for(let i = 0; i < products.length; i++){
    const li = document.createElement('li')
    li.innerHTML = '<a href="produit.html">' + products[i] + '</a>';
    ul.appendChild(li)
}

body.appendChild(ul)



