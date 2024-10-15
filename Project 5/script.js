let random = Math.floor(Math.random() * 100) + 1;

const submit = document.querySelector('#subt');
const userInput = document.querySelector('.guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHigh');
const wrapper = document.querySelector('#wrapper');

let previousGuesses = [];
let numOfGuesses = 1;
let playGame = true;

if (playGame) {
    submit.addEventListener('click', (e) => {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    });
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert("Please Enter A Valid Number");
    } else if (guess < 1) {
        alert("Please Enter A Number Greater Than 0");
    } else if (guess > 100) {
        alert("Please Enter A Number Less Than 101");
    } else {
        previousGuesses.push(guess);
        if (numOfGuesses === 11) {
            displayGuess(guess);
            displayMessage(`Game Over! The correct number was ${random}.`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if (guess === random) {
        displayMessage(`You guessed it right!`);
        endGame();
    } else if (guess < random) {
        displayMessage(`Your guess is too low.`);
    } else {
        displayMessage(`Your guess is too high.`);
    }
}

function displayGuess(guess) {
    userInput.value = '';
    guessSlot.innerHTML += `${guess}  `;
    numOfGuesses++;
    remaining.textContent = `${11 - numOfGuesses}`;
}

function displayMessage(message) {
    lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
    userInput.disabled = true;
    const p = document.createElement('p');
    p.classList.add('button');
    p.innerHTML = 'Start New Game';
    wrapper.appendChild(p);
    p.addEventListener('click', () => {
        resetGame();
    });
}

function resetGame() {
    random = Math.floor(Math.random() * 100) + 1;
    previousGuesses = [];
    numOfGuesses = 1;
    guessSlot.innerHTML = '';
    remaining.textContent = '10';
    lowOrHigh.innerHTML = '';
    userInput.disabled = false;
    userInput.value = '';
    document.querySelector('.button').remove();
}
