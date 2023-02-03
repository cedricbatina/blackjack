let firstCard = 10;
let secondCard = 9;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";

//let game = document.getElementById("game");
let messageEl = document.getElementById("message-el");
console.log(messageEl);
messageEl.innerHTML = "Want to play a round?";
//game.appendChild(messageEl);
//let cards = document.getElementById("cards");
//let cardsSum = document.getElementById("cardsSum");

function startGame() {
  if (sum < 21) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    hasBlackJack = true;
    message = "Wohoo! You've got Blackjack!";
  } else {
    message = "You're out of the game!";
  }
  console.log((messageEl = message));
  messageEl.textContent = message;
}
