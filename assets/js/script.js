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
        alert("CORRECT!");
    } else {
        alert("You plonker Rodney!");
    }
    loadNextQuestion();
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
    nextButton.classList.add("d-none");
}