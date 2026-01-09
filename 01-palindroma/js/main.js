/* Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma */

// ? Creo prompt per permettere all'utente di inserire una parola

const userWord = prompt("Scrivi qui la tua parola...").trim().toLowerCase();

console.log("userWord:", userWord);

// ? Creo la funzione

reverseWord(userWord);

function reverseWord(word) {
  let reversedWord = "";

  for (let i = 0; i < word.length; i++) {
    const currentLetter = word[i];
    console.log(currentLetter);

    reversedWord = currentLetter + reversedWord;
  }

  return reversedWord;
}

const reversedWord = reverseWord(userWord);

console.log("reverseWord:", reverseWord(userWord));

// ? Se la reverseWord è uguale a userWord allora la parola è palindroma

const outputMessage1 = "La parola inserita è palindroma";

const outputMessage2 = "La parola inserita non è palindroma";

if (reversedWord === userWord) {
  console.log(reversedWord === userWord);

  alert(outputMessage1);
  console.log(outputMessage1);

  // ? Altrimenti..
} else {
  console.log(reversedWord === userWord);
  alert(outputMessage2);
  console.log(outputMessage2);
}
