// On récupère les paramètres de l'url
const url = window.location.search
var searchParams = new URLSearchParams(url);

const h1 = document.querySelector('h1')
h1.innerHTML = searchParams.get('product')