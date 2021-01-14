const xhr = new XMLHttpRequest(); // Création d'un objet XMLHttpRequest
xhr.open('GET', 'https://oc-p5-api.herokuapp.com/api/teddies');
xhr.send();

xhr.onreadystatechange = function(){
    if(xhr.status === 200 && xhr.readyState === 4){ //On s'assure que la requete est terminée et que la réponse est disponible
        const products = JSON.parse(xhr.responseText) // On stock dans la variable products les produits récupérés de l'API
        console.log(products)

        // Récupération du noeud <body>
        const ul = document.querySelector('.lien_produit');

        // Boucle for qui permet d'itérer sur tous les éléments du tableau products
        // 1. let i = 0: On initialise un incrément de boucle (variable i initilisée à 0 car un tableau commence toujours à l'indice 0)
        // 2. i < products.length: On itère sur le tableau jusqu'à la fin (tant que i < 4)
        // 3. i++ : A chaque itération, on incrémente i de 1
        for(let i = 0; i < products.length; i++){
            // On crée une balise html de type <li> dans laquelle on va lui insérer une balise <a> avec le nom du produit
            const li = document.createElement('li')
            const price = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(products[i].price / 100)
            //On fait une concaténation pour y insérer une valeur dynamique (products[i])
            //li.innerHTML = '<a href="produit.html">' + products[i] + '</a>';
            li.innerHTML = `<a href="produit.html?product=${products[i]._id}" class="product-card">
                <img src="${products[i].imageUrl}">
                <div>${products[i].name}</div>
                <div>${price}</div>
            </a>`
            // On ajout notre balise <li> à la balise <ul> précédemment créee
            ul.appendChild(li)
        }
    }
}






