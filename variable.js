const square_root = '\u221A';
const cube_root = '\u221B';
const fourth_root = '\u221C';

// Absolute Value Problems
const absoluteVal = [];
for (let i = 0; i < 2; i++) {
    let randomChance = Math.random() < 0.5 ? -1 : 1;
    absoluteVal.push(Math.floor(Math.random() * 1000 * randomChance))
}

let total = 0;
// Square Root Problems
const squareRoot = [];
for (let i = 0; i < 1; i++) {
    let randomNum = Math.floor(Math.random() * 100);
    for (let j = 0; j < randomNum; j++) {
        total += 2*j+1;
    }
    squareRoot.push(total);
    total = 0;
}
total = 1
// Cube Root Problems
const cubeRoot = [];
for (let i = 0; i < 1; i++) {
    let randomNum = Math.floor((Math.random() + 1) * 10);
    for (let j = 0; j < 3; j++) {
        total *= randomNum;
    }
    cubeRoot.push(total);
    total = 1;
}

// Fourth Root Problems
const fourthRoot = [];
for (let i = 0; i < 1; i++) {
    let randomNum = Math.floor(Math.random() * 10);
    for (let j = 0; j < 4; j++) {
        total *= randomNum;
    }
    fourthRoot.push(total);
    total = 1;
}

// console.log(absoluteVal);
// console.log(squareRoot);
// console.log(cubeRoot);

export const questions = [
    {
        type: "multipleChoice",
        question: "What is an integer?",
        answers: [
            { text: "Any positive or negative whole number, including zero. Integers do not include fractions (1/3), decimals (0.56), or mixed numbers (7*(3/4))", correct: true},
            { text: "Any integer that can be divided by 2 without leaving a remainder.", correct: false},
            { text: "Cannot be written as fractions or decimals because the number of decimal places is infinite and there is no recurring pattern of digits within the number.", correct: false},
            { text: "The basic building blocks of mathematics.", correct: false},
            { text: "None of the above", correct: false}
        ],
        explanation: "Integers are whole numbers including zero."
    },
    {
        type: "multipleChoice",
        question: "Which value is a prime number?",
        answers: [
            { text: "11", correct: true},
            { text: "4", correct: false},
            { text: "10", correct: false},
            { text: "100", correct: false}
        ],
        explanation: "A prime number is a number that can only be multiplied by itself, i.e., 11*1."
    },
    {
        type: "multipleChoice",
        question: "A perfect square is ",
        answers: [
            { text: "another way of writing a fractional exponent.", correct: false},
            { text: "a number that has an integer for its square root. There are 10 perfect squares from 1 to 100.", correct: true},
            { text: "a superscript number placed next to another number at the top right.", correct: false},
            { text: "a graph to see the distance between numbers", correct: false}
        ],
        explanation: "Result of the square root will equal to an integer value."
    },
    {
        type: "multipleChoice",
        question: "What is the value of " + square_root + "" + squareRoot[0] + "?",
        answers: [
            { text: "" + Math.sqrt(squareRoot[0]), correct: true},
            { text: "" + Math.sqrt(squareRoot[0]) / 2, correct: false},
            { text: "" + Math.sqrt(squareRoot[0]) + (squareRoot[0] % 100), correct: false},
            { text: "" + squareRoot[0], correct: false},
        ],
        explanation: Math.sqrt(squareRoot[0]) + " * " + Math.sqrt(squareRoot[0]) + " = " + squareRoot[0]
    },
    {
        type: "multipleChoice",
        question: "What is the value of " + cube_root + "" + cubeRoot[0] + "?",
        answers: [
            { text: "21", correct: false},
            { text: "" + Math.sqrt(cubeRoot[0]), correct: false},
            { text: "" + Math.cbrt(cubeRoot[0]), correct: true},
            { text: "40", correct: false},
        ],
        explanation: Math.cbrt(cubeRoot[0]) + " * " + Math.cbrt(cubeRoot[0]) + " * " + Math.cbrt(cubeRoot[0]) + " = " + (Math.cbrt(cubeRoot[0])*Math.cbrt(cubeRoot[0])) + " * " + Math.cbrt(cubeRoot[0]) + " = " + cubeRoot[0]
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
        question: "Which of the following values is a perfect square?",
        answers: [
            { text: "12", correct: false},
            { text: "25", correct: true},
            { text: "143", correct: false},
            { text: "24", correct: false}
        ],
        explanation: square_root + "25 = 5, which is an integer"
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
    {
        type: "multipleChoice",
        question: "What is the definition of a prime number?",
        answers: [
            { text: "A number that has an integer for its square root. There are 10 perfect squares from 1 to 100.", correct: false},
            { text: "Any positive or negative whole number, including zero. Integers do not include fractions (1/3), decimals (0.56), or mixed numbers (7*(3/4))", correct: false},
            { text: "Any integer that cannot be divided evenly by 2.", correct: false},
            { text: "Any whole number greater than 1 that has only two factors, itself and 1; that is, a number that can be divided evenly only by 1 and itself.", correct: true}
        ],
        explanation: "Definition is the green answer"
    },
    {
        type: "multipleChoice",
        question: "What is the definition of a composite number?",
        answers: [
            { text: "A superscript number placed next to another number at the top right.", correct: false},
            { text: "Any positive or negative whole number, including zero. Integers do not include fractions (1/3), decimals (0.56), or mixed numbers (7*(3/4))", correct: false},
            { text: "Cannot be written as fractions or decimals because the number of decimal places is infinite and there is no recurring pattern of digits within the number.", correct: false},
            { text: "Any whole number greater than 1 that has more than two different factors; in other words, any whole number that is not a prime number", correct: true}
        ],
        explanation: "Defintion is the green answer"
    },
    {
        type: "multipleChoice",
        question: "What is the definition of a even number?",
        answers: [
            { text: "Cannot be written as fractions or decimals because the number of decimal places is infinite and there is no recurring pattern of digits within the number.", correct: false},
            { text: "Any integer that can be divided by 2 without leaving a remainder.", correct: true},
            { text: "Any interger that cannot be divided evenly by 2", correct: false},
            { text: "A superscript number placed next to another number at the top right.", correct: false}
        ],
        explanation: "Definition is the green answer"
    },
    {
        type: "multipleChoice",
        question: "Rational numbers ",
        answers: [
            { text: "is a superscript number placed next to another number at the top right.", correct: false},
            { text: "cannot be written as fractions or decimals because the number of decimal places is infinite and there is no recurring pattern of digits within the number.", correct: false},
            { text: "include all integers, decimals, and fractions. Any terminating or repeating decimal number is a rational number.", correct: true},
            { texT: "cannot be written as fractions or decimals because the number of a decimal places is infinite and there is no recurring pattern or digits within the number.", correct: false}
        ],
        explanation: "Definition is the green answer"
    },
    {
        type: "multipleChoice",
        question: "Irrational numbers ",
        answers: [
            { text: "cannot be written as fractions or decimals because the number of decimal places is infinite and there is no recurring pattern of digits within the number.", correct: true},
            { text: "include all integers, decimals, and fractions. Any terminating or repeating decimal number is a rational number.", correct: false},
            { text: "are the basic building blocks of mathematics.", correct: false},
            { text: "are any number that uses a decimal point to show the part of the number that is less than one.", correct: false}
        ],
        explanation: "Definition is the green answer"
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
    {
        type: "shortAnswer",
        question: "What is 9 + 10 * 2",
        answers: [
            "29",
        ],
        explanation: "Using PEMDAS, multiplication would come first, then addition\n 9 + 10 * 2 = 9 + 20 = 29"
    }
];