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