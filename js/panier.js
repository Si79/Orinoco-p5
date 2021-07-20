let produitsAjoutPanier = JSON.parse(localStorage.getItem("panier")) || [];
let sectionPanier = document.querySelector("#panier");

let form = document.querySelector('#Formulaire')

function getTotalCart() {
  let sum = 0;
  for (let i = 0; i < produitsAjoutPanier.length; i++) {
    sum += produitsAjoutPanier[i].price
  }

  return sum;

}

function displayCart(){
   
  if (produitsAjoutPanier.length > 0) {

    let table = document.createElement("table");
    for (let i in produitsAjoutPanier) {
      table.innerHTML +=
        `<tr>
          <td>
          <img src="${produitsAjoutPanier[i].imageUrl}" width="100px" />
          </td>
          <td>${produitsAjoutPanier[i].name}</td>
          <td>${produitsAjoutPanier[i].color}</td>
          <td>${produitsAjoutPanier[i].price / 100}€</td>
          <td>
            <button class="delete-product" data-index="${i}"> Supprimer </button>
          </td>
        </tr>`
    }

    sectionPanier.appendChild(table);

    // Récupération de tous les boutons supprimer sous forme de tableau
    let deleteProducts = document.querySelectorAll('.delete-product')

    // On fait une boucle sur tous les boutons
    deleteProducts.forEach(function (deleteProduct) {
      //Sur chaque bouton, on ajoute un evenement au click
      deleteProduct.addEventListener('click', function () {
          deleteProductAction()
      })
    })

    let buttonDelete = document.createElement("button");
    buttonDelete.textContent = 'Vider le panier'
    sectionPanier.appendChild(buttonDelete);
    buttonDelete.addEventListener('click', function () {
        deleteAllProducts()
    });

    form.style.display = 'block';

  } else {
    sectionPanier.innerHTML = "<h2>Panier vide !!!</h2>"
  }
}

function deleteProductAction(){
  alert('Etes-vous sûr(e) ?');
  //Au click sur chaque bouton, on retire le produit du panier
  const newProducts = produitsAjoutPanier.filter(function (produit, index) {
    return index != event.target.dataset['index']
  })
  // On écrase le panier du localStorage avec le nouveau
  localStorage.setItem('panier', JSON.stringify(newProducts))
  // On rafraichit la page pour que les changements soient pris en compte
  window.location.reload();
}

function deleteAllProducts(){
  alert('Voulez-vous vider votre panier ?')
  localStorage.removeItem('panier')
  window.location.reload();
}

form.addEventListener('submit', function (event) {
  event.preventDefault()

  const data = {
    contact: {
      firstName: event.target.first_name.value,
      lastName: event.target.last_name.value,
      address: event.target.address.value,
      city: event.target.city.value,
      email: event.target.email.value
    },
    products: produitsAjoutPanier.map((produit) => produit._id) // Transformer le tableau de produits en un tableau d'id
  }

  fetch('https://oc-p5-api.herokuapp.com/api/teddies/order', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(res => res.json())
    .then(res => {
      const name = data.contact.firstName + ' ' + data.contact.lastName
      const total = getTotalCart();
      localStorage.setItem('panier', JSON.stringify([]));
      window.location.href = 'confirmation.html?orderId=' + res.orderId + '&name=' + name + '&total=' + total
    })

})

displayCart()

