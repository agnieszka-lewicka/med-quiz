const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: "Jedna z najczęstszych chorób przenoszonych drogą płciową, powodowana przez drobnoustrój, który najlepiej rozwija się w środowisku beztlenowym o pH > 4,5 i temp 36°C, zakażenie obejmuje narządy płciowe i układ moczowy zarówno kobiet jak i mężczyzn. Głównym siedliskiem drobnoustroju jest pochwa, okolice cewki moczowej i gruczołów przycewkowych. Powoduje powstawanie szaro-żółtych pienistych upławów o nieprzyjemnym zapachu. Powyższy opis dotyczy infekcji:",
        choice1: "Neisseria gonorrhoea, którą leczy się pochodnymi penicyliny",
        choice2: "HIV, którą leczy się lekami antyretrowirusowymi",
        choice3: "Trichomonas vaginalis, którą leczy się metronidazolem",
        choice4: "Candida albicans, którą leczy się klotrimazolem",
        choice5: "żadne z wymienionych",
        answer: 3
    },

    {
        question: "Ordynator u operowanej pacjentki rozpoznał martwicze zapalenie powięzi. Które z poniższych stwierdzeń dotyczących tego powikłania pooperacyjnego są prawdziwe? 1) przyczyną jest monobakteryjne zakażenie paciorkowcem hemolizującym; 2) schorzenie zawsze obejmuje mięśnie; 3) postępowanie obejmuje usunięcie zmienionych niedokrwionych tkanek w całości; 4) ranę najlepiej pozostawić otwartą; 5) w schorzeniu tym korzystna może być tlenoterapia hiperbaryczna. Prawidłowa odpowiedź to",
        choice1: "1,2,3",
        choice2: "1,2,4",
        choice3: "1,2,5",
        choice4: "2,3,4",
        choice5: "3,4,5",
        answer: 5
    },

    {
        question: "W Polsce szczepienia przeciwko zakażeniu HPV są rekomendowane u: 1) dziewcząt w wieku 9-10 lat; 2) chłopców w wieku 14-16 lat; 3) kobiet po 30 roku życia, które przebyły CIN3; 4) kobiet po 35 roku życia, które przebyły raka szyjki macicy; 5) dziewcząt 12-14 letnich, które nie rozpoczęły współżycia. Prawidłowa odpowiedź to:",
        choice1: "1,2,3,4",
        choice2: "2,3,4,5",
        choice3: "1,3",
        choice4: "1,3,4,5",
        choice5: "tylko 5",
        answer: 5
    },
]

// CONSTANTS

const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    console.log(availableQuestions);
    getNewQuestion();
};

getNewQuestion = () => {
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach( choice => {
        const number = choice.dataset["number"];
        choice.innerText = currentQuestion["choice" + number];
    });

    availableQuestions.splice(questionIndex, 1);

    acceptingAnswers = true;
};

startGame();