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



// function Form() {
//   this.elements = function() {
//     var element = document.getElementsByClassName('inputValue');
//     var title = document.getElementsByClassName('inputText');
//     for (i = 0; i <= element.length; i++) {
//       title[i].innerHTML = element[i].value;
//       console.log(title[i]);
//     }
//   }
// }
//
// var product = new Form();
// var btn = document.getElementById('send');
// var card = document.getElementsByClassName('fiche');
// btn.onclick = function() {
//   product.elements();
//   card[0].style.display = 'block';
//   for (i = 0; i <= element.length; i++) {
//     document.getElementsByClassName('inputValue')[i].value = ("");
//   }
// }





function clientFile(titre, accroche, description) {
  this.titre = titre;
  this.accroche = accroche;
  this.description = description;
}

function getText() {
  this.text = function() {
    var card = new clientFile($("#titre").val(), $("#accroche").val(), $("#description").val());
  }
}


// function showText() {
//   var card = new clientFile();
//   card.text();
//   card[0].style.display = 'block';
//   for (i = 0; i <= inputValue.length; i++) {
//     inputValue[i].value = ("");
//   }
// }
