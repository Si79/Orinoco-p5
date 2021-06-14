let produitsAjoutPanier = JSON.parse(localStorage.getItem("panier"));

let sectionPanier = document.createElement("section");

if (produitsAjoutPanier !== null) {
  sectionPanier.id = "sectionWithProduits";

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
          <button>Supprimer le produit</button>
        </td>
      </tr>`
  }

  
  sectionPanier.appendChild(table);
}



/**
 * 1. Permettre la suppression des produits du panier
 *  - Ajouter un évènment sur les boutons "Supprimer le produit"
 * 
 *  - Au click, supprimer les produits du localStorage et du HTML (supprimer la ligne du panier)
 * 
 * 2. Permettre la suppression de tous les produits
 */

document.body.appendChild(sectionPanier);
//ajouter le total (somme de l'ens des produits du panier)
//Perspectives: supprimer un elt du panier
//let buttonDelete = document.createElement("bouton-supprimer");
//console.log("bouton-supprimer");
const btn_tous_supprimer_panier_html = `
<button class="btn-tous-supprimer-panier> vider le panier </button>
`; 
//formulaire en dessous du panier
