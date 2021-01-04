// variables nécessaires




// initialiser cards
function initCard(){
    console.log("initCard");
    // albums.forEach(element => {
      createCards(albums);  
    // });
       
}
// créer cards
// attribuer informations

    
     var serie = series.get("2");
     console.log(serie.nom);
    // var auteur= auteurs.get(albums.idAuteur);

function createCards(albums){
   
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
    newimg.src= "albumsMini/"+ series + '-' + albums.numero + '-' + albums.titre + '.jpg';
    divPanel.appendChild(newimg);

    // titre
    var titre= document.createElement("titre");
    titre.setAttribute("class","card-title")
    titre.innerHTML=albums.titre;
    divPanel.appendChild(titre);

    // auteur
    var auteurs= document.createElement("auteur");
    auteurs.setAttribute("class","card-text1")
    auteurs.innerHTML=albums.auteurs;
    divPanel.appendChild(auteurs);

    // serie
    var series= document.createElement("serie");
    series.setAttribute("class","card-text2")
    series.innerHTML=albums.series;
    divPanel.appendChild(series);

    // prix
    var prix = document.createElement("prix");
    prix.setAttribute("class","card-text3")
    prix.innerHTML=albums.prix;
    divPanel.appendChild(prix);

}
initCard();