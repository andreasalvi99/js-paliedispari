/* Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */

// ? Uso il prompt per far scegliere all'utente se pari o dispari

const userChoice = prompt("Pari o dispari?", "Pari").trim().toLowerCase();
console.log("userChoice:", userChoice);

// ? Uso un altro prompt per far scegliere un numero all'user

const userNumber = parseInt(prompt("Scegli un numero tra 1 e 5..."));
console.log("userNumber:", userNumber);

const randomNum = generateRandomNumber(1, 5);
console.log("randomNum:", randomNum);

// !! Error control

if (isNaN(userNumber)) {
  throw new Error("Non sono ammesse lettere");
} else if (userNumber > 5 || userNumber < 1) {
  throw new Error("Il valore deve essere compreso fra 1 e 5");
}
// ? Genero numero random con una funzione

function generateRandomNumber(min, max) {
  // ? Conviene mettere min e max come parametri
  const randomNum = Math.floor(Math.random() * (max - min + 1) + min);
  return randomNum;
}

// ? Genero una funzione per definire se il numero scelto dell'utente è dispari

function isNumberOdd(number) {
  const even = number % 2 !== 0;
  return even;
}

// ? Genero funzione per definire se la scelta dell'utente è dispari

// function isUserChoiceOdd(choice = "dispari") {
//     const isChoiceOdd =
// }
