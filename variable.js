const square_root = '\u221A';
const cube_root = '\u221B';
const fourth_root = '\u221C';

export const questions = [
    {
        question: "What is an integer?",
        answers: [
            { text: "A number that is not a fraction; a whole number", correct: true},
            { text: "2", correct: false},
            { text: "3", correct: false},
            { text: "4", correct: false},
            { text: "None of the above", correct: false}
        ],
        explanation: "Reasoning 1"
    },
    {
        question: "What is the value of " + square_root + "144?",
        answers: [
            { text: "11", correct: false},
            { text: "12", correct: true},
            { text: "13", correct: false},
            { text: "20", correct: false},
        ],
        explanation: "12 * 12 = 144"
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
        question: "What does |-1000| = ?",
        answers: [
            { text: "-1000", correct: false},
            { text: "1000", correct: true},
            { text: "0", correct: false},
            { text: "None of the above", correct: false}
        ],
        explanation: ""
    }
];