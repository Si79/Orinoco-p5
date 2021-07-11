//Recupérer les éléments du DOM
const name = document.querySelector('#name')
const orderId = document.querySelector('#orderid')
const total = document.querySelector('#total')

// Recupérer les informations de l'URL
const url = window.location.search;
var searchParams = new URLSearchParams(url);

name.textContent = searchParams.get('name')
orderId.textContent = searchParams.get('orderId')
total.textContent = parseInt(searchParams.get('total')) / 100

