let base_de_donnees = {};
fetch('/JS/base_de_donnees.json')
.then(function(response) {
    return response.json();
})   


.then(function(json) {
    base_de_donnees = json // on affecte la base de donne a la variable json
    var template=document.getElementById("produit"); // on lui indique sur quel template dans notre html on va travailler
    for (let i=0; i < localStorage.length; i++) {
        arraytemp = localStorage.getItem(i).split(",");
        let clone = document.importNode(template.content, true);  // copier coller du cours
        newContent = clone.firstElementChild.innerHTML // copier coller du cours
            .replace(/{{prix}}/g,base_de_donnees[arraytemp[0]].prix + "€") // on remplace idée du produit qui est ds html par son id, c'est pr le lien vers la page de personalisation
            .replace(/{{image}}/g,base_de_donnees[arraytemp[0]].couleur[arraytemp[4]]) // on affiche l'image
            .replace(/{{titre}}/g,base_de_donnees[arraytemp[0]].titre) // j'ai mis un titre à nos accesoire mais on pourra l'enlever ou mettre un commentaire ou le prix
            .replace(/{{quantite}}/g,"quantité : " + arraytemp[3])
        clone.firstElementChild.innerHTML = newContent // copier coller du cours
        document.body.appendChild(clone); // copier coller du cours
              
    }})
 
    
const APIKEY= "pk.eyJ1IjoiZ2FlbGxlbGVyb3V4IiwiYSI6ImNrdmd1NHl0cTVzN3QzMXF3Z29yNmdlOTUifQ.uOKemiUOXlxp59va8Q6TUw";

function livraison() {
  var address = localStorage.getItem("Adresse"); // recupere adresse de l'input
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
              let fdl = (5+0.07*data.routes[0].distance)/1000;
              fdl = Math.round((fdl)*100) / 100;
              document.querySelector('#phrase').innerHTML=(fdl); 
              }
              else{
                  fdl = 0
                  document.querySelector('#phrase').innerHTML="Prix de la livraison : 0 €"; 
                  console.log(base_de_donnees)     
              }
              }));
      })};

function prixtotal() {
    prixtotaltest = 0
    valeurfdl = parseInt(document.getElementById("phrase").innerHTML)
    for (let i=0 ; i <localStorage.length - 7; i++) {
        arraytemp = localStorage.getItem(i).split(",");
        prixtemp = arraytemp[2]
        nbtemp = arraytemp[3]
        prixtotaltest = prixtotaltest + prixtemp*nbtemp;
    }
    let prixt = document.getElementById("prixtotal");
    prixt.innerHTML = prixtotaltest + valeurfdl;
}

function store(){
        var inputFirstName = document.getElementById("firstname");
        var inputName = document.getElementById("name");
        var inputEmail = document.getElementById("mail");
        var inputPhone = document.getElementById("phone");
        var inputAdresse = document.getElementById("adress");
        var inputCodePostal = document.getElementById("codepostal");
        var inputDate = document.getElementById("date");

        localStorage.setItem("Prénom", inputFirstName.value);
        localStorage.setItem("Nom", inputName.value);
        localStorage.setItem("Email", inputEmail.value);
        localStorage.setItem("Numéro de télephone", inputPhone.value);
        localStorage.setItem("Adresse", inputAdresse.value);
        localStorage.setItem("Code Postal", inputCodePostal.value);
        localStorage.setItem("Date de livraison", inputDate.value);
        
}