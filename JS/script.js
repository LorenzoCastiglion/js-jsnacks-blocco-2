/*
SNACK_1: Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.

fare un check che controlli odd or even;

se even print;

se odd print odd +1;
*/




//bottone
let btn1 = document.getElementById('btn1');

// funzione che checki i numeri

const stampa1 = function () {
    
    let inputValue = document.getElementById('snk1').value;
  
    if (inputValue % 2 == 0) {
        document.getElementById('check1').innerHTML = inputValue;
    } else { // se dispari successivo
        inputValue++;
        document.getElementById('check1').innerHTML = inputValue;
    }
    document.getElementById('snk1').value = '';
}
    // event listener per click bottone
    btn1.addEventListener('click', stampa1);            



/*

SNACK_2: Generatore di “nomi cognomi” casuali: il Grande Gatsby ha  una lista di nomi e una lista di cognomi, e da queste vuole generare una falsa lista di invitati con nome e cognome.


creare due array con nomi e cognomi;

creare una funzione che scelga elemento random nell'arary e lo pushi in una casella result concatenando;

*/


// bottonw
let btn2 = document.getElementById('btn2');

let nameList = ['Max', 'Jhonny', 'Tom', 'Philly', 'Marilyn', 'Judy', 'Enrietta', 'Franco'];
let surnameList = ['Thompson', 'Porceddu', 'Rimmet', 'Popperpot', 'Jinglestring', 'Kimbles', 'Tunner', 'Bobtom'];

let invitati = [];

let genera = function(){

    document.getElementById('check2').innerHTML = '';

    for(i=0; i < 9; i++){
       
        let randomName = Math.floor(Math.random()* nameList.length);
        let name = nameList[randomName];

        let randomSurname = Math.floor(Math.random()* surnameList.length);
        let surname = surnameList[randomSurname];

        invitati.push(name + ' ' + surname);
        let list = document.createElement('p')

        document.getElementById('check2').append(list);
        list.innerHTML = invitati[i];
    }
    
    invitati = [];
    
}

btn2.addEventListener('click', genera );      

/*

SNACK_3: Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari.

creare array numeri;

fare in modo che si selezionino solo i numeri ad index odd;

sommare tali numeri tra di loro;

*/
let btn3 = document.getElementById('btn3');

let oddNumber = [];

let aggiungi = function() {
    // array feeder
    const numeriDaGenerare = 20;

    for (let i = 1; i <= numeriDaGenerare; i++) { 
    let numeroGenerato = Math.floor(Math.random() * (2000 - 1));
    console.log(numeroGenerato);
    oddNumber.push(numeroGenerato);
    }

}
let calcola = function(){
   
    let somma = 0;

    for (let i = 0; i < oddNumber.length; i++){

        if(i % 2 !==0){
            somma = somma + oddNumber[i];
        }
    }
}




btn3.addEventListener('click', aggiungi, calcola )




/**
 
SNACK_4(BONUS): Crea due array che hanno un numero di elementi diversi.  Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.


creare due array con diff numeri di elementi all'interno;

fare check lunghezza di entrambi;

creare condizione che push elementi nell'array con meno elementi fino a giungere a parità;

 */