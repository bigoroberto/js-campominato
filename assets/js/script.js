//////////////////////////////////////////////////////////
/////////////                      //////////////////////
/////////////     CAMPO MINATO     //////////////////////
/////////////                      //////////////////////
////////////////////////////////////////////////////////

 /** OBIETTIVO: estrarre 100 numeri da 1 a cento tutti diversi
 * il computer ne estrae 16 (bombe)
 * il giocatore ne estrae una alla volta
 * vince se estrae 100 - 16 (84) numeri senza mai incontrare una bomba
 * i numeri inseriti devono essere tutti diversi e compresi fra 1 e 100
 * il punteggio è dato da quanti tentativi sei tiuscito a fare prima di incontrare una bomba
 * il gioco finisce quando incontri una bomba o quando il giocatore ha fatto 84 tentatitivi*/

//VARIABILI GLOBALI

 //creo una variabile che mi dica quanti numeri verranno estratti
 var estrazione = 100;

 //creo una variabile che mi dica quante bombe estrarrà il computer
 var bombeCPU = 16;

 // creiamo una variante che ci da i tentativi validi massimi
 var tentativi = estrazione - bombeCPU;

 //bombe che verranno usate nel gioco
 var bombeReali = arrayGeneratore(bombeCPU, estrazione);

 // array dei numeri giocati dall'utente
 var arrayNumeriUtente = [];

 // variabile che ci fa finire il gioco vittoria o sconfitta
 var giocoConcluso = false; ///flag


 console.log( bombeReali);

 //creiamo un ciclo che gira fino a quando non si verifica la condizione di gioco concluso 
 while(giocoConcluso === false){

  //Chiediamo all'utente con un prompt di inserire un numero 
  var infoNumeriUtente = parseInt(prompt("Inserisci un numero"));
  
  // se è vero che dentro l'arrey c'è questo numero (CONFRONTO)--- si --- alert numero già inserito
  // se nell'array è vero che c'è il numero inserito dall'utente stampiamo un messaggio di alert 
  if(arrayNumeriUtente.includes(infoNumeriUtente) === true){
    alert("Numero inserito già presente!\nRiprova");

    // se è vero che in bombereali c'è questo numero (CONFRONTO)--- si --- alert hai perso gioco concluso 
  }else if(bombeReali.includes(infoNumeriUtente) === true){
    alert("Hai preso una bomba!\nRiprova");
    console.log("Hai preso una bomba, hai fatto tentativi n." + (arrayNumeriUtente.length + 1) + " il numero bomba trovato è " + infoNumeriUtente)
    giocoConcluso = true;

    // se è vero che non ha inserito un numero l'utente (CONFRONTO) --- si --- alert non hai inserito un numero
  }else if(isNaN(infoNumeriUtente) === true){
    alert("Non hai inserito un numero!\nRiprova")

    // se il numero inserito dall'utente è maggiore del numero limite massimo del gioco ---- alert 
  }else if(infoNumeriUtente > estrazione){
    alert("Numero inserito più alto del limite massimo!\nRiprova");

    // se il numero inserito dall'utente è minimo del numero limite minimo del gioco ------- alert 
  }else if(infoNumeriUtente < 1){
    alert("Numero inserito più basso del limite richiesto per giocare!\nRiprova");

     // se il numero inserito dall'utente è valido lo aggiungo all'arraynumeriutente
  }else{
    arrayNumeriUtente.push(infoNumeriUtente);

     // confronto se i numeri estratti sono uguali al numero di tentativi possibili ---- alert hai vinto gioco concluso
    if(arrayNumeriUtente === tentativi){
      alert("HAI VINTO !");
      giocoConcluso = true;
    }
  }
 }


 

//FUNZIONI

//creo una funzione che metta in un array le bombe estratte dandole una variabile astratta che mi faccia capire su cosa andrò a lavorare all'interno (numeroBombeEstratte e numeroEstrazione)

function arrayGeneratore (numeroBombe,numeroLimite){
  //creo un array che contenga le bombe
  var arrayBombe = [];
  while(arrayBombe.length < numeroBombe){
    //con var bombe uso la funzione estrazione per generare un numero random
    var bombe = estrazione_random(numeroLimite);
    //dettiamo le condizioni
    // [1,2,3,4,5,6,7,8,9] è vero che 11 è dentro l'array (CONFRONTO) no --- allora io te la metto dentro l'array 
    if(arrayBombe.includes(bombe) === false){
      arrayBombe.push(bombe);
    }
  }
  return arrayBombe;
}

//creo una funzione per creare 
function estrazione_random (max){
 return Math.ceil(Math.random()*max);
}