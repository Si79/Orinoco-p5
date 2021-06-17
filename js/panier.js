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
          <button class="delete-product" data-index="${i}"> Supprimer </button>
        </td>
      </tr>`
  }



 let buttonSupprimer = document.createElement('button');
 buttonSupprimer.textContent = ("Supprimer");

 buttonSupprimer.addEventListener('click', function(event) {

 })

 //console.log("Supprimer");
  
  sectionPanier.appendChild(table);

  
}



/**
 * 1. Permettre la suppression des produits du panier*/

 /*  - Ajouter un évènment sur les boutons "Supprimer le produit"
 * 
 *  - Au click, supprimer les produits du localStorage et du HTML (supprimer la ligne du panier)
 * 
 * 2. Permettre la suppression de tous les produits
 */

document.body.appendChild(sectionPanier);

// Récupération de tous les boutons supprimer sous forme de tableau
let deleteProducts = document.querySelectorAll('.delete-product')

// On fait une boucle sur tous les boutons
deleteProducts.forEach(function(deleteProduct){
  //Sur chaque bouton, on ajoute un evenement au click
  deleteProduct.addEventListener('click', function(event){
    //Au click sur chaque bouton, on retire le produit du panier
    const newProducts = produitsAjoutPanier.filter(function(produit, index){
      return index != event.target.dataset['index'] 
    })
    // On écrase le panier du localStorage avec le nouveau
    localStorage.setItem('panier',JSON.stringify(newProducts))
    // On rafraichit la page pour que les changements soient pris en compte
    window.location.reload();
  })
})

let buttonDelete = document.createElement("button");
buttonDelete.textContent = 'Vide le panier'
document.body.appendChild(buttonDelete);
buttonDelete.addEventListener('click', function(){
  localStorage.removeItem('panier')
  window.location.reload();
})


let divTitreFormulaire = document.createElement('div');
divTitreFormulaire.id = "titreFormulaire";

//console.log('div');

let titreFormulaire = document.createElement('h2');
titreFormulaire.textContent = 'Enregistrez vos coordonnées';

//console.log('Enregistrez vos coordonnées')

let sectionFormulaire = document.createElement('section');

sectionFormulaire.id = "sectionFrormulaire";

//console.log("sectionFormulaire")

let divFormulaire = document.createElement('div');
divFormulaire.innerHTML = 
<form action="" method="get" class="form-example">
<div class="form-example">
  <label for="lastName">Nom : </label>
  <input type="text" name="lastName" id="lastName" class='infoRequired' required placeholder='LY...'></input>
</div>
<div class=" form-example">
  <label for="firstName">Prénom : </label>
  <input type="text" name="firstName" id="firstName" class='infoRequired' required placeholder='Siré...'></input>
  </div>
  <div class="form-example">
    <label for="Adresse">Adresse : </label>
    <input type="text" name="Adresse" id="Adresse" class='infoRequired' required placeholder='5 rue du 30e Régiment...'></input>
  </div>
  <div class="form-example">
  <label for="address">Ville : </label>
  <input type="text" name="ville" id="ville" classe='infoRequired' required placeholder='Orléans...'></input>
  </div>
  <div class="form-example">
    <label for="email">E-mail : </label>
    <input type="text" name="email" id="email" class='infoReaquired' required placeholder='leveilleur@yahoo.fr...'></input>
  </div>

</form>



//ajouter le total (somme de l'ens des produits du panier)
//Perspectives: supprimer un elt du panier
//let buttonDelete = document.createElement("bouton-supprimer");
//console.log("bouton-supprimer");
//formulaire en dessous du panier
