'use strict';

//select Element

const numberEl = document.querySelector('.number');
const guessEl = document.querySelector('.guess');
const messageEl = document.querySelector('.message');
const highscoreEl = document.querySelector('.highscore');
const scoreEl = document.querySelector('.score');
const checkBtn = document.querySelector('.check');
const againBtn = document.querySelector('.again');
const bodyEl = document.querySelector('body');

//Start point

// set a random number between 1 to 20;
let myNum = Math.floor(Math.random() * 20) - 1;

// Set variables for start
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  messageEl.textContent = message;
};

function check() {
  const guess = Number(guessEl.value);

  //When there is no input
  if (!guess) {
    displayMessage('⛔️ No Number');
  }
  //When the guess is not correct
  else if (guess !== myNum) {
    if (score > 0) {
      score--;
      displayMessage(guess < myNum ? 'Too Low 📉' : 'Too High 📉');
      scoreEl.textContent = score;
    } else {
      displayMessage('😔You lost the game!');
    }
  }
  //when the guess is correct
  else if (guess === myNum) {
    numberEl.textContent = myNum;
    numberEl.style.width = '30rem';
    displayMessage('🎉You got a correct number!');
    if (score > highScore) {
      highScore = score;
      highscoreEl.textContent = highScore;
    }
    bodyEl.style.backgroundColor = '#60b347';
  }
}

function again() {
  myNum = Math.floor(Math.random() * 20) - 1;
  score = 20;
  scoreEl.textContent = score;
  messageEl.textContent = 'Start guessing';
  numberEl.textContent = '?';
  guessEl.value = '';
  bodyEl.style.backgroundColor = '#222';
  numberEl.style.width = '15rem';
}

checkBtn.addEventListener('click', check);
againBtn.addEventListener('click', again);
