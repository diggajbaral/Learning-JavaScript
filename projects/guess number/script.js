
let randomNumber = parseInt(Math.random() * 100 + 1)

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p')

// - - - //

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault()

        const guess = parseInt(userInput.value)
        // console.log(guess);
        validateGuess(guess) //
    })
}

// - Validate the Guess,

function validateGuess(guess) {

    if (isNaN(guess)) {
        alert('Please enter the valie number.')
    } else if (guess < 1) {
        alert('Please enter more then 1')
    } else if (guess > 100) {
        alert('Please enter less than 100')
    } else {
        prevGuess.push(guess)

        if (numGuess === 11) {
            displayGuess(guess)
            displayMessage(` GameOver, Random number was ${randomNumber} `)
            endGame()
        } else {
            displayGuess(guess);
            checkGuess(guess)
        }

    }
}
// - Check the Guess,

function checkGuess(guess) {

    if (guess === randomNumber) {
        displayMessage(`You guess it right`)
        endGame()
    } else if (guess < randomNumber) {
        displayMessage('Number is too low.')
    }
    else if (guess > randomNumber) {
        displayMessage('Number is too high.')
    }
}

// - Display Guess,

function displayGuess(guess) {

    userInput.value = '';
    guessSlot.innerHTML += `${guess} `
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`

}

// - Display message,

function displayMessage(message) {

    lowOrHi.innerHTML = `<h2>${message}</h2>`

}

// - End the game ;

function endGame() {

    userInput.value = '';
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame"> Start new Game </h2>`
    startOver.appendChild(p)
    playGame = false;
    newGame()

}

// - Start the new game,

function newGame() {

    const newGame = document.querySelector('#newGame')
    newGame.addEventListener('click', function(e) {

        randomNumber = parseInt(Math.random() * 100 + 1)

        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)

        playGame = true;
    })

}


