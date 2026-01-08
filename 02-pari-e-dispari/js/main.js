/* Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */

// ? Uso il prompt per far scegliere all'utente se pari o dispari

const userChoice = prompt("Pari o dispari?", "Pari").trim().toLowerCase();
console.log("userChoice:", userChoice);

// ? Invoco la funzione della scelta pari o dispari

const odd = isUserChoiceOdd(userChoice);
console.log("isUserChoiceOdd:", isUserChoiceOdd(userChoice));

// ? Uso un altro prompt per far scegliere un numero all'user

const userNumber = parseInt(prompt("Scegli un numero tra 1 e 5..."));
console.log("userNumber:", userNumber);

// TODO Invocare le funzioni
// ? Invoco la funzione del numero random

const randomNum = generateRandomNumber(1, 5);
console.log("randomNum:", randomNum);

// ? Invoco la funzione della somma
const sumNumber = userNumber + randomNum;
console.log("sumNumber", sumNumber);

const isSumOdd = isSumNumberOdd(userNumber + randomNum);
console.log("isSumNumberOdd", isSumNumberOdd(userNumber + randomNum));

// TODO Fine invocazione funzioni

// !! Error control

if (isNaN(userNumber)) {
  throw new Error("Non sono ammesse lettere");
} else if (userNumber > 5 || userNumber < 1) {
  throw new Error("Il valore deve essere compreso fra 1 e 5");
}

// TODO Scrivo le funzioni
// ? Genero numero random con una funzione

function generateRandomNumber(min, max) {
  // ? Conviene mettere min e max come parametri
  const randomNum = Math.floor(Math.random() * (max - min + 1) + min);
  return randomNum;
}

// ? Genero funzione per definire se la scelta dell'utente è dispari

function isUserChoiceOdd(choice = "dispari") {
  const odd = choice === "dispari";
  return odd;
}

// ? Genero la funzione per la somma

function isSumNumberOdd(number) {
  const isSumOdd = number % 2 !== 0;
  return isSumOdd;
}
// TODO Fine elenco funzioni

const outputMessageWin = "Complimenti!! hai vinto";
const outputMessageLose = "Peccato, hai perso";

if (
  (isSumOdd === true && odd === true) ||
  (isSumOdd === false && odd === false)
) {
  alert(outputMessageWin);
  console.log(outputMessageWin);
} else if (
  (isSumOdd === true && odd === false) ||
  (isSumOdd === false && odd === true)
) {
  alert(outputMessageLose);
  console.log(outputMessageLose);
}
