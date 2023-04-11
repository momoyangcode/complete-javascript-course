'use strict';

//Select Elements
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

//Select buttons
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const diceImg = document.querySelector('.dice');
const currentScoreEl = document.querySelectorAll('.current-score');

// Start Conditions
let currentScore, currentPlayer, scores, playing;

const init = function () {
  currentScore = 0;
  currentPlayer = 0;
  scores = [0, 0];
  playing = true;

  current1El.textContent = 0;
  current0El.textContent = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;

  diceImg.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};
init();

//Function--Switch player
const switchPlayer = function () {
  document
    .querySelector(`.player--${currentPlayer}`)
    .classList.toggle('player--active');
  currentScoreEl[currentPlayer].textContent = 0;
  currentScore = 0;
  currentPlayer === 0 ? (currentPlayer = 1) : (currentPlayer = 0);
};

btnRoll.addEventListener('click', function () {
  if (playing) {
    //Generate a random number between 1 and 6;
    const dice = Math.trunc(Math.random() * 6) + 1;

    //Display the dice
    diceImg.classList.remove('hidden');
    diceImg.src = `dice-${dice}.png`;

    //Check if dice is 1?
    if (dice !== 1) {
      currentScore += dice;
      currentScoreEl[currentPlayer].textContent = currentScore;
    } else {
      //if dice is 1, switch player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    //Add the current score to the current player's score.
    scores[currentPlayer] += currentScore;
    document.getElementById(`score--${currentPlayer}`).textContent =
      scores[currentPlayer];

    //Check if score is bigger than 100?
    if (scores[currentPlayer] >= 100) {
      //Finish the game
      currentScoreEl[currentPlayer].textContent = 0;
      //Disable btnRoll and btnHold
      playing = false;

      document
        .querySelector(`.player--${currentPlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${currentPlayer}`)
        .classList.remove('player--active');
      diceImg.classList.add('hidden');
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);
