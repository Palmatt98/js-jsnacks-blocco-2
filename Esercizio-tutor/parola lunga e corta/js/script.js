// Esercizio 2
// Dare la possibilità di inserire due parole.
// Verificare tramite una funzione che le due parole abbiano la stessa lunghezza.
// Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.

const userWord1 = prompt("inserisci la prima parola")
const userWord2 = prompt("inserisci la seconda parola")

const paroleStampate = inserisciParola(userWord1, userWord2);
console.log(paroleStampate);