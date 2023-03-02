'use strict';

//Creazione di una funzione  
//   =>Generare con un ciclo dei div con classe dedicata, questi saranno le singole caselle. Ogni casella conterra un evento in ascolto per reagire al click  
//   =>passare alla funzione che genera i div il numero di div che deve generare  

//Element from page
const board = document.getElementById('board');
const play = document.getElementById('play');

/*
*  Function
*/
function createElement(htmlElement, htmlId, htmlClass, where, insertText) {
    const single = document.createElement(htmlElement);
    single.id = htmlId;
    single.className = htmlClass;
    single.innerText = insertText;
    where.appendChild(single);
    single.addEventListener('click', function(){
        single.classList.add('selected');
    })
}

function gridDimension(colRowNumber){
    const totalCell = colRowNumber * colRowNumber;
    for(let cell = 1; cell <= totalCell; cell++){
        createElement('div', 'cell', 'cell-10', board, cell);
    }
}

// createElement('div', 'cell', 'cell-10', board, cell);


/*
*  Main
*/

