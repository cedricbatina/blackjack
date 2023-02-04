let player = {
  name: "Player",
  chips: 100,
};

let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let messageEl = document.getElementById("message-el");
let message = "";
let cards = [];
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");
let startButton = document.querySelector("#startButton");
let playerEl = document.getElementById("player-el");
let newCardButton = document.getElementById("newCardButton");
startButton.textContent = "START GAME";

newCardButton.textContent = "NEW CARD";
playerEl.textContent = player.name + ":  " + player.chips + " " + "€";

function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  startButton.textContent = "START GAME";

  newCardButton.textContent = "NEW CARD";
  renderGame();
}
function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}

function renderGame() {
  cardsEl.textContent = "Cards: ";
  for (i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
  sumEl.textContent = "Sum: " + sum;
  if (sum < 21) {
    isAlive = true;
    hasBlackJack = false;
    startButton.textContent = "RENDER GAME";

    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    hasBlackJack = true;
    player.chips += 100;
    playerEl.textContent = player.name + ":  " + player.chips + " " + "€";

    message = "Wohoo! You've got Blackjack!";
  } else {
    isAlive = false;
    hasBlackJack = false;
    startButton.textContent = "START GAME";
    player.chips -= 25;

    playerEl.textContent = player.name + ":  " + player.chips + " " + "€";

    message = "You're out of the game!";
    newCardButton.textContent = "GAME OVER";
  }
  messageEl.textContent = message;
  //return playerEl;
}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
  }
}

if (player.chips >= 1000) {
  messageEl.textContent = "Excellent, You win!";
  newCardButton.textContent = "CONGRATS";
  startButton.textContent = "START GAME";
} else if (player.chips < 0) {
  messageEl.textContent = "You ain't got no more chips!";
  newCardButton.textContent = "GAME OVER";
  startButton.textContent = "START GAME";
}
