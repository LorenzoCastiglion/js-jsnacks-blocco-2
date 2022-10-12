/*
SNACK_1: Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.

fare un check che controlli odd or even;

se even print;

se odd print odd +1;
*/


//casella input numeri
let snk1 = document.getElementById('snk1');

//casella risultato
let res1 = document.getElementById('check1');

//bottone
let btn1 = document.getElementById('btn1');



const stampa1 = function(){

    res1.innerHTML = '';

    let number1 = document.createElement('div');
    // se numero pari
    if(snk1.value % 2 == 0) {

       number1.textContent = snk1.value ;
    }
    
    // se numero dispari
    else {
        console.log("The number is odd.");

        number1.textContent = snk1.value ++;
    }
    
    res1.append(number1);
   

}

btn1.addEventListener('click', stampa1);



/*

SNACK_2: Generatore di “nomi cognomi” casuali: il Grande Gatsby ha  una lista di nomi e una lista di cognomi, e da queste vuole generare una falsa lista di invitati con nome e cognome.


creare due array con nomi e cognomi;

creare una funzione che scelga elemento random nell'arary e lo pushi in una casella result concatenando;

*/


/*

SNACK_3: Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari.

creare array numeri;

fare in modo che si selezionino solo i numeri ad index odd;

sommare tali numeri tra di loro;

*/

/**
 
SNACK_4(BONUS): Crea due array che hanno un numero di elementi diversi.  Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.


creare due array con diff numeri di elementi all'interno;

fare check lunghezza di entrambi;

creare condizione che push elementi nell'array con meno elementi fino a giungere a parità;

 */