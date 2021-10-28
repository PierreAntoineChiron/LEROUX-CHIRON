let base_de_donnees = {};
fetch('/JS/base_de_donnees.json')
.then(function(response) {
    return response.json();
})
.then(function(json) {
    base_de_donnees = json
    let produit_id = new URLSearchParams(window.location.search).get("id"); // pour savoir que quel images on a cliqué, chaque images est définit par un nombre
    id_images_changeante = document.getElementById("image_personnalisation"); // pont entre le js et le html, il contient tt la ligne ou il y a "images personalisation"
    console.log(base_de_donnees); // sert a vérifier si il trouve bien la base de donnees (visible ds l'onglet console de la page)
    let image = base_de_donnees[produit_id].couleur.noir; // on stocke le lien de l'image (c'est l'image noir) dans la variable image
    console.log(image)
    id_images_changeante.setAttribute("src",image); // on lui demande de changer la valeur associée a src par image
    list=Object.keys(base_de_donnees[produit_id].couleur); // on recupere une liste avec les couleur liée à notre produit
    for (let i=1; i < list.length; i++){ // on commence à 1 car on a deja créer un bouton pour le noir dans le html et dans notre base de donnée list[0] est la couleur noir et on va jusqu'a la taille de list
      var test=document.getElementById("noir") // on recupere la ligne ou on à on a l'idée noir c'est à dire la ligne du boutton dans le html
      test.insertAdjacentHTML('afterend','<button onclick="ChangeImage2(\''+list[i]+'\')" >'+list[i]+'</button>') // on ajoute derriere la ligne (commande afterend) ou on a récupérer l'id au dessus la ligne <button ....> les antislah en bleu permettre de lui faire comprendre que on veut que il affiche des guillemets et les + permettent de mettre la valeur list[i] et non les caractère list[i]
  }
});



function ChangeImage2(element){
  let produit_id = new URLSearchParams(window.location.search).get("id");
  let images= base_de_donnees[produit_id].couleur[element]
  console.log(base_de_donnees[produit_id].couleur)
  id_images = document.getElementById("image_personnalisation"); 
  id_images_changeante.setAttribute("src",images)

}



fetch("header.html").then(contenu => contenu.text()).then(texte => {document.getElementById("header").innerHTML = texte;})
fetch("footer.html").then(contenu => contenu.text()).then(texte => {document.getElementById("footer").innerHTML = texte;})


// Première façon de faire affichageImages sans le JSON en utilisant un dictionnaire
// let id_to_path = {1:"../images/tapis_de_souris_sans_fond/Tapis_de_souris_noir_sans_fond.png" , 2:"../images/souris/Souris_noir.png", 3:"../images/clavier/Clavier_noir.png", 4:"../images/ecran/ecran.png", 5:"../images/chaises/Chaise_noir.png", 6: "../images/bureaux/Bureaux_noir.png"} // dictionnaire avec tous les liens vers les images
//function affichageImages(){
  //  let produit_id = new URLSearchParams(window.location.search).get("id") // pour savoir que quel images on a cliqué, chaque images est définit par un nombre
    //id_images_changeante = document.getElementById("image_personnalisation") // pont entre le js et le html, il contient tt la ligne ou il y a "images personalisation"
   // id_images_changeante.setAttribute("src",id_to_path[produit_id]) // on lui demande de changer la valeur associée a src par l'élément du dictionnaire numéro "produit_id"
//})


