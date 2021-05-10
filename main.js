//Snack 1:
//Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.

var zucchine = [
    {
        varieta: 'nero di milano',
        peso: 70,
        lunghezza: '16 cm',
    },
    {
        varieta: 'Romanesco',
        peso: 85,
        lunghezza: '20 cm',
    },
    {
        varieta: 'Ortolano di faenza',
        peso: 120,
        lunghezza: '15 cm',
    },
    {
        varieta: 'Lunga fiorentina',
        peso: 80,
        lunghezza: '22 cm',
    },
    {
        varieta: 'Siciliano',
        peso: 190,
        lunghezza: '28cm',
    },
    {
        varieta: 'Striata di Napoli',
        peso: 75,
        lunghezza: '10 cm',
    },
    {
        varieta: 'bianca Triestina',
        peso: 220,
        lunghezza: '14 cm',
    },
    {
        varieta: 'Rigata Pugliese',
        peso: 290,
        lunghezza: '19 cm',
    },
    {
        varieta: 'tondo di Piacenza',
        peso: 350,
        lunghezza: '10 cm',
    },
    {
        varieta: 'tondo di Nizza',
        peso: 60,
        lunghezza: '8 cm',
    },

]
console.log(zucchine);
for (key in zucchine){
    var mario = zucchine[key];
    console.log(mario);
};

for (var i = 0; i < zucchine.length; i++){
    var questaZucchina = zucchine[i];
    console.log(questaZucchina.peso);
    document.getElementById('verdure').innerHTML += questaZucchina.peso + ' ';
}

console.log(questaZucchina);


//Calcola quanto pesano tutte le zucchine.