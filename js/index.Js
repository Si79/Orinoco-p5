// Création d'une variable products de type tableau. Tableau de chaines de caractère
const products = ["produit 1", "produit 2", "produit 3", "produit 4"];

// Récupération du noeud <body>
const body = document.querySelector('body');
// Création d'une balise <ul>
const ul = document.createElement('ul');

// Boucle for qui permet d'itérer sur tous les éléments du tableau products
// 1. let i = 0: On initialise un incrément de boucle (variable i initilisée à 0 car un tableau commence toujours à l'indice 0)
// 2. i < products.length: On itère sur le tableau jusqu'à la fin (tant que i < 4)
// 3. i++ : A chaque itération, on incrémente i de 1
for(let i = 0; i < products.length; i++){
    // On crée un balise html de type <li> dans laquelle on va lui insérer une balise <a> avec le nom du produit
    const li = document.createElement('li')
    //On fait une concaténation pour y insérer une valeur dynamique (products[i])
    //li.innerHTML = '<a href="produit.html">' + products[i] + '</a>';
    li.innerHTML = `<a href="produit.html?product=${products[i]}">${products[i]}</a>`
    // On ajout notre balise <li> à la balise <ul> précédemment créee
    ul.appendChild(li)
}

//On ajoute l'intégralité du ul au body du html
body.appendChild(ul)



