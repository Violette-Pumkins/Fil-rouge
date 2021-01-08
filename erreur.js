//VARIABLE

var li = localStorage.panier;
//Appel de fonction

oops(li);

function oops(n) {
    if (n === undefined) {

        // recup objet destination
        var oDiv = document.getElementById("cardPanier")
        // cretation image
        var oImg = document.createElement('img');
        //-- Ajout image
        oDiv.appendChild(oImg);
        //-- affecte l'image
        oImg.src = "oops.jpg";
    }
}