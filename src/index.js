
const minNumb = 1;
const maxNumb = 100;
const maxGuesses = 10;

let startTime;
let endTime;
let totalGuesses;

let randomNumber = Math.floor(Math.random() * (maxNumb - minNumb + 1)) + minNumb;

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;

let computerGuess = -1;
let guessHistory = [];





const checkGuess = () => {
  const userGuess = Number(guessField.value);
  if (guessCount === 1) {
    guesses.textContent = 'Previous guesses: ';
    startTime = new Date();
  }
  guesses.textContent += `${userGuess} `;

  if (userGuess === randomNumber) {
    lastResult.textContent = 'Congratulations! You got it right!';
    lastResult.style.backgroundColor = 'green';
    lowOrHi.textContent = '';
    playerGuesses = guesses.textContent;
    endTime = new Date();
    setGameOver();
  } else if (guessCount === maxGuesses) {
    lastResult.textContent = '!!!GAME OVER!!!';
    lowOrHi.textContent = '';
    endTime = new Date();
    totalGuesses = guessCount;
    setGameOver();
  } else {
    lastResult.textContent = 'Wrong!';
    lastResult.style.backgroundColor = 'red';
    if (userGuess < randomNumber) {
      lowOrHi.textContent = 'Last guess was too low!';
    } else if (userGuess > randomNumber) {
      lowOrHi.textContent = 'Last guess was too high!';
    }
  }

  guessCount++;
  guessField.value = '';
  guessField.focus();
};

guessSubmit.addEventListener('click', function(){
  checkGuess();
  compPlayer();
});

const setGameOver= () => {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement('button');
  resetButton.textContent = 'Start new game';
  document.body.append(resetButton);
  resetButton.addEventListener('click', resetGame);
  const elapsedTime = (endTime - startTime) / 1000;
    const elapsedTimeParagraph = document.createElement('p');
    elapsedTimeParagraph.textContent = `Time Used: ${elapsedTime} seconds`;
    document.querySelector('.resultParas').appendChild(elapsedTimeParagraph);

  if(lastResult.textContent === 'Congratulations! You got it right!') {
    const guessesParagraph = document.createElement('p');
    guessesParagraph.textContent = `Your guesses: ${guessCount}`;
    document.querySelector('.resultParas').appendChild(guessesParagraph);
  }
};

const resetGame =() => {
  guessCount = 1;

  const resetParas = document.querySelectorAll('.resultParas p');
  for (const resetPara of resetParas) {
    resetPara.textContent = '';
  }

  resetButton.parentNode.removeChild(resetButton);

  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = '';
  guessField.focus();

  lastResult.style.backgroundColor = 'white';

  randomNumber = Math.floor(Math.random() * (maxNumb - minNumb + 1)) + minNumb;
};



const compPlayer = () => {
    //range of possible numbers
    let min = minNumb;
    let max = maxNumb;

    //number of guesses
    let guessCount = 0;

     guessCount = 0;
    guessHistory = [];
    randomNumber = Math.floor(Math.random() * (maxNumb - minNumb + 1)) + minNumb;


    // while the guess is not correct
    while (computerGuess !== randomNumber) {
        // increment the number of guesses
        guessCount++;
        computerGuess = Math.floor(Math.random() * (max - min + 1)) + min;
        // save the guess to the history
        guessHistory.push(computerGuess);
        if (computerGuess === randomNumber) {
            console.log(`It took the computer ${guessCount} guesses.`);
            console.log(`Computer guess history: ${guessHistory}`);
            break;
        } else if (computerGuess < randomNumber) {
            min = computerGuess + 1;
        } else {
            max = computerGuess - 1;
        }
    }

};



