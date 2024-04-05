// Fai inserire un numero, che chiameremo N, all’utente.
// Genera N array, ognuno formato da 10 numeri casuali tra 1 e 100.
// Ogni volta che ne crei uno, stampalo a schermo.

const n = parseInt(prompt("inserisci in numero"));

const numberArray = rdnNumber(1, 100);
console.log(numberArray);

const array1 = [numberArray];
console.log(array1);
