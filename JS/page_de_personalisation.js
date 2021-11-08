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
    let prixp = base_de_donnees[produit_id].prix
    id_prix = document.getElementById("prix");
    console.log(image)
    id_prix.innerHTML = prixp + ' €';
    id_images_changeante.setAttribute("src",image); // on lui demande de changer la valeur associée a src par image
    list=Object.keys(base_de_donnees[produit_id].couleur); // on recupere une liste avec les couleur liée à notre produit
    for (let i=1; i < list.length; i++){ // on commence à 1 car on a deja créer un bouton pour le noir dans le html et dans notre base de donnée list[0] est la couleur noir et on va jusqu'a la taille de list
      var test=document.getElementById("noir") // on recupere la ligne ou on à on a l'idée noir c'est à dire la ligne du boutton dans le html
      test.insertAdjacentHTML('afterend','<button onclick="ChangeImage2(\''+list[i]+'\')" >'+list[i]+'</button>') // on ajoute derriere la ligne (commande afterend) ou on a récupérer l'id au dessus la ligne <button ....> les antislah en bleu permettre de lui faire comprendre que on veut que il affiche des guillemets et les + permettent de mettre la valeur list[i] et non les caractère list[i]
  }
});



function ChangeImage2(element){
    elementvalue = element
    let produit_id = new URLSearchParams(window.location.search).get("id");
    var images= base_de_donnees[produit_id].couleur[element]
    id_images = document.getElementById("image_personnalisation"); 
    id_images_changeante.setAttribute("src",images)
    let phrase = document.getElementById("couleur2");
    phrase.innerHTML = elementvalue;
}


const APIKEY= "pk.eyJ1IjoiZ2FlbGxlbGVyb3V4IiwiYSI6ImNrdmd1NHl0cTVzN3QzMXF3Z29yNmdlOTUifQ.uOKemiUOXlxp59va8Q6TUw";

function livraison() {
  var address = document.getElementById("adress").value; // recupere adresse de l'input
  fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=${APIKEY}`) // on transforme l'adresse en longitude et lattitude, le encode url permet de transformer tt ce qui va pas les espaces virgule et tt en quelque chose de lisible 
      .then(res => res.json())
      .then(data => {
          coord = data.features[0].center; // on recupere coordonne de l'adresse
          long=coord[0]; // longitude  de l'adresse
          lat=coord[1]; // lattitude de l'adresse
          fetch(`https://api.mapbox.com/directions/v5/mapbox/driving/${encodeURIComponent(long)}%2C${encodeURIComponent(lat)}%3B4.83490%2C45.75824?alternatives=true&geometries=geojson&steps=true&access_token=${APIKEY}`) // on recupere distance entre nos 2 points, %3B = ';' et %2C = ','
          .then(response => response.json() 
          .then(data=>{
              if (data.routes[0].distance >20000){
              let produit_id = new URLSearchParams(window.location.search).get("id");
              let prixp = base_de_donnees[produit_id].prix;
              let fdl = (5+0.07*data.routes[0].distance)/1000;
              fdl = Math.round((fdl)*100) / 100;
              document.querySelector('#prix').innerHTML=(prixp+fdl ) + '€' ;
              document.querySelector('#phrase').innerHTML=(fdl); 
              }
              else{
                  document.querySelector('#phrase').innerHTML="Prix de la livraison : 0 €"; 
                  console.log(base_de_donnees)     
              }
              }));
      })};


fetch("header.html").then(contenu => contenu.text()).then(texte => {document.getElementById("header").innerHTML = texte;})
fetch("footer.html").then(contenu => contenu.text()).then(texte => {document.getElementById("footer").innerHTML = texte;})


//panier

function addPanier(){
    let produit_id = new URLSearchParams(window.location.search).get("id");
    let prixp = base_de_donnees[produit_id].prix;
    console.log(prixp)
    nbprod = document.getElementById("quantite").value;
    console.log(nbprod)
    if (nbprod > 0) {
        valeurphrase = document.getElementById("couleur2").innerHTML;
        console.log(valeurphrase)
        localStorage.setItem(localStorage.length , [base_de_donnees[produit_id].titre, base_de_donnees[produit_id].prix, nbprod, valeurphrase]) 
    }
    else {
        alert("Veuillez entrer une quantité valide")
    }
}

function prixtotal() {
    prixtotaltest = 0
    valeurfdl = parseInt(document.getElementById("phrase").innerHTML)
    for (let i=0 ; i <localStorage.length ; i++) {
        arraytemp = localStorage.getItem(i).split(",");
        prixtemp = arraytemp[1]
        nbtemp = arraytemp[2]
        prixtotaltest = prixtotaltest + prixtemp*nbtemp;
    }
    let prixt = document.getElementById("prixtotal");
    prixt.innerHTML = prixtotaltest + valeurfdl;
}