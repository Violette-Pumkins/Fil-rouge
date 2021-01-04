// variables nécessaires
  

// initialiser cards
function initCard(){
    console.log("initCard");
    
     albums.forEach(e => {
      createCards(e);  
    });
       
}

 var reg=/'?/;
   var chaine= albums.titre;
   chaine=chaine.replace(reg,"0");
   console.log(chaine);
// créer cards
// attribuer informations
function createCards(bdd){
  

    var serie = series.get(bdd.idSerie);
    var nomart = auteurs.get(bdd.idAuteur)
    
    // creation div container
    var divCol = document.createElement("div");
    divCol.setAttribute("class", "col-xs-6 col-md-4 col-sm-6 col-lg-3 mb-4")
    var listmedia = document.getElementById("card-contain")
    listmedia.appendChild(divCol);

    // creation div card
    var divPanel= document.createElement("div");
    divPanel.setAttribute("class","card");
    divCol.appendChild(divPanel);

    //image
    var newimg = document.createElement("img");
    newimg.setAttribute("class","card-img-top p-1");
    newimg.src= "albumsMini/"+ serie.nom + '-' + bdd.numero + '-' + bdd.titre + '.jpg';
    divPanel.appendChild(newimg);

    // titre
    var titre= document.createElement("titre");
    titre.setAttribute("class","card-title")
    titre.innerHTML=bdd.titre;
    divPanel.appendChild(titre);

    // // auteur
    var art= document.createElement("auteur");
    art.setAttribute("class","card-text1")
    art.innerHTML=nomart.nom;
    divPanel.appendChild(art);

    // // serie
    var groupe= document.createElement("serie");
    groupe.setAttribute("class","card-text2")
    groupe.innerHTML=serie.nom;
    divPanel.appendChild(groupe);

    // prix
    var prix = document.createElement("prix");
    prix.setAttribute("class","card-text3")
    prix.innerHTML=bdd.prix;
    divPanel.appendChild(prix);

}
initCard();