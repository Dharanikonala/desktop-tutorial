const questions = [
    {
        question: "Question 1: What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        correctAnswer: "4"
    },
    
    {
        question: "Question 2: Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Venus", "Jupiter"],
        correctAnswer: "Mars"
    },
    {
        question: "Question 3: Which gas do plants absorb from the atmosphere?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        correctAnswer: "Carbon Dioxide"
    },
    {
        question: "Question 4: What is the capital of France?",
        options: ["Berlin", "Madrid", "Rome", "Paris"],
        correctAnswer: "Paris"
    },
    {
        question: "Question 5: Which programming language is used for web development?",
        options: ["Java", "Python", "JavaScript", "C++"],
        correctAnswer: "JavaScript"
    },

];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.querySelector(".question");
const optionsElements = document.querySelectorAll(".option input");
const submitButton = document.getElementById("submit-btn");
const scoreElement = document.getElementById("score");

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElements.forEach((option, index) => {
        option.value = currentQuestion.options[index];
        option.parentElement.querySelector("span").textContent = currentQuestion.options[index];
    });
}

function checkAnswer() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (!selectedAnswer) {
        alert("Please select an answer.");
        return;
    }
    if (selectedAnswer.value === questions[currentQuestionIndex].correctAnswer) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showScore();
    }
}

function showScore() {
    questionElement.textContent = "Quiz completed!";
    optionsElements.forEach((option) => {
        option.style.display = "none";
    });
    submitButton.style.display = "none";
    scoreElement.textContent = `Your Score: ${score} out of ${questions.length}`;
}

loadQuestion();
submitButton.addEventListener("click", checkAnswer);
