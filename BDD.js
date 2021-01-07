// variables nécessaires
const val = albums.keys();
var pass = document.getElementById("password");
var mail = document.getElementById("email");
// var invalidpass= document.getElementById("invalidpass");
// var invalidmail= document.getElementById("invalidmail");
// var decipass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
var decipass = /^[0-9]{4}$/;
// var decimail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

// création
initCard();

// bouton abonnement
 var ok = document.getElementById("ok");
 ok.addEventListener("click",checkpass(pass));



//  intitialiser cards
function initCard() {
  albums.forEach(e => {
    createCards(e);
  });
}
// créer cards
// attribuer informations
function createCards(bdd) {
  var idbd = val.next().value;
  var serie = series.get(bdd.idSerie);
  var nomart = auteurs.get(bdd.idAuteur);

  // creation cards bdd acceuil et autres



  // creation div container
  var divCol = document.createElement("div");
  divCol.setAttribute("class", "col-xs-6 col-md-4 col-sm-6 col-lg-3 mb-4 p-1")
  var listmedia = document.getElementById("card-contain")
  listmedia.appendChild(divCol);

  // creation div card
  var divPanel = document.createElement("div");
  divPanel.setAttribute("class", "card");
  divCol.appendChild(divPanel);
  //  abonnement div card click
  divPanel.addEventListener("click", function (e) { localStock(val) })
  //image
  var newimg = document.createElement("img");
  newimg.setAttribute("class", "card-img-top p-1");
  var nomFic = serie.nom + '-' + bdd.numero + '-' + bdd.titre;
  var newnomFic = nomFic.replaceAll(/'|!|\?|\.|"|:|\$/g, "");
  newimg.src = "albumsMini/" + newnomFic + ".jpg";
  divPanel.appendChild(newimg);

  // creation input valeur bd
  var inputbd = document.createElement("input");
  inputbd.setAttribute("type", "hidden");
  inputbd.innerHTML = idbd
  divPanel.appendChild(inputbd);

  // titre
  var titre = document.createElement("titre");
  titre.setAttribute("class", "card-title")
  titre.innerHTML = bdd.titre;
  divPanel.appendChild(titre);

  // tomes
  var tome = document.createElement("tome");
  tome.setAttribute("class", "card-text")
  tome.innerHTML = "Tome: " + bdd.numero;
  divPanel.appendChild(tome);

  // auteur
  var art = document.createElement("auteur");
  art.setAttribute("class", "card-text1")
  art.innerHTML = nomart.nom;
  divPanel.appendChild(art);

  // serie
  var groupe = document.createElement("serie");
  groupe.setAttribute("class", "card-text2");
  groupe.innerHTML = "serie: " + serie.nom;
  divPanel.appendChild(groupe);

  // prix
  var prix = document.createElement("prix");
  prix.setAttribute("class", "card-text3");
  prix.innerHTML = "prix: " + bdd.prix + " €";
  divPanel.appendChild(prix);


}
// stockages des données
function localStock(thing) {
  var detailBd = localStorage.detailBd = idbd;
  window.location.href = "detailBD.html";
  console.log(detailBd);
}

//  gestion mdp/mail
// function checkform(){
//   console.log("1"),
//   checkPassword(pass);
//  checkMail(mail);
// checkpass();
//  checkmail();
// }

// travail

// fonction control entrant de mdp
// function checkPassword(inputtext) {

//   if (inputtext.value.match(decipass)) {

//     alert('Correct, try another...')
//     return true;
//   }
//   else {
//     console.log("2");
//     invalidpass="Votre Mot de passe doit faire entre 8 et 15 caractères, contenir au moins 1 lettre majuscule, 1 lettre minucule, 1 chiffre et 1 caractère spécial!"
//     inputtext.preventDefault(); // bloque la soumission
//     return false;
//   }
// }
// // fonction control entrant de mail
// function checkMail(inputtext) {
//   console.log(checkMail);

//   if (inputtext.value.match(decimail)) {
//     alert('Correct, try another...')
//     return true;
//   }
//   else {
//     console.log("69");
//     invalidmail="Veuillez entrer une adresse mail valide."
//     inputtext.preventDefault(); // bloque la soumission
//     return false;
//   }
// }



// travail tout recommencer

function checkpass(pass){
  
  if (pass.value.match(decipass)==true) {
   console.log("2");
    // var divpass=document.getElementById("passwee");
    // var ipass=document.createElement("div");

    // ipass.setAttribute("class", "invalid-feedback");
    // ipass.innerhtml="Votre Mot de passe doit faire entre 8 et 15 caractères, contenir au moins 1 lettre majuscule, 1 lettre minucule, 1 chiffre et 1 caractère spécial!"
    // divpass.appendChild(ipass);
    
    
    // event.preventDefault(); // bloque la soumission
  }
  else{
    console.log("3");
  }

}
// checkmail(){
//   if (inputtext.value.match(decimail)) {
//     alert('Correct, try another...');
//     return true;
//   }
//   else {
//     console.log("69");
//     inputtext.preventDefault(); // bloque la soumission
//     return false;
//   }
// }






