'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;

const victoryMessage = [`Agbavi! 🔥`, `Xavi! 👏`, `Waravi! 🤯`, `Gavi! 😍`];

let score = Number(document.querySelector(".score").textContent);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value); 

//   When there is no input
  if (!guess) {
    document.querySelector(".message").textContent = `🚫 Not a Number!`;

    // When the player makes a right guess
  } else if( guess === secretNumber) {
    document.querySelector(".message").textContent = victoryMessage[Math.trunc(Math.random() * victoryMessage.length)];
    document.querySelector(".highscore").textContent = Number(document.querySelector(".highscore").textContent) + score;

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    // When the guess number is too low
  } else if (guess < secretNumber) {
    if (score < 2) {
        document.querySelector(".score").textContent = 0;
        document.querySelector(".message").textContent = `Game Over 😭`;
    }
    else {
        document.querySelector(".message").textContent = `Too Low! 📉`;
        score--;
        document.querySelector(".score").textContent = score;
    }
    
    // When the guess number is too high
  } else if (guess > secretNumber) {
    if (score < 2) {
        document.querySelector(".score").textContent = 0;
        document.querySelector(".message").textContent = `Game Over 😭`;
    } else {
        document.querySelector(".message").textContent = `Too High! 📈`;
        score--;
        document.querySelector(".score").textContent = score;
    }
  }
});


document.querySelector(".again").addEventListener("click", function() {
    window.location.reload(true);
})
