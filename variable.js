const square_root = '\u221A';
const cube_root = '\u221B';
const fourth_root = '\u221C';

export const questions = [
    {
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
        question: "What is the value of " + square_root + "121?",
        answers: [
            { text: "11", correct: true},
            { text: "12", correct: false},
            { text: "13", correct: false},
            { text: "20", correct: false},
        ],
        explanation: "11 * 11 = 121"
    },
    {
        question: "What is the value of " + cube_root + "27?",
        answers: [
            { text: "1", correct: false},
            { text: "2", correct: false},
            { text: "3", correct: true},
            { text: "4", correct: false},
        ],
        explanation: "3 * 3 * 3 = 9 * 3 = 27"
    },
    {
        question: "How much paper(s) can a printer print out per minute if it takes 30 minutes to print out 25 papers?",
        answers: [
            { text: "0.63 paper per minute", correct: false},
            { text: "1.83 paper per minute", correct: false},
            { text: "0.83 paper per minute", correct: true},
            { text: "0.33 paper per minute", correct: false},
        ],
        explanation: "25/30 = 0.833333 or 0.83"
    },
    {
        question: "What does |4| = ?",
        answers: [
            { text: "-4", correct: false},
            { text: "0", correct: false},
            { text: "4", correct: true},
            { text: "None of the above", correct: false}
        ],
        explanation: "Absolute value is the distance from zero, so it will always be a positive number."
    },
    {
        question: "What does |-1000| = ?",
        answers: [
            { text: "-1000", correct: false},
            { text: "1000", correct: true},
            { text: "0", correct: false},
            { text: "None of the above", correct: false}
        ],
        explanation: "Absolute value is the distance from zero, so it will always be a positive number."
    },
    {
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
        question: "Which of the following value is equivalent to 4^10?",
        answers: [
            { text: "4*4*4*4*4*4*4*4*4*4", correct: true},
            { text: "10*10*10*10", correct: false},
            { text: "14", correct: false},
            { text: "4*10", correct: false}
        ],
        explanation: "Refer to Paul"
    },
    {
        question: "What is the definition of a prime number?",
        answers: [
            { text: "A number that has an integer for its square root. There are 10 perfect squares from 1 to 100.", correct: false},
            { text: "Any positive or negative whole number, including zero. Integers do not include fractions (1/3), decimals (0.56), or mixed numbers (7*(3/4))", correct: false},
            { text: "Any integer that cannot be divided evenly by 2.", correct: false},
            { text: "Any whole number greater than 1 that has only two factors, itself and 1; that is, a number that can be divided evenly only by 1 and itself.", correct: true}
        ],
        explanation: "Refer to Paul"
    },
    {
        question: "What is the definition of a composite number?",
        answers: [
            { text: "A superscript number placed next to another number at the top right.", correct: false},
            { text: "Any positive or negative whole number, including zero. Integers do not include fractions (1/3), decimals (0.56), or mixed numbers (7*(3/4))", correct: false},
            { text: "Cannot be written as fractions or decimals because the number of decimal places is infinite and there is no recurring pattern of digits within the number.", correct: false},
            { text: "Any whole number greater than 1 that has more than two different factors; in other words, any whole number that is not a prime number", correct: true}
        ],
        explanation: "Refer to Paul"
    },
    {
        question: "What is the definition of a even number?",
        answers: [
            { text: "Cannot be written as fractions or decimals because the number of decimal places is infinite and there is no recurring pattern of digits within the number.", correct: false},
            { text: "Any integer that can be divided by 2 without leaving a remainder.", correct: true},
            { text: "Any interger that cannot be divided evenly by 2", correct: false},
            { text: "A superscript number placed next to another number at the top right.", correct: false}
        ],
        explanation: "Refer to Paul"
    },
    {
        question: "Rational numbers ",
        answers: [
            { text: "is a superscript number placed next to another number at the top right.", correct: false},
            { text: "cannot be written as fractions or decimals because the number of decimal places is infinite and there is no recurring pattern of digits within the number.", correct: false},
            { text: "include all integers, decimals, and fractions. Any terminating or repeating decimal number is a rational number.", correct: true},
            { texT: "cannot be written as fractions or decimals because the number of a decimal places is infinite and there is no recurring pattern or digits within the number.", correct: false}
        ],
        explanation: "Refer to Paul"
    },
    {
        question: "Irrational numbers ",
        answers: [
            { text: "cannot be written as fractions or decimals because the number of decimal places is infinite and there is no recurring pattern of digits within the number.", correct: true},
            { text: "include all integers, decimals, and fractions. Any terminating or repeating decimal number is a rational number.", correct: false},
            { text: "are the basic building blocks of mathematics.", correct: false},
            { text: "are any number that uses a decimal point to show the part of the number that is less than one.", correct: false}
        ],
        explanation: "Refer to Paul"
    },
    {
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
        explanation: "Refer to Paul"
    },
    {
        question: "Which of the following is equivalent to 5*3?",
        answers: [
            { text: "5+5+5", correct: false},
            { text: "3+3+3+3+3", correct: false},
            { text: "5*5*5", correct: false},
            { text: "3*3*3*3*3", correct: false},
            { text: "All of the above", correct: true},
            { text: "None of the above", correct: false}
        ],
        explanation: "Refer to Paul"
    },
];