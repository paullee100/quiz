import { questions } from "./variable.js";

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const explanation = document.getElementById("explanation");
const currentNum = document.getElementById("currentNum");

let currentQuestionIndex = 0;
let score = 0;
let currentQuestionNum = 1;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    currentQuestionNum = 1;
    nextButton.innerHTML = "Next";
    shuffle(questions)
    showQuestion();
}

function showQuestion() {
    resetState();
    currentNum.innerHTML = `${currentQuestionNum}/${questions.length}`;
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    shuffle(currentQuestion.answers);

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
    explanation.innerHTML = currentQuestion.explanation;
}

function resetState() {
    nextButton.style.display = "none";
    explanation.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    explanation.style.display = "block";
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`
    nextButton.innerHTML = "Start Quiz Over";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    currentQuestionNum++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

/**
 * Shuffling using the Fisher-Yates Shuffle or Knuth Shuffle.
 */
function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain element to shuffle.
    while (currentIndex > 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

startQuiz();