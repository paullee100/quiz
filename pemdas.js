const square_root = '\u221A';
const cube_root = '\u221B';
const fourth_root = '\u221C';

// Absolute Value Problems //
const absoluteVal = [];
for (let i = 0; i < 2; i++) {
    let randomChance = Math.random() < 0.5 ? -1 : 1;
    absoluteVal.push(Math.floor(Math.random() * 1000 * randomChance))
}

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
const cubeRoot = getRootProblems(3, 10);

export const pemdasQuestions = [
    {
        type: "multipleChoice",
        question: "What is the value of " + square_root + "" + squareRoot[0] + "?",
        answers: [
            { text: Math.sqrt(squareRoot[0]), correct: true},
            { text: (Math.sqrt(squareRoot[0])+Math.floor(Math.random() * 10)+1), correct: false},
            { text: (Math.sqrt(squareRoot[0])-Math.floor(Math.random() * 10)-1), correct: false},
            { text: (Math.sqrt(squareRoot[0])+Math.ceil(Math.random() * 10)+21), correct: false},
        ],
        explanation: Math.sqrt(squareRoot[0]) + " * " + Math.sqrt(squareRoot[0]) + " = " + squareRoot[0]
    },
    {
        type: "multipleChoice",
        question: "What is the value of " + cube_root + "" + cubeRoot[0] + "?",
        answers: [
            { text: "21", correct: false},
            { text: Math.round(Math.sqrt(cubeRoot[0])), correct: false},
            { text: Math.cbrt(cubeRoot[0]), correct: true},
            { text: "40", correct: false},
        ],
        explanation: Math.cbrt(cubeRoot[0]) + " * " + Math.cbrt(cubeRoot[0]) + " * " + Math.cbrt(cubeRoot[0]) + " = " + (Math.cbrt(cubeRoot[0])*Math.cbrt(cubeRoot[0])) + " * " + Math.cbrt(cubeRoot[0]) + " = " + cubeRoot[0]
    },
    {
        type: "multipleChoice",
        question: "Which of the following is NOT an operation",
        answers: [
            { text: "Addition", correct: false},
            { text: "Subtraction", correct: false},
            { text: "Roots", correct: false},
            { text: "Multiplication", correct: false},
            { text: "Division", correct: false},
            { text: "Exponents", correct: false},
            { text: "Parentheses", correct: false},
            { text: "None of the above", correct: true}
        ],
        explanation: "Remember PEMDAS (Parentheses, Exponent, Multiplication, Division, Addition, and Subtraction) and Root is the inverse of Exponent"
    },
    {
        type: "multipleChoice",
        question: "What is the value of " + cube_root + "" + cubeRoot[1] + "?",
        answers: [
            { text: Math.cbrt(cubeRoot[1]), correct: true},
            { text: Math.round(Math.sqrt(cubeRoot[1])), correct: false},
            { text: Math.round(Math.pow(cubeRoot[1], 1/4)), correct: false},
            { text: cubeRoot[1], correct: false}
        ],
        explanation: Math.cbrt(cubeRoot[1]) + " * " + Math.cbrt(cubeRoot[1]) + " * " + Math.cbrt(cubeRoot[1]) + " = " + (Math.cbrt(cubeRoot[1])*Math.cbrt(cubeRoot[1])) + " * " + Math.cbrt(cubeRoot[1]) + " = " + cubeRoot[1]
    },
    {
        type: "shortAnswer",
        question: "What does 9 + 10 * 2 =?",
        answers: [
            "29",
        ],
        explanation: "Using PEMDAS, multiplication would come first, then addition\n 9 + 10 * 2 = 9 + 20 = 29"
    },
    {
        type: "multipleChoice",
        question: "What does |" + absoluteVal[0] + "| = ?",
        answers: [
            { text: "" + Math.abs(absoluteVal[0]), correct: true},
            { text: "0", correct: false},
            { text: "" + -Math.abs(absoluteVal[0]), correct: false},
            { text: "None of the above", correct: false}
        ],
        explanation: "Absolute value is the distance from zero, so it will always be a positive number."
    },
    {
        type: "multipleChoice",
        question: "What does |" + absoluteVal[1] + "| = ?",
        answers: [
            { text: "" + -Math.abs(absoluteVal[1]), correct: false},
            { text: "" + Math.abs(absoluteVal[1]), correct: true},
            { text: "0", correct: false},
            { text: "None of the above", correct: false}
        ],
        explanation: "Absolute value is the distance from zero, so it will always be a positive number."
    },
    {
        type: "multipleChoice",
        question: "Which of the following is equivalent to 5*3?",
        answers: [
            { text: "5+5+5", correct: true},
            { text: "3+3+3+3+3", correct: true},
            { text: "5*5*5", correct: false},
            { text: "3*3*3*3*3", correct: false},
            { text: "All of the above", correct: false},
            { text: "None of the above", correct: false}
        ],
        explanation: "Add them up. 5*3 is 15. 5+5+5=10+5=15\n3+3+3+3+3=6+3+3+3=9+3+3=12+3=15"
    },
]