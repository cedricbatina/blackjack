let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let messageEl = document.getElementById("message-el");
let message = "";
let cards = [];
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");

function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
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
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack!";
  } else {
    message = "You're out of the game!";
  }
  messageEl.textContent = message;
}

function newCard() {
  let card = getRandomCard();
  sum += card;
  cards.push(card);
  renderGame();
}
