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

txtSerie.innerHTML = "Série: " + serie.nom;
txtNumero.innerHTML = "Numéro: " + album.numero;
txtTitre.innerHTML = album.titre;
txtAuteur.innerHTML = "Auteur: " + auteur.nom;
txtPrix.innerHTML = "Prix: " + album.prix+"€";
img.src= "albums/"+ serie.nom + '-' + album.numero + '-' + album.titre + '.jpg';

ajout.addEventListener("click", ajoutPanier);

//RECUPERE LA LISTE DU LOCAL STORAGE CONTENANT LA LISTE DES AJOUTS PANIER
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