//Elements
const cards = document.querySelectorAll('.help-card');
const yesButton = document.querySelector('.form-button-yes');
const noButton = document.querySelector('.form-button-no');
const nextButton = document.querySelector('.form-button-next');

const question = document.getElementById('question');
const questionNum = document.getElementById('question-num');


//Variables
const questions = ['Avez-vous le statut d’intermittent',
    'Votre activité a-t-elle été impactée pendant moins de 6 mois ?',
    'Bénéficiez-vous d’une allocation au régime général ?',
    'Avez-vous le régime d’assurance chômage ?',
    'Avez-vous des evenements qui n\'ont pas été annulé ?',
    'Etes-vous éligible au dispositif d\'activité partielle ?']

let printedCards = cards;
let questionLength = questions.length;
let questionNumber = 0;
let yesPressed = false;
let noPressed = false;


//Init
printQuestion();


//Events
nextButton.addEventListener('click', () => {
    if(questions.length > 1) {
        if(yesPressed || noPressed) {
            questionNumber++;
            questions.shift();
            printQuestion();
        }else {
            alert('Veuillez sélectionner une réponse avant de continuer.');
        }
        
    }else {
        printCards();
        yesButton.classList.add('display-none');
        noButton.classList.add('display-none');
        nextButton.classList.add('display-none');
        questionNum.classList.add('display-none');
        question.innerHTML = 'Retrouvez vos aides juste en dessous de ce questionnaire !';
    }
});

yesButton.addEventListener('click', () => {
    //console.log('YES CLICK');
    yesPressed = true;
});

yesButton.addEventListener('blur', () => {
    //console.log('YES BLUR');
    setTimeout(() => {
        yesPressed = false;
    }, 100);
    
});

noButton.addEventListener('click', () => {
    //console.log('NO CLICK');
    noPressed = true;
});

noButton.addEventListener('blur', () => {
    //console.log('NO BLUR');
    setTimeout(() => {
        noPressed = false;
    }, 100);
});


//Main
function printQuestion() {
    question.innerHTML = questions[0];
    questionNum.innerHTML = `Question ${questionNumber+1}/${questionLength}`;
}

function printCards() {
    for (let i = 0; i < 4; i++) {
        let cardNum = Math.floor(Math.random() * printedCards.length);
        printedCards = shuffle(printedCards);
        let card = printedCards[cardNum];
        //console.log(card);
        card.classList.remove('display-none');
    }
}

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}