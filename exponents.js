const square_root = '\u221A';

// Root Problems //
function getRootProblems(power, max) {
    let result = [];

    while (result.length < 3) {
        const x = Math.floor(Math.random() * (max-2+1)) + 2;
        const val = Math.pow(x, power);
        if (result.indexOf(val) === -1) result.push(val);
    }
    return result;
}

const squareRoot = getRootProblems(2, 50);

export const exponentQuestions = [
    {
        type: "multipleChoice",
        question: "Which of the following values is a perfect square?",
        answers: [
            { text: (squareRoot[1]+Math.floor(Math.random()*10)+1), correct: false},
            { text: squareRoot[1], correct: true},
            { text: (squareRoot[1]+Math.floor(Math.random()*100)+2), correct: false},
            { text: (squareRoot[1]-Math.floor(Math.random()*10)+1), correct: false}
        ],
        explanation: square_root + "" + squareRoot[1] + " =  " + Math.sqrt(squareRoot[1])  + ", which is an integer"
    },
    {
        type: "multipleChoice",
        question: "Which of the following value is equivalent to 4^10?",
        answers: [
            { text: "4*4*4*4*4*4*4*4*4*4", correct: true},
            { text: "10*10*10*10", correct: false},
            { text: "14", correct: false},
            { text: "4*10", correct: false}
        ],
        explanation: "Exponents is the number of the base number times the exponent amount of times"
    },

]