function get(url){
    return new Promise((resolve) => {
        const xhr = new XMLHttpRequest(); // Création d'un objet XMLHttpRequest
        xhr.open('GET', url);
        xhr.send();
    
    
        xhr.onreadystatechange = function(){
            if(xhr.status === 200 && xhr.readyState === 4){ //On s'assure que la requete est terminée et que la réponse est disponible
                const response = JSON.parse(xhr.responseText) // On stock dans la variable products les produits récupérés de l'API
                resolve(response)
        
                }
            }
    })

}