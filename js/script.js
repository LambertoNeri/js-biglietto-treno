/*
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
*/

/*
chiede all'utente il numero di km che vuole percorrere e metterlo dentro variabile distance
chiedere all'utente l'età e metterlo dentro variabile age
calcolare variabile prezzo moltiplicando distance * 0.21
calcolare sconto in base all'età: <18 = 20% , >65 = 40%
guardare extra 

*/
var distance;
while (isNaN(distance = prompt("quanti kilometri devi percorrere? (solo numeri)")));

var age;
while (isNaN(age = prompt("quanti anni hai (solo numeri)")));

/*const distance = parseInt(prompt('Quanti kilometri devi percorrere?') ); 
const age = parseInt(prompt('Quanti anni hai?') ); */
const price = parseFloat (distance * 0.21); 
const discount18 = parseFloat ( price * .20);
const discount65 = parseFloat ( price * .40); 



console.log ('distanza', distance);
console.log ('età', age);
console.log ('prezzo biglietto', price);
console.log ('da scontare x 18enne',  discount18)
console.log ('sconto anziani', discount65)




if (age < 18) {
    console.log('Prezzo biglietto scontato minori 18', (price - discount18).toFixed(2) );
    document.getElementById("prezzo_finale").innerHTML = (price - discount18).toFixed(2);
} else if (age > 65 ) {
    console.log ('prezzo scontato anzianità ',  (price - discount65).toFixed(2));
    document.getElementById("prezzo_finale").innerHTML = (price - discount65).toFixed(2);
} else {
    console.log ('prezzo intero', price.toFixed(2))
    document.getElementById("prezzo_finale").innerHTML = price.toFixed(2);
}

