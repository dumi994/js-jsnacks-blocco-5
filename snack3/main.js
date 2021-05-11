// Snack 3:
// Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC)

function reverseString (text){
  var nuovaParola = '';
  for (var i = (text.length - 1); i >= 0; i-- ){
    nuovaParola += text[i];
  }
  return nuovaParola;
};
reverseString ('mario');
console.log(reverseString('ciao'));
