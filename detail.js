// Ecrit par : Apolline LE HIRITTE

//VARIABLE
var txtSerie = document.getElementById("serie");
var txtNumero = document.getElementById("numero");
var txtTitre = document.getElementById("titre");
var txtAuteur = document.getElementById("auteur");
var txtPrix = document.getElementById("prix");
var img= document.getElementById("image");
var id = document.getElementById("idBD");
var num = localStorage.detailBd
var ajout = document.getElementById("ajout");
var album = albums.get(num);
var serie = series.get(album.idSerie);
var auteur = auteurs.get(album.idAuteur);
var monPanier = document.getElementById("basket");
var nomFic = serie.nom + '-' + album.numero + '-' + album.titre;
var newnomFic=nomFic.replaceAll(/'|!|\?|\.|"|:|\$/g, "");

//ABONNEMENT
ajout.addEventListener("click", ajoutPanier);


// APPEL DE FONCTION
details();

//FONCTIONS DETAIL
//Affiche les details de la bd qui à été cliquée
function details(){
    txtSerie.innerHTML = "Série: " + serie.nom;
    txtNumero.innerHTML = "Numéro: " + album.numero;
    txtTitre.innerHTML = album.titre;
    txtAuteur.innerHTML = "Auteur: " + auteur.nom;
    txtPrix.innerHTML = "Prix: " + album.prix+"€";
    img.src = "albums/" + newnomFic + ".jpg";
    }


//FONCTION AJOUTPANIER
//Ajoute depuis la page détail ,dans le localStorage ,la clé de la bd lors du clic sur ajouter au panier dans une liste
function ajoutPanier() {
    var num = localStorage.detailBd;

    if (!localStorage.getItem("panier")) {
        var panier = localStorage.setItem("panier", num);
    } else {
        var liste = localStorage.panier;
        var newliste = num + "," + liste;
        panier = localStorage.setItem("panier", newliste);
    }

} 
