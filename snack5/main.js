//Snack 5:
//Scrivi una funzione che accetti tre argomenti:
//un array e due numeri (“a” più piccolo di “b” e “b” grande al massimo quanto il numero di elementi dell’array).
//La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra “a” e “b”


function filterArray (lista, min, max){
    var nuovoArray = [];
    for (var i = 0; i < lista.length; i++){
        if (min <= i && max >= i){
            nuovoArray.push(lista[i]);
        }
    }
    return nuovoArray;
}
var nomi =['carlo', 'dario', 'alessia', 'mirio'];
var min = 1;
var max = 3;

filterArray (nomi, min, max )
var risultato = filterArray(nomi, min, max);
console.log(risultato);