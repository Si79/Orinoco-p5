let produitsAjoutPanier = JSON.parse(localStorage.getItem("panier"));

let sectionPanier = document.createElement("section");

if (produitsAjoutPanier !== null) {
  sectionPanier.id = "sectionWithProduits";

  let table = document.createElement("table");
  for (let i in produitsAjoutPanier) {
    table.innerHTML +=
      "<tr><td>" +
      "</td><td><img src=" +
      produitsAjoutPanier[i].imageUrl +
      " width=100px>" +
      produitsAjoutPanier[i].name +
      produitsAjoutPanier[i].colors +
      produitsAjoutPanier[i].price +
      "</td></tr>";
      
      

      //prix, couleur
  }
  sectionPanier.appendChild(table);
}
document.body.appendChild(sectionPanier);
//ajouter le total (somme de l'ens des produits du panier)

//Perspectives: supprimer un elt du panier
//formulaire en dessous du panier