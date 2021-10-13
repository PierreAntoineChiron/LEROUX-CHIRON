let id_to_path = {1:"../images/tapis_de_souris_sans_fond/Tapis_de_souris_noir_sans_fond.png" , 2:"../images/souris/Souris_noir.png", 3:"../images/clavier/Clavier_noir.png", 4:"../images/ecran/ecran.png", 5:"../images/chaises/Chaise_noir.png", 6: "../images/bureaux/Bureaux_noir.png"} // dictionnaire avec tous les liens vers les images

function images(){
    let produit_id = new URLSearchParams(window.location.search).get("id") // pour savoir que quel images on a cliqué, chaque images est définit par un nombre
    id_images_changeante = document.getElementById("image_personnalisation") // pont entre le js et le html, il contient tt la ligne ou il y a "images personalisation"
    id_images_changeante.setAttribute("src",id_to_path[produit_id]) // on lui demande de changer la valeur associée a src par l'élément du dictionnaire numéro "produit_id"
}


// let produit_id = new URLSearchParams(window.location.search).get("id") // pour savoir que quel images on a cliqué, chaque images est définit par un nombre
// id_images_changeante = document.getElementById("image_personnalisation") // pont entre le js et le html, il contient tt la ligne ou il y a "images personalisation"
// id_images_changeante.setAttribute("src","../images/tapis_de_souris_sans_fond/Tapis_de_souris_noir_sans_fond.png") // on lui demande de changer la valeur associée a src par l'élément du dictionnaire numéro "produit_id"
