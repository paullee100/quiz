import { definitionQuestions } from "./definitions.js";
import { exponentQuestions } from "./exponents.js";
import { primeNumberQuestions } from "./primeNumbers.js";
import { pemdasQuestions } from "./pemdas.js";
import { factorQuestions } from "./factors.js";

const app = document.getElementById("app");
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const explanation = document.getElementById("explanation");
const currentNum = document.getElementById("currentNum");

let currentQuestionIndex = 0;
let score = 0;
let totalScore = 0;
let currentQuestionNum = 1;
let totalQuestions = 0;

// User decides which quiz they want to take
// All the current available quizzes
const questions = []
questions.push(definitionQuestions, exponentQuestions, primeNumberQuestions, pemdasQuestions, factorQuestions, ["Time Table"]);
// Keep track of what quiz they are on.
let quizId;

// For fun to show how long the user takes to finish.
let hour = 0;
let minute = 0;
let second = 0;
let count = 0;
let timer = false;

function chooseWhatToQuizOn() {
    resetState();
    questionElement.innerHTML = "Choose Which Quiz You Want To Study In, Marko"
    createStartButtons('Multiplication Table', -1)
    createStartButtons('Definitions', 0);
    createStartButtons('Exponents', 1);
    createStartButtons('Prime Numbers', 2);
    createStartButtons('PEMDAS', 3);
    createStartButtons('Factors', 4);
}

function createStartButtons(quizName, quizNum) {
    const quizButton = document.createElement('button');
    quizButton.innerHTML = quizName;
    quizButton.classList.add('btn');
    if (quizNum > -1) {
        quizButton.addEventListener('click', () => startQuiz(quizNum));
    } else {
        quizButton.addEventListener('click', createTimeTable);
    }
    answerButtons.appendChild(quizButton)
}

function startQuiz(quizNum) {
    includeAddEventListenerToNextButton();
    quizId = quizNum;
    currentQuestionIndex = 0;
    score = 0;
    totalScore = questions[quizId].length;
    currentQuestionNum = 1;
    totalQuestions = questions[quizId].length;
    nextButton.innerHTML = "Next";
    shuffle(questions[quizId]);
    showQuestion(questions[quizId]);
    timer = true;
    startStopWatch();
}

function createTimeTable() {
    resetState();
    app.style.width = '750px';
    app.style.maxWidth = '750px';
    totalScore = 144;
    totalQuestions = 1;
    currentNum.innerHTML = '1/1';
    questionElement.innerHTML = 'Fill in the multiplication table';
    const container = document.createElement('div');
    
    for (let i = 0; i < 13; i++) {
        const row = document.createElement('div');
        row.className = 'row';
        row.id = 'row' + i;

        for (let j = 0; j < 13; j++) {
            let box;
            if (i == 0 || j == 0) {
                box = document.createElement('div');
                box.className ='box';
                box.innerHTML = `${i+j}`;
            } else {
                box = document.createElement('input');
                box.className ='box';
                box.classList.add('timeinput');
            }
            box.setAttribute('autocomplete', 'off');
            box.id = 'box' + (i*j);
            row.appendChild(box);
        }

        container.appendChild(row);
    }

    answerButtons.appendChild(container);

    timer = true;
    startStopWatch();
    nextButton.style.display = "block";
    nextButton.addEventListener('click', finishTimeTable);
}

function finishTimeTable() {
    if (!confirm('Click "OK" to see your final result')) {
        return;
    }
    const table = answerButtons.firstChild;
    // Get the rows of the gridbox table
    for (let i = 1; i < table.childNodes.length; i++) {
        const row = table.childNodes[i];
        // Get the column for the boxes in the current row
        for (let j = 1; j < table.childNodes.length; j++) {
            if (parseInt(row.childNodes[j].value, 10) === i*j) {
                row.childNodes[j].classList.add("correct");
                score++;
            } else {
                row.childNodes[j].classList.add("incorrect");
            }
            row.childNodes[j].disabled = true;
        }
    }
    nextButton.innerHTML = 'See Final Result'
    nextButton.removeEventListener('click', finishTimeTable);
    includeAddEventListenerToNextButton();
}

function startStopWatch() {
    if (timer) {
        count++;

        if (count == 100) {
            second++;
            count = 0;
        }
        if (second == 60) {
            minute++;
            second = 0;
        }
        if (minute == 60) {
            hour++;
            minute = 0;
            second = 0;
        }
        setTimeout(startStopWatch, 10);
    }
}

// Create the question one at a time
function showQuestion(quizCategory) {
    resetState();
    // A way to display the current question that the user is in
    // Displays the total number of questions to the user.
    currentNum.innerHTML = `${currentQuestionNum}/${quizCategory.length}`;
    // Gets the current question from the array.
    let currentQuestion = quizCategory[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    // Get the type of the question
    let questionType = currentQuestion.type;

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
    timer = false;
    const hourString = hour < 10 ? "0" + hour: hour;
    const minuteString = minute < 10 ? "0" + minute: minute;
    const secondString = second < 10 ? "0" + second: second;
    questionElement.innerHTML = `You scored ${score} out of ${totalScore}!\n${Math.round((score/totalScore)*100)}%`
    questionElement.style.textAlign = 'center';

    const statement = document.createElement('h2');
    statement.innerHTML = 'You took: ';
    statement.style.textAlign = 'center';

    const timeElement = document.createElement('h2');
    timeElement.innerHTML = hourString + ":" + minuteString + ":" + secondString;
    timeElement.style.textAlign = 'center';
    
    const secondStatement = document.createElement('h2');
    secondStatement.innerHTML = 'to finish the quiz!';
    secondStatement.style.textAlign = 'center';

    answerButtons.appendChild(statement);
    answerButtons.appendChild(timeElement);
    answerButtons.appendChild(secondStatement);
    answerButtons.style.marginTop = '30px';

    nextButton.innerHTML = "Start Quiz Over";
    nextButton.style.display = "block";
}

function handleNextButton() {
    // Increment counter to get the next question in the array.
    currentQuestionIndex++;
    // Increment counter to update the current question number.
    currentQuestionNum++;
    // Check whether or not there are any more questions left
    // If not, show the final score.
    if (currentQuestionIndex < totalQuestions) {
        showQuestion(questions[quizId]);
    } else {
        showScore();
    }
}

function includeAddEventListenerToNextButton() {
    // Handles the button to display the next button.
    nextButton.addEventListener("click", () => {
        if (currentQuestionIndex < totalQuestions) {
            handleNextButton();
        } else {
            // startQuiz();
            location.reload();
        }
    });
}

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
// startQuiz();
chooseWhatToQuizOn();