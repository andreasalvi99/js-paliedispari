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

console.log("reverseWord:", reverseWord(userWord));
