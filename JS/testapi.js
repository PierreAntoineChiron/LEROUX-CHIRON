



const APIKEY= "pk.eyJ1IjoiZ2FlbGxlbGVyb3V4IiwiYSI6ImNrdmd1NHl0cTVzN3QzMXF3Z29yNmdlOTUifQ.uOKemiUOXlxp59va8Q6TUw";



let base_de_donnees = {};
fetch('/JS/base_de_donnees.json')
.then(function(response) {
    return response.json();
})
.then(function(json) {
    base_de_donnees = json
    //let produit_id = new URLSearchParams(window.location.search).get("id"); // pour savoir que quel images on a cliqué, chaque images est définit par un nombre
    //id_images_changeante = document.getElementById("image_personnalisation"); // pont entre le js et le html, il contient tt la ligne ou il y a "images personalisation"
    //console.log(base_de_donnees)


});


function livraison() {
    var address = document.getElementById("truc").value;
    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=${APIKEY}`)
        .then(res => res.json())
        .then(data => {
            coord = data.features[0].center;
            long=coord[0];
            lat=coord[1];
            fetch(`https://api.mapbox.com/directions/v5/mapbox/driving/${encodeURIComponent(long)}%2C${encodeURIComponent(lat)}%3B4.8593999%2C45.7611438?alternatives=true&geometries=geojson&steps=true&access_token=${APIKEY}`)
            .then(response => response.json() 
            .then(data=>{
                if (data.routes[0].distance >20000){
                document.querySelector('#prix').innerHTML=(199+ 5+0.07*data.routes[0].distance/1000) + '€' ;
                document.querySelector('#phrase').innerHTML="Prix de la livraison" + (5+0.07*data.routes[0].distance/1000) + "€"; 
                }
                else{
                    document.querySelector('#phrase').innerHTML="Prix de la livraison : 0 €"; 
                    console.log(base_de_donnees)     
                }
                }));
        })};

// `https://api.mapbox.com/geocoding/v5/mapbox.places/160%20avenue%20roger%20salangro.json?access_token=${APIKEY}`)
