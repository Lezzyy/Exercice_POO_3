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


var tabContent = [];
var index = 0;


function clientFile(titre, accroche, description) {
  this.titre = titre;
  this.accroche = accroche;
  this.description = description;
}

function element() {
  this.getText = function() {
    var card = new clientFile($("#titre").val(), $("#accroche").val(), $("#description").val());
    tabContent.push(card);
  }
  this.addText = function() {
    $('.fileProduct').append("<div class='productContent'><h1>Fiche produit</h1><p class='content'>" + tabContent[index].titre + " </p> <p class = 'content'> " + tabContent[index].accroche + "  </p><p class='content'>" + tabContent[index].description + " </p></div>")
    index++;
  }
}



$("#send").click(function() {
  var showText = new element();
  showText.getText();
  showText.addText();
})
