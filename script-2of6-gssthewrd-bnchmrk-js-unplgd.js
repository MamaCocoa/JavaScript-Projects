const guessedLettersElement = document.querySelector(".guessed-letters");
const guessLetterButton = document.querySelector(".guess");
const letterInput = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuessesElement = document.querySelector(".remaining");
const remainingGuessesSpan = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const playAgainButton = document.querySelector(".play-again");

const word = "magnolia";

const placeholder = function (word) {
    const placeholderLetters = [];
    for (const letter of word) {
      console.log(letter);
      placeholderLetters.push("●");
    }
    wordInProgress.innerText = placeholderLetters.join("");
};
//Call the function and pass it the word variable as the argument. 
//You should see 8 circle symbols on the screen, one for each letter 
//in the word “magnolia.” Hint: You’ll need to use an array and then 
//join it back to a string using the .join("") method.placeholder(word);

guessLetterButton.addEventListener("click", function (e) {
  e.preventDefault();
  const guess = letterInput.value;
  console.log(guess);
  letterInput.value = "";
});

//Because you’re working with a form, you want to prevent 
//the default behavior of clicking a button, the form submitting, 
//and then reloading the page. To prevent this reloading behavior, 
//add this line of code at the top of the callback function: e.preventDefault();.