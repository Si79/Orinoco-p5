// On récupère les paramètres de l'url
const url = window.location.search
var searchParams = new URLSearchParams(url);

// ON récupère les éléments HTML
const titre = document.querySelector('#title')
const description = document.querySelector('#description')
const image = document.querySelector('#image-produit')
const couleurs = document.querySelector('#couleurs')


//On appelle l'API pour récupérer les informations du produit
/*const xhr = new XMLHttpRequest(); // Création d'un objet XMLHttpRequest
xhr.open('GET', 'https://oc-p5-api.herokuapp.com/api/teddies/' + searchParams.get('product'));
xhr.send();

xhr.onreadystatechange = function(){
    if(xhr.status === 200 && xhr.readyState === 4){ //On s'assure que la requete est terminée et que la réponse est disponible
        const product = JSON.parse(xhr.responseText) // On stock dans la variable products les produits récupérés de l'API
        
        titre.innerHTML = product.name
        description.innerHTML = product.description
        image.setAttribute('src', product.imageUrl)

        for(let i = 0; i < product.colors.length; i++){
            const option = '<option value="' + product.colors[i] + '">' + product.colors[i] + '</option>'
            console.log(option)
            couleurs.innerHTML += option;
        }


        // Ajouter un évènement au click sur le bouton pour permettre l'ajout du produit dans le localStorage
    
    }

}*/
get('https://oc-p5-api.herokuapp.com/api/teddies/' + searchParams.get('product')).then(product => {
    titre.innerHTML = product.name
    description.innerHTML = product.description
    image.setAttribute('src', product.imageUrl)
    
    for(let i = 0; i < product.colors.length; i++){
        const option = '<option value="' + product.colors[i] + '">' + product.colors[i] + '</option>'
        //console.log(option)
        couleurs.innerHTML += option;
        let panierButtun = document.querySelector('#ajout-panier');

    panierButtun.addEventListener('click', function(event){
        
    
    let panier =JSON.parse(localStorage.getItem('panier'));
    console.log(panier)


    //const selectColor = document.querySelector('#couleurs')
    //product.color = selectColor.value
    //const selectorPrice = document.querySelector('#price')
    //product.price = selectorPrice.value


    if (panier === null) {
        let panier = [];

        panier.push(product);
        localStorage.setItem('panier', JSON.stringify(panier))
        //console.log(localStorage);
    } else {
        panier.push(product);
        localStorage.setItem('panier', JSON.stringify(panier))
    }
    })
    }
})