// On récupère les paramètres de l'url
const url = window.location.search
var searchParams = new URLSearchParams(url);

const titre = document.querySelector('h1')
const image = document.querySelector('img')

const xhr = new XMLHttpRequest(); // Création d'un objet XMLHttpRequest
xhr.open('GET', 'https://oc-p5-api.herokuapp.com/api/teddies/' + searchParams.get('product'));
xhr.send();

xhr.onreadystatechange = function(){
    if(xhr.status === 200 && xhr.readyState === 4){ //On s'assure que la requete est terminée et que la réponse est disponible
        const product = JSON.parse(xhr.responseText) // On stock dans la variable products les produits récupérés de l'API
        
        titre.innerHTML = product.name
        image.setAttribute('src', product.imageUrl)
    
    }

}
