//Ecrit par:Apolline LE HIRITTE

//Variables
var titre = document.getElementById("titrePanier");
var prixUni = document.getElementById("prixUni");
var prixTot = document.getElementById("prixTot");
var img = document.getElementById("imagePanier");
var li = localStorage.panier;
var tabListe = li.split(",");
var tot = 0;
var qtty = 1;
var del= document.getElementById("del");


//ABONNEMENT
del.addEventListener("click", viderPanier);

//Appel de fonction
creaPpanier();

//FONCTIONS

// FONCTION INIT PANIER
// Initialise le panier et appelle les fonction create panier et calcultot

function creaPpanier() {
    for (let i = 0; i < tabListe.length; i++) {
        var tab = tabListe[i];
        affichePpanier(tab);
        calculTot(tab)
   
    }
}
// FONCTIION CREATE PANIER
// Affiche dynamiquement les cards correspondante aux articles ajoutés au panier ( liste dans le local storage)

function affichePpanier(n) {
    var album = albums.get(n)
    var serie = series.get(album.idSerie)

    // creation div container
    var divCol = document.createElement("div");
    divCol.setAttribute("class", "col-xs-6 col-md-4 col-sm-6 col-lg-3 mb-4 p-1  ")
    var listmedia = document.getElementById("cardPanier")
    listmedia.appendChild(divCol);

    // creation div card
    var divPanel = document.createElement("div");
    divPanel.setAttribute("class", "card ",'id',"bd");
    divCol.appendChild(divPanel);


    //creation image
    var newimg = document.createElement("img");
    newimg.setAttribute("class", "card-img-top p-1");
    var nomFic = serie.nom + '-' + album.numero + '-' + album.titre;
    var newnomFic = nomFic.replaceAll(/'|!|\?|\.|"|:|\$/g, "");
    newimg.src = "albumsMini/" + newnomFic + ".jpg";
    divPanel.appendChild(newimg);

    //creation titre
    var titre = document.createElement("titre");
    titre.setAttribute("class", "card-title")
    titre.innerHTML = album.titre;
    divPanel.appendChild(titre);

    // prix
    var prix = document.createElement("prix");
    prix.setAttribute("class", "card-text3")
    prix.innerHTML = "prix: " + album.prix + "€";
    divPanel.appendChild(prix);

    // quantite
    var qtite = document.createElement("quantité");
    qtite.setAttribute("class", "card-text3")
    qtite.innerHTML = "quantité: " + 1;
    divPanel.appendChild(qtite);

   
}
// FONCTION CALCUL TOT
// Calcul le prix total du panier
function calculTot(n) {
    var album = albums.get(n)
    var prix = parseFloat(album.prix);
    var total = document.getElementById("px");
    console.log(prix);
    tot += prix
    total.innerHTML = tot + "€";
}
// FONCTION VIDE PANIER 
// vide le panier et affiche une page panier vide en vidant le local storage

function viderPanier() {
   localStorage.clear();
   var total = document.getElementById("px");

    var element = document.getElementById("cardPanier");
    element.parentNode.removeChild(element);
    total.innerHTML="0€";
    window.location.href="panier.html";
   
}
