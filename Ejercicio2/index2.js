'use strict'

/*Escribir una función que reciba como parámetro una frase. Separar por palabras y devolver el numero de palabras que tiene la frase:*/

function countWords() {
    let phrase = 'La programación web es fundamental para el progreso';
    let words = phrase.split(' ');
    alert(words.length);
}

countWords();



