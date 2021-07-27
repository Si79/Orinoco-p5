function get(url) {
    //Promesse => Succès = fonction resolve / Echec = fonction reject
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest(); // Création d'un objet XMLHttpRequest
        xhr.open('GET', url);
        xhr.send();
        
        xhr.onreadystatechange = function () {
            if(xhr.readyState === 4){
                if (xhr.status === 200){
                    const response = JSON.parse(xhr.responseText) // On stock dans la variable products les produits récupérés de l'API
                    resolve(response)
                } else {
                    reject()
                }
            }
           
        }
    })
}