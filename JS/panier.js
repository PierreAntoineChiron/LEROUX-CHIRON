date=document.getElementById("date")

var maintenant=new Date();
var jour=maintenant.getDate();
var mois=maintenant.getMonth()+1;
var an=maintenant.getFullYear();

date.setAttribute("min", "",an,"-",mois,"-",jour,"") //Bon ca fonctionne pas encore//

