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

guessSubmit.addEventListener('click', checkGuess);

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




let password = "cheat";
let input = "";

//week 3

//i
// Listen for keydown events
document.addEventListener("keydown", function(event) {
    input += event.key;
     // Check if it matches the password
    checkPassword();
});

// Function to check if the input matches the password
function checkPassword() {
    if (input === password) {
        alert("Cheat code activated!");
        input = "";
    }
}

//ii
document.addEventListener("dblclick", function(event) {
  // Get the x and y coordinates
  let x = event.clientX;
  let y = event.clientY;

  // Log the coordinates to the console
  console.log("Double-click at x: " + x + ", y: " + y);
});

//iii
let touchElement = document.createElement("div");
touchElement.innerHTML = "Touch me";
touchElement.addEventListener("pointerdown", (event) => {
    if (event.pointerType === "touch") {
        console.log("Touch detected");
    }
});
document.body.appendChild(touchElement);



//iv
let idleTime = 0;
let message = document.createElement("div");
message.innerHTML = "Hurry Up!";
message.style.display = "none";
message.style.backgroundColor = "red";
document.body.appendChild(message);

//Increment the idle time counter every second.
let idleInterval = setInterval(() => {
    idleTime = idleTime + 1;
    if (idleTime > 14) { // 15 seconds
        message.style.display = "block";
    }
}, 1000);

document.onclick = (e) => {
  idleTime = 0;
  message.style.display = "none";
};


// Reset the timer on key press.
document.onkeydown = (e) => {
    idleTime = 0;
    message.style.display = "none";
};

//v



