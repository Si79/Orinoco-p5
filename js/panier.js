let produitsAjoutPanier = JSON.parse(localStorage.getItem("panier"));

let titrePanier = document.createElement('h1');
titrePanier.textContent = "Panier";

document.getElementById('Panier').appendChild(titrePanier);

let sectionPanier = document.createElement("section");
 
if (produitsAjoutPanier !== null) {
  sectionPanier.id = "sectionProduits";

  let sectionTitre = document.createElement('h2');

  sectionTitre.textContent = "Produit ajouté";

  sectionTitre.id = "sectionTitre";
  
//console.log(sectionTitle)
  
      
  sectionPanier.appendChild(sectionTitre);
for (let i in produitsAjoutPanier){
  
let produitsPanier =document.createElement('article');
produitsPanier.class.Name = ' selectionne';

let idProduitPanier = document.createElement('a');

console.log('a')

}
      //prix, couleur
  }
 
  

document.body.appendChild(sectionPanier);
//ajouter le total (somme de l'ens des produits du panier)

//Perspectives: supprimer un elt du panier

//formulaire en dessous du panier