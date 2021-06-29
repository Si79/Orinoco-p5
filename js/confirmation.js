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

/* 



let confirmation = JSON.parse(localStorage.getItem('confirm'));
//console.log('confirm');

let contact = JSON.parse(localStorage.getItem('form'));
//console.log('contact')

let orderId = JSON.parse(localStorage.getItem('orderId'));
let main = document.querySelector('#Confirmation');
//console.log('Confirmation')
//RESUME DE LA COMMANDE//
let sectionConfirm = document.createElement('section');
//console.log('section')
pageTitle = document.createElement('h1');
pageTitle.textContent = "Confirmation de commande";
//console.log('Confirmation de commande');

//Creation section//
let divYourOrder = document.createElement("div");
divYourOrder.id = "divYourOrder";
//console.log('divYourOrder')
let yourOrder = document.createElement('h2');
yourOrder.textContent = "Votre commande";
//console.log('Votre commande')
yourOrder.id = 'yourOrder';
let orderIdText = document.createElement('ul');
//console.log('ul');
orderIdText.textContent = "Réference commmande :";

//console.log('Réference commmande');
for(let i in orderId){
    let newRef = document.createElement('li');
    newRef.textContent = `${orderId[i].param[i]} : ${orderId[i].id}`;
    orderIdText.appendChild(newRef);

let thanks = document.createElement('p');
thanks.innerHTML = "Merci de votre confiance";
*/