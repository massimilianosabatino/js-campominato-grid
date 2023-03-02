# Griglia Campo Minato
nome repo: js-campominato-grid  

## Consegna
L’utente clicca su un bottone che genererà una griglia di gioco quadrata. Ogni cella ha un numero progressivo, da 1 a 100. Ci saranno quindi 10 caselle per ognuna delle 10 righe. Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

### Bonus
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
		con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
		con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
		con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;


//Creazione struttura base HTML rispettando il layout fornito  
//Creazione di un bottone con id per gestire la crazione della griglia  
//Creazione di una funzione  
  =>Generare con un ciclo dei div con classe dedicata, questi saranno le singole caselle. Ogni casella conterra un evento in ascolto per reagire al click  
  =>passare alla funzione che genera i div il numero di div che deve generare  
---Per Bonus  
//Creare un campo select in HTML con tre valori corrispondenti alle 3 difficolta, il valore determinerà il numero di caselle create  
//Creare in JS una variabile che prenda il valore del select  
//Passare il valore del select alla funzione preposta.
