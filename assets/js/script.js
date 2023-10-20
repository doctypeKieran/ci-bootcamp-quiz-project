// DOM Elements
const quizContainer = document.getElementById('quiz-container');
const nextButton = document.getElementById('next-button');

// State variables
let currentQuestionIndex = 0;

let questions = [
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Jupiter", "Mars", "Saturn"],
        correctAnswer: "Mars"
    },
    {
        question: "How many contintents are there?",
        options: ["5", "6", "7", "8", "9"],
        correctAnswer: "7"
    }
]

// Event Listeners

nextButton.addEventListener("click", loadNextQuestion);

// Initialise the quiz
initialiseQuiz();

// Display the first question
function initialiseQuiz() {
    displayQuestion(questions[currentQuestionIndex]);
}

function displayQuestion(questionObj) {
    quizContainer.innerHTML = "";

    const questionElement = document.createElement("h2");
    questionElement.innerText = questionObj.question;
}