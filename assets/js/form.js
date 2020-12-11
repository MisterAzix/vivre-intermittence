//Elements
const cards = document.querySelectorAll('.help-card');
const yesButton = document.querySelector('.form-button-yes');
const noButton = document.querySelector('.form-button-no');

let printedCards = cards;

for (let i = 0; i < 4; i++) {
    let cardNum = Math.floor(Math.random()*printedCards.length);
    let card = printedCards[cardNum];
    printedCards.splice(cardNum, 1);
    card.classList.remove('display-none');
}
