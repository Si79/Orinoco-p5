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
/*let divTitleForm = document.createElement('div');
let divTitleForm = "divTitleForm";
let titleForm = document.createElement('h2');
titleForm.id ='placeOrder';
titleForm.textContent = "Faites vos achats...";
let sectionForm = document.createElement('section');
sectionForm.id ="sectionForm";
let divForm = document.createElement('div');
*/
let formContact = document.createElement("Formulaire");
formContact.textContent = 'formulaire de contact';
formContact.innerHTML =  `<form action='mon_formulaire' method='post' id='form1'>
<div class='monNom'>
<label for="monNom"> Nom : </label>
<input type="text" id="nom" class='infoRequired required placeholder='LY'>
</div>

<div class='monPrenom'>
<label for="prenom"> Prénom : </label>
<input type="text" id="prenom" class='infoRequired required placeholder='Siré'>
</div>

<div class='adresse'>
<label for="adresse"> Adresse : </label>
<input type="text" id="adresse" class='infoRequired required placeholder='Siré'>
</div>

<div class='ville'>
<label for="ville"> Orléans : </label>
<input type="text" id="ville" class='infoRequired required placeholder='Orléans'>
</div>

<div class='Code Postale'>
<label for="codePostale"> 45000 : </label>
<input type="text" id="adresse" class='infoRequired required placeholder='45000'>
</div>

<div class='email'>
<label for="email"> Email : </label>
<input type="text" id="email" class='infoRequired required placeholder='leveilleur79@gmail.com'>
</div>

<div class='button_valider'>
<input type="button" id='btn-submit' value="Validez votre commande !>
</div>
</form>`;



//ajouter le total (somme de l'ens des produits du panier)
//Perspectives: supprimer un elt du panier
//let buttonDelete = document.createElement("bouton-supprimer");
//console.log("bouton-supprimer");
//formulaire en dessous du panier
