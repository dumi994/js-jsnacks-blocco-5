//Snack 4:
//Scrivi una funzione che fonda due array (aventi lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall’altro
var arrayNum = [1, 2, 3, 4];
var arrayString = ['a', 'b', 'c', 'd'];
function unireArray (array1, array2){
   /*  console.log(array1);
    console.log(array2); */
    var nuovoArray = [];
    for (var i = 0; i < array1.length; i++){
        nuovoArray.push(array1[i], array2[i])
        console.log(nuovoArray);
    }
    return nuovoArray;
}
unireArray (arrayString, arrayNum);

//es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].