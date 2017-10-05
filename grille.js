$(document).ready(function(){

var nouvelleLigne = document.getElementById("monBody").insertRow(-1);


var N = prompt("Quelle est la taille de votre grille ? (un nombre attendu)");
if (N > 70 )
   alert("Waw !C'est trop grand ! Réessaye avec un chiffre plus petit ");
 else
   console.log("c'est parti");

});