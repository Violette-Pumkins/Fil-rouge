//Variables
var titre = document.getElementById("titrePanier");
var prixUni = document.getElementById("prixUni");
var prixTot = document.getElementById("prixTot");
var img = document.getElementById("imagePanier");
var monPanier = document.getElementById("basket");
var li = localStorage.panier;
var tabListe = li.split(",");


//ABONNEMENTS
monPanier.addEventListener("click", affichePanier);




//FONCTIONS

function affichePanier() {

    window.location.href = "panier.html";

    itnitPpanier();

}
itnitPpanier();

function itnitPpanier() {
    
    for (i in tabListe) {
        console.log("4");
        tabListe[i].forEach(e => {
            createPpanier(e);

         
        });
    }

}



function createPpanier(bdd) {

    // creation div container
    var divCol = document.createElement("div");
    divCol.setAttribute("class", "col-xs-6 col-md-4 col-sm-6 col-lg-3 mb-4 p-1")
    var listmedia = document.getElementById("card-contain")
    listmedia.appendChild(divCol);

    // creation div card
    var divPanel = document.createElement("div");
    divPanel.setAttribute("class", "card");
    divCol.appendChild(divPanel);

}