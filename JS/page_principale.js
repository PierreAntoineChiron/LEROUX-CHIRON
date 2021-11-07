fetch("header.html").then(contenu => contenu.text()).then(texte => {document.getElementById("header").innerHTML = texte;})
fetch("footer.html").then(contenu => contenu.text()).then(texte => {document.getElementById("footer").innerHTML = texte;})
fetch("bouton.html").then()

var mybutton = document.getElementById("button");

window.onscroll = function() {scrollFunction()};

function scrollFunction() { //permet d'afficher le bouton ssi la page on scroll plus de 20 pixel vers le bas de la page//
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }

function topFunction() { //Fait remoneter tout en haut de la page//
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

let base_de_donnees = {}; // creation de la variable base de donne
fetch('/JS/base_de_donnees.json') // on recupere la base de donnee (copier coller du cours)
.then(function(response) {
    return response.json();
})

.then(function(json) {
    base_de_donnees = json // on affecte la base de donne a la variable json
    var template=document.getElementById("produit"); // on lui indique sur quel template dans notre html on va travailler
    for (let i=1; i < 6; i++) { // on a 6 elements ds notre base de donnee
        let clone = document.importNode(template.content, true);  // copier coller du cours
        newContent = clone.firstElementChild.innerHTML // copier coller du cours
            .replace(/{{id-du-produit}}/g,i) // on remplace idée du produit qui est ds html par son id, c'est pr le lien vers la page de personalisation
            .replace(/{{image}}/g,base_de_donnees[i].couleur.noir) // on affiche l'image
            .replace(/{{titre}}/g,base_de_donnees[i].titre) // j'ai mis un titre à nos accesoire mais on pourra l'enlever ou mettre un commentaire ou le prix
        clone.firstElementChild.innerHTML = newContent // copier coller du cours
        document.body.appendChild(clone); // copier coller du cours
              
    }
});

function filterObjects(c) { //pas fonctionnel, doit servir au filtre
    var x, i;
    var y = document.getElementById("1");
    console.log(y);

}


function filtreObjetGaelle(machin){
    var x, i;
    x = document.getElementById("1");
    console.log(x)
    var template=document.getElementById("produit");
    let clone = document.importNode(template.content, true);  // copier coller du cours
        newContent = clone.firstElementChild.innerHTML 
        removeClass(x[1],"show")
    clone.firstElementChild.innerHTML = newContent // copier coller du cours
    document.body.appendChild(clone); 

}

function addClass(element, name){ //pas fonctionnel
    var i, arr1,arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++){
        if(arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}

function removeClass(element, name){ //pas fonctionnel
    var i ,arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++){
        while(arr1.indexOf(arr2[i]) > -1){
            arr1.splice(arr1.indexOf(arr2[i]), 1)
        }
    }
}