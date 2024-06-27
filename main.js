/*Considerar la siguiente frase para todos los ejercicios:
En un lugar oscuro nos encontramos, y un poco más de conocimiento ilumina nuestro camino.

1.Necesito saber la cantidad de caracteres de la frase.
2.Necesito poder ver caracter por caracter cada uno de los caracteres de la frase (sólo imprimirlos).
3.Necesito saber la cantidad de vocales que tiene la frase  necesito saber la cantidad de consonantes que tiene la frase. */

let phrase =
  "En un lugar oscuro nos encontramos, y un poco más de conocimiento ilumina nuestro camino.";

/*1:cantidad de caracteres de la frase.*/

let lengthPhrase = phrase.length;
console.log(lengthPhrase);

/*2:ver caracter por caracter cada uno de los caracteres de la frase (sólo imprimirlos)*/

for (let i = 0; i < lengthPhrase; i++) {
  console.log("character:", phrase[i]);
}

/*3:cantidad de vocales que tiene la frase*/

let vowelCount = 0;
let vowels = [
  "a",
  "e",
  "i",
  "o",
  "u",
  "á",
  "é",
  "í",
  "ó",
  "ú",
  "A",
  "E",
  "I",
  "O",
  "U",
  "Á",
  "É",
  "Í",
  "Ó",
  "Ú",
];
for (i = 0; i < lengthPhrase; i++) {
  let char = phrase[i];
  if (vowels.includes(char)) {
    vowelCount++;
  }
  console.log(vowelCount);
}

/*4:cantidad de consonantes que tiene la frase */

let consonantCount = 0;
let consonant = [
  "b",
  "c",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "m",
  "n",
  "p",
  "q",
  "r",
  "s",
  "t",
  "v",
  "w",
  "x",
  "y",
  "z",
];
for (i = 0; i < lengthPhrase; i++) {
  let char = phrase[i];
  if (consonant.includes(char)) {
    consonantCount++;
  }
  console.log(consonantCount);
}
