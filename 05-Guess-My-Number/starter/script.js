'use strict';

//-----Selecting and Manipulating Elements-----//
/* console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '🎉 Correct Number!';

console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
 */

//-----Handling Click Events----//

function randomInFromInterval(max, min) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let number = randomInFromInterval(20, 1);

let score = 20;

let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //when there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔️ No Number!';
    displayMessage('⛔️ No Number!');
  }

  // when player win
  else if (guess === number) {
    // document.querySelector('.message').textContent = '🎊 Correct Number!';
    displayMessage('🎊 Correct Number!');
    document.querySelector('.number').textContent = number;

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  }

  //when guess is wrong
  else if (guess !== number) {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
      //   document.querySelector('.message').textContent =
      //     guess > number ? '📈 Too High' : '📉Too Low';
      displayMessage(guess > number ? '📈 Too High' : '📉Too Low');
    } else {
      document.querySelector('.score').textContent = 0;
      //   document.querySelector('.message').textContent = '😔 You lost the game';
      displayMessage('😔 You lost the game');
    }
  }

  //when guess is too high;
  //   else if (guess > number) {
  //     if (score > 1) {
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //       document.querySelector('.message').textContent = '📈 Too High';
  //     } else {
  //       document.querySelector('.score').textContent = 0;
  //       document.querySelector('.message').textContent = '😔 You lost the game';
  //     }
  //   }

  //   //when guess is too low
  //   else if (guess < number) {
  //     if (score > 1) {
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //       document.querySelector('.message').textContent = '📉Too Low';
  //     } else {
  //       document.querySelector('.score').textContent = 0;
  //       document.querySelector('.message').textContent = '😔 You lost the game';
  //     }
  //   }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.highscore').textContent = highScore;

  number = Math.trunc(Math.random() * 20) + 1;
  // highScore = 0;
  document.querySelector('.number').textContent = '?';
  //   document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
