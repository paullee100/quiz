const square_root = '\u221A';

// Root Problems //
function getRootProblems(power, max) {
    let result = [];

    while (result.length < 4) {
        const x = Math.floor(Math.random() * (max-2+1)) + 2;
        const val = Math.pow(x, power);
        if (result.indexOf(val) === -1) result.push(val);
    }
    return result;
}

function getExponentProblems(minBase, maxBase, minExponent, maxExponent) {
    const result = [];

    while (result.length < 4) {
        const base = Math.floor(Math.random()*(maxBase-minBase+1))+minBase;
        let exponent = Math.floor(Math.random()*(maxExponent-minExponent+1))+minExponent;
        while (base == exponent) {
            exponent = Math.floor(Math.random()*(maxExponent-minExponent+1))+minExponent;
        }

        const prob = []
        for (let i = 0; i < exponent; i++) {
            prob.push(base);
        }
        result.push(prob);
    }

    return result;
}

const squareRoot = getRootProblems(2, 50);
const expoToLong = getExponentProblems(2,24,2,10)

export const exponentQuestions = [
    {
        type: "multipleChoice",
        question: "Which of the following values is a perfect square?",
        answers: [
            { text: (squareRoot[0]+Math.floor(Math.random()*10)+1), correct: false},
            { text: squareRoot[0], correct: true},
            { text: (squareRoot[0]+Math.floor(Math.random()*100)+2), correct: false},
            { text: (squareRoot[0]-Math.floor(Math.random()*10)+1), correct: false}
        ],
        explanation: square_root + "" + squareRoot[0] + " =  " + Math.sqrt(squareRoot[0])  + ", which is an integer"
    },
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
        question: "Which of the following values is a perfect square?",
        answers: [
            { text: (squareRoot[2]+Math.floor(Math.random()*10)+1), correct: false},
            { text: squareRoot[2], correct: true},
            { text: (squareRoot[2]+Math.floor(Math.random()*100)+2), correct: false},
            { text: (squareRoot[2]-Math.floor(Math.random()*10)+1), correct: false}
        ],
        explanation: square_root + "" + squareRoot[2] + " =  " + Math.sqrt(squareRoot[2])  + ", which is an integer"
    },
    {
        type: "multipleChoice",
        question: "Which of the following values is a perfect square?",
        answers: [
            { text: (squareRoot[3]+Math.floor(Math.random()*10)+1), correct: false},
            { text: squareRoot[3], correct: true},
            { text: (squareRoot[3]+Math.floor(Math.random()*100)+2), correct: false},
            { text: (squareRoot[3]-Math.floor(Math.random()*10)+1), correct: false}
        ],
        explanation: square_root + "" + squareRoot[3] + " =  " + Math.sqrt(squareRoot[3])  + ", which is an integer"
    },
    {
        type: "multipleChoice",
        question: "Which of the following value is equivalent to " + expoToLong[0][0] + "^" + expoToLong[0].length +"?",
        answers: [
            { text: expoToLong[0].join('*'), correct: true},
            { text: Array.from( {length: expoToLong[0].length}, (_, k) => expoToLong[0].length).join('*'), correct: false},
            { text: Array.from({ length: expoToLong[0][0]}, (_, k) => expoToLong[0].length).join('*'), correct: false},
            { text: Array.from({ length: expoToLong[0][0]}, (_, k) => expoToLong[0][0]).join('*'), correct: false}
        ],
        explanation: "Exponents is the number of the base number times the exponent amount of times"
    },
    {
        type: "multipleChoice",
        question: "Which of the following value is equivalent to " + expoToLong[1][0] + "^" + expoToLong[1].length +"?",
        answers: [
            { text: expoToLong[1].join('*'), correct: true},
            { text: Array.from( {length: expoToLong[1].length}, (_, k) => expoToLong[1].length).join('*'), correct: false},
            { text: Array.from({ length: expoToLong[1][0]}, (_, k) => expoToLong[1].length).join('*'), correct: false},
            { text: Array.from({ length: expoToLong[1][0]}, (_, k) => expoToLong[1][0]).join('*'), correct: false}
        ],
        explanation: "Exponents is the number of the base number times the exponent amount of times"
    },
    {
        type: "multipleChoice",
        question: "Which of the following value is equivalent to " + expoToLong[2][0] + "^" + expoToLong[2].length +"?",
        answers: [
            { text: expoToLong[2].join('*'), correct: true},
            { text: Array.from( {length: expoToLong[2].length}, (_, k) => expoToLong[2].length).join('*'), correct: false},
            { text: Array.from({ length: expoToLong[2][0]}, (_, k) => expoToLong[2].length).join('*'), correct: false},
            { text: Array.from({ length: expoToLong[2][0]}, (_, k) => expoToLong[2][0]).join('*'), correct: false}
        ],
        explanation: "Exponents is the number of the base number times the exponent amount of times"
    },
    {
        type: "multipleChoice",
        question: "Which of the following value is equivalent to " + expoToLong[3][0] + "^" + expoToLong[3].length +"?",
        answers: [
            { text: expoToLong[3].join('*'), correct: true},
            { text: Array.from( {length: expoToLong[3].length}, (_, k) => expoToLong[3].length).join('*'), correct: false},
            { text: Array.from({ length: expoToLong[3][0]}, (_, k) => expoToLong[3].length).join('*'), correct: false},
            { text: Array.from({ length: expoToLong[3][0]}, (_, k) => expoToLong[3][0]).join('*'), correct: false}
        ],
        explanation: "Exponents is the number of the base number times the exponent amount of times"
    },
]