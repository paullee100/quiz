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

// Create the question one at a time
function showQuestion() {
    resetState();
    // A way to display the current question that the user is in
    // Displays the total number of questions to the user.
    currentNum.innerHTML = `${currentQuestionNum}/${questions.length}`;
    // Gets the current question from the array.
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    // Get the type of the question
    let questionType = questions[currentQuestionIndex].type;

    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    switch (questionType) {
        case "multipleChoice":
            // If the question type is multiple choice
            // Shuffle the answers of the current question
            shuffle(currentQuestion.answers);

            // Create buttons equal to the number of available answers to the question
            // Can be more than 4 or less
            // Insert the multiple choice answers based on the index of the questions array
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
            break;
        case "shortAnswer":
            const input = document.createElement("input");
            input.placeholder = "Type your answer in this box"
            input.classList.add("inp");
            const button = document.createElement("button");
            button.innerHTML = "Confirm";
            button.disabled = true;
            button.classList.add("btn");

            answerButtons.append(input);
            answerButtons.append(button);
            // get the keywords that answers the question.
            button.dataset.answerlist = currentQuestion.answers;
            input.addEventListener("input", function(e) {
                if (input.value.length == 0) {
                    button.disabled = true;
                } else {
                    button.disabled = false;
                }
            });
            button.addEventListener("click", (e) => checkAnswer(e, input));
            break;
    }
    // Add the explanation to the answer to the current question.
    explanation.innerHTML = currentQuestion.explanation;
}

// Reset the current state to allow the content to be filled with the next question
function resetState() {
    nextButton.style.display = "none";
    explanation.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

// When selecting an answer in a multiple choice question
function selectAnswer(e) {
    const selectedBtn = e.target;
    // Checks if the selected answer is correct.
    const isCorrect = selectedBtn.dataset.correct === "true";
    // When the user clicks on one of the answer
    // Check if that answer is correct
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    // This is to ensure that the correct answer is green and if the user
    // selected a wrong answer, then the current selection will display red
    // Disable the button so the user would not be able to select another answer
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    // Display the explanation of the answer on the current question.
    explanation.style.display = "block";
    // Display the next button to show the next question or show the final result.
    nextButton.style.display = "block";
}

// When selecting an answer in a short answer question
function checkAnswer(e, textBox) {
    const confirmBtn = e.target;
    const answers = confirmBtn.dataset.answerlist.split(",");
    const total = answers.length;
    let correctTerms = 0;

    const textContent = textBox.value.split(' ');
    textContent.forEach(text => {
        if (answers.includes(text)) {
            correctTerms++;
            const index = answers.indexOf(text);
            if (index > -1) answers.splice(index, 1);
        }
    });
    // If the user gets a vast majority of the key word in their explanation, then they are correct.
    if (correctTerms/total >= 0.8) {
        textBox.classList.add("correct");
        score++;
    } else {
        textBox.classList.add("incorrect");
    }

    // This is to ensure that the correct answer is green and if the user
    // selected a wrong answer, then the current selection will display red
    // Disable the button so the user would not be able to select another answer
    Array.from(answerButtons.children).forEach(button => {
        button.disabled = true;
    });
    // Display the explanation of the answer on the current question.
    explanation.style.display = "block";
    // Display the next button to show the next question or show the final result.
    nextButton.style.display = "block";
}

// Final result to display the score that the user got after the quiz ended.
function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!\n${Math.round((score/questions.length)*100)}%`
    nextButton.innerHTML = "Start Quiz Over";
    nextButton.style.display = "block";
}

function handleNextButton() {
    // Increment counter to get the next question in the array.
    currentQuestionIndex++;
    // Increment counter to get the current question number.
    currentQuestionNum++;
    // Check whether or not there are any more questions left
    // If not, show the final score.
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

// Handles the button to display the next button.
nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        // startQuiz();
        location.reload();
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

// Driver Function
startQuiz();