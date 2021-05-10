//Snack 4:
//Scrivi una funzione che fonda due array (aventi lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall’altro
/* var a = [1, 2, 3, 4];
var b = ['a', 'b', 'c', 'd'];

Array.prototype.push.apply(a, b); 
console.log(a);
 */


/* var arr1=[
    ['a', 'b', 'c', 'd'],
  ],
  arr2=[
    [1, 2, 3, 4],
    
  ],
  m=arr1.map(function(item, index) {
    let tempObj={};
    item.forEach(function(item2, index2) {
      tempObj[item2]=arr2[index][index2];
    });
    return tempObj;
  });
console.log(m) */

//es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].