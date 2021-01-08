
var searchbar= document.getElementById("searchBar");
var loupe= document.getElementById("search");


function write(){
  const searchBar=document.getElementById("searchBar").value;
  console.log(searchBar);
  alert("ok");
  
}

searchBar.addEventListener("keyup", write);
loupe.addEventListener("click", function(){ showDiv(albums)});


function showDiv(bdd){
 console.log(bdd);
 
  for(i=0; i<bdd.length; i++){

    if(bdd.titre.includes(searchBar)){
      bdd.titre.get(val);
      var idbd = val.next().value;
      
      localStock(val);
      console.log(bdd.titre);
    }

    else{
      alert("désolé, cette Bd est partie dans un monde fantastique!")
    }

  }
}