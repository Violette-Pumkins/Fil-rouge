// variables nécessaires
const val = albums.keys();


// initialiser cards
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
  var nomart = auteurs.get(bdd.idAuteur)

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
  newimg.src = "albumsMini/" + nomFic + ".jpg";
  nomFic.replaceAll(/'|!|\?|\.|"|:|\$/g, "");
  divPanel.appendChild(newimg);

  // idbd
  // creation input valeur bd

  var inputbd = document.createElement("input");
  inputbd.setAttribute("type", "hidden");
  inputbd.innerHTML = idbd
  divPanel.appendChild(inputbd);

  // var inputbd = document.createElement("value");
  // inputbd.setAttribute("type", "text");
  // inputbd.innerHTML= idbd
  // divPanel.appendChild(inputbd);

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

  // // serie
  var groupe = document.createElement("serie");
  groupe.setAttribute("class", "card-text2")
  groupe.innerHTML = "serie: " + serie.nom;
  divPanel.appendChild(groupe);

  // prix
  var prix = document.createElement("prix");
  prix.setAttribute("class", "card-text3")
  prix.innerHTML = "prix: " + bdd.prix + " €";
  divPanel.appendChild(prix);


  function localStock(thing) {
    var prr = localStorage.cle = idbd;
    window.location.href = "detailBD.html";
    console.log(prr)
  }

}


initCard();

//  gestion mdp/mail
var pass = document.getElementById("password")
var mail= document.getElementById("email")



// fonction control entrant de mdp

function checkPassword(pass) {
  
  var decipass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
  var msg= "Votre Mot de passe doit faire entre 8 et 15 caractères, contenir au moins 1 lettre majuscule, 1 lettre minucule, 1 chiffre et 1 caractère spécial!";
  if (pass.value.match(decipass)) {
    alert('Correct, try another...')
    
    return true;
  }
  else {
    alert(msg)
    console.log(checkPassword());
    return false;
  }
}


// fonction pour avoir un joli validateur
// function check(input) {
//   if (checkPassword(input) == false)
//   {
//     input.setCustomValidity( "Votre Mot de passe doit faire entre 8 et 15 caractères, contenir au moins 1 lettre majuscule, 1 lettre minucule, 1 chiffre et 1 caractère spécial!");
//   } 
//   else 
//   {
//     // input is fine -- reset the error message
//     input.setCustomValidity('');
//   }
// }
// check();


// fonction control sortant mdp, non submit en cas de fausse erreur.


// (function() {
//   'use strict';
//   window.addEventListener('load', function() {
//     // Fetch all the forms we want to apply custom Bootstrap validation styles to
//     var forms = document.getElementById('invalidPassword');
//     // Loop over them and prevent submission
//     var validation = Array.prototype.filter.call(forms, function(form) {
//       form.addEventListener('submit', function(event) {
//         if (form.checkPassword(input) === false) {
//           event.preventDefault();
//           event.stopPropagation();
//         }
//         form.classList.add('was-validated');
//       }, false);
//     });
//   }, false);
// })();

// gestion mail
// mm fonction que pour password, control entrant

function checkMail(inputtext) {
  console.log(checkMail);
  var decimail=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  var msg2="Veuillez entrer une adresse mail valide." 
  if (inputtext.value.match(decimail)) {
    alert('Correct, try another...')
    return true;
  }
  else {
    alert(msg2);
    return false;
  }
}
checkPassword(pass);
checkMail(mail);
// control sortant et non submit en cas erreur.