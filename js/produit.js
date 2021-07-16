// On récupère les paramètres de l'url
const url = window.location.search;
var searchParams = new URLSearchParams(url);

function displayProduct(product) {
  // ON récupère les éléments HTML
  const titre = document.querySelector("#title");
  const description = document.querySelector("#description");
  const image = document.querySelector("#image-produit");
  const couleurs = document.querySelector("#couleurs");

  titre.innerHTML = product.name;
  description.innerHTML = product.description;
  image.setAttribute("src", product.imageUrl);

  for (let i = 0; i < product.colors.length; i++) {
    const option =
      '<option value="' +
      product.colors[i] +
      '">' +
      product.colors[i] +
      "</option>";

    couleurs.innerHTML += option;
  }
}

function addProductToCart(product) {
  let panier = JSON.parse(localStorage.getItem("panier"));
  let color = document.querySelector('#couleurs').value

  product.color = color;
  if (panier === null) {
    let panier = [];

    panier.push(product);
    localStorage.setItem("panier", JSON.stringify(panier));
  } else {
    panier.push(product);
    localStorage.setItem("panier", JSON.stringify(panier));
  }
  alert('Voulez-vous ajouter ce produit au panier ?');
}

get(
  "https://oc-p5-api.herokuapp.com/api/teddies/" + searchParams.get("product")
).then((product) => {


  displayProduct(product)

  let panierButtun = document.querySelector("#ajout-panier");

  panierButtun.addEventListener("click", function () {
    addProductToCart(product);

  });
});
