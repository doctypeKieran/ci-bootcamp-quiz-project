// DOM Elements
const quizContainer = document.getElementById('quiz-container');
const nextButton = document.getElementById('next-button');
const correctAnswers = document.getElementById('correct-answers');
const incorrectAnswers = document.getElementById('incorrect-answers');
const restartQuizBtn = document.getElementById('restart-quiz-btn');

// Variables for correct and incorrect answers
let numberOfCorrectAnswers = 0;
let numberOfIncorrectAnswers = 0;

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
    },
    {
        question: "What animal is known as 'the king of the jungle'?",
        options: ["Lion", "Tiger", "Jaguar", "Elephant", "Monkey"],
        correctAnswer: "Lion"
    },
    {
        question: "What year was Roald Dahl born?",
        options: ["2001", "1916", "1991", "1960"],
        correctAnswer: "1916"
    },
    {
        question: "How many planets are in the solar system?",
        options: ["7", "9", "4", "8"],
        correctAnswer: "8"
    },
    {
        question: "What house is Harry Potter in?",
        options: ["Hufflepuff", "Slytherin", "Gryffindor", "Ravenclaw"],
        correctAnswer: "Gryffindor"
    },
    {
        question: "How many Harry Potter books are there?",
        options: ["6", "10", "9", "7"],
        correctAnswer: "7"
    },
    {
        question: "How many World Cups have Brazil won?",
        options: ["3", "4", "5", "6", "7"],
        correctAnswer: "5"
    },
    {
        question: "In which city is the Eiffel Tower?",
        options: ["London", "Paris", "Rome", "Berlin", "Beijing"],
        correctAnswer: "Paris"
    },
    {
        question: "In which country will you find the Ancient Pyramids?",
        options: ["Germany", "China", "Egypt", "Morocco", "Australia"],
        correctAnswer: "Egypt"
    }
];

// Event Listeners

nextButton.addEventListener("click", loadNextQuestion);

restartQuizBtn.addEventListener("click", () => {
    currentQuestionIndex = 0;
    initialiseQuiz();
    numberOfCorrectAnswers = 0;
    numberOfIncorrectAnswers = 0;
    correctAnswers.innerText = numberOfCorrectAnswers;
    incorrectAnswers.innerText = numberOfIncorrectAnswers;
    restartQuizBtn.style.display = "none";
})

// Initialise the quiz
initialiseQuiz();

// Display the first question
function initialiseQuiz() {
    correctAnswers.innerText = numberOfCorrectAnswers;
    incorrectAnswers.innerText = numberOfIncorrectAnswers;
    displayQuestion(questions[currentQuestionIndex]);
}

function displayQuestion(questionObj) {
    // Clear the current question from the screen
    quizContainer.innerHTML = "";

    // Create a h2 element
    const questionElement = document.createElement("h2");
    // Set the innerText of the h2 element with the value of the question property
    questionElement.innerText = questionObj.question;

    // Display the question on the screen
    quizContainer.appendChild(questionElement);

    // Display all options as buttons using the createOptionButton function
    questionObj.options.forEach((option) => {
        const button = createOptionButton(option);
        quizContainer.appendChild(button);
    });

    nextButton.style.display = "inline-block";
}

function createOptionButton(option) {
    // Dynamically create button element
    const button = document.createElement('button');
    // Set the button text to the option
    button.innerText = option;
    // Style the button with Bootstrap classes
    button.classList.add("btn", "btn-outline-primary", "mt-2");
    // Add event listeners to handle click events
    button.addEventListener("click", () => handleOptionClick(option));
    return button;
}

function handleOptionClick(optionSelected) {
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;
    if (optionSelected === correctAnswer) {
        const h1 = document.createElement('h1');
        h1.classList.add('mt-5');
        h1.innerText = "Correct!!!";
        quizContainer.appendChild(h1);
        numberOfCorrectAnswers++;
        correctAnswers.innerText = numberOfCorrectAnswers;
    } else {
        const h1 = document.createElement('h1');
        h1.classList.add('mt-5');
        h1.innerText = `You plonker Rodney! The correct answer was ${correctAnswer}!`;
        quizContainer.appendChild(h1);
        numberOfIncorrectAnswers++;
        incorrectAnswers.innerText = numberOfIncorrectAnswers;
    }
}

function loadNextQuestion() {
    // Advance to the next question
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion(questions[currentQuestionIndex]);
    } else {
        endQuiz();
    }
}

function endQuiz() {
    quizContainer.innerHTML = `<h1>Game Over!!!</h1>`;
    restartQuizBtn.style.display = "inline-block";
    nextButton.style.display = "none";
}