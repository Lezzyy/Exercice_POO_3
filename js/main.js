// var produit = function () {
//   this.name = "",
//   this.accroche = "",
//   this.description = "",
//   getInfo=function() {
//     produit.getElementsByTagName("input")['titre'].value = this.name + " " + this.accroche + " " + this.description;
//   };
// }

// var produit = document.getElementById("send");
// produit.addEventListener("click", function() {
//   alert("clic");
// });

// document.getElementById('send').click (function(){
//
// });

function Descriptif(titre, accroche, description) {
  this.titre = titre;
  this.accroche = accroche;
  this.description = description;
}


function Form() {
  this.elements = function() {
    var element = document.getElementsByClassName('inputValue');
    var title = document.getElementsByClassName('inputText');
    for (i = 0; i <= 2; i++) {
      title[i].innerHTML = element[i].value;
      console.log(title[i]);
    }
  }

  // title=elements[0].value,
}
// var ficheProduit = {
//
// }

// var produit = new Descriptif (document.getElementById('titre').value, document.getElementById('accroche').value, document.getElementById('description').value);
var product = new Form();
var btn = document.getElementById('send');
var card = document.getElementsByClassName('fiche');
btn.onclick = function() {
  product.elements();
  card[0].style.display = 'block';
  for (i = 0; i <= 2; i++) {
    document.getElementsByClassName('inputValue')[i].value = ("");
  }
}
