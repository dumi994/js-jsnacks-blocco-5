
//Snack 2:
//Crea 10 oggetti che rappresentano una zucchina.
var zucchine = [
    {
        varieta: 'nero di milano',
        peso: 70,
        lunghezza: 16,
    },
    {
        varieta: 'Romanesco',
        peso: 85,
        lunghezza: 20,
    },
    {
        varieta: 'Ortolano di faenza',
        peso: 120,
        lunghezza: 15,
    },
    {
        varieta: 'Lunga fiorentina',
        peso: 80,
        lunghezza: 22,
    },
    {
        varieta: 'Siciliano',
        peso: 190,
        lunghezza: 28,
    },
    {
        varieta: 'Striata di Napoli',
        peso: 75,
        lunghezza: 10,
    },
    {
        varieta: 'bianca Triestina',
        peso: 220,
        lunghezza: 14,
    },
    {
        varieta: 'Rigata Pugliese',
        peso: 290,
        lunghezza: 19,
    },
    {
        varieta: 'tondo di Piacenza',
        peso: 350,
        lunghezza: 10,
    },
    {
        varieta: 'tondo di Nizza',
        peso: 60,
        lunghezza: 8,
    },

];
//Dividi in due array separati le zucchine che misurano meno o più di 15cm.
var zucchineBig =[];
var zucchineSmall = [];
var dimensione = 15;

for (var i = 0; i < zucchine.length; i++){
    var ciclate = zucchine[i];
    if (ciclate.lunghezza <= dimensione){
        zucchineSmall.push(ciclate);
    }else{
        zucchineBig.push(ciclate);
    };
};
console.log(zucchineBig);
console.log(zucchineSmall);

//Infine stampa separatamente quanto pesano i due gruppi di zucchine.
var questaGranZucchina = 0;
for (var i = 0; i < zucchineBig.length; i++){
    var zucchineGr = zucchineBig[i];
    console.log(`il peso delle zucchine grandi è ${zucchineGr.peso}`);
    questaGranZucchina += zucchineGr.peso;
}
document.getElementById('zucchine_lunghe').innerHTML = `Il peso delle zucchine lunghe è ${questaGranZucchina} grammi.`

var questaPiccolaZucchina = 0;
for (var i = 0; i < zucchineSmall.length; i++){
    var zucchinePic = zucchineSmall[i];
    console.log(`il peso delle zucchine piccole è ${questaPiccolaZucchina}`);
    questaPiccolaZucchina += zucchinePic.peso;
};
document.getElementById('zucchine_corte').innerHTML = `Il peso delle zucchine corte è ${questaPiccolaZucchina} grammi.`

