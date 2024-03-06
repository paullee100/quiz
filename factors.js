// Generate Signs //
const signs = [];
let signCounter = 0;
for (let i = 0; i < 64; i++) {
    let randomSign = Math.random() < 0.5 ? -1 : 1;
    signs.push(randomSign);
}

function isPrime(n) {
    // Check if n=1 or n=0
    if (n <= 1) return false;
    // Check if n=2 or n=3
    if (n == 2 || n == 3) return true;
    // Check whether n is divisible by 2 or 3
    if (n % 2 == 0 || n % 3 == 0) return false;
    // Check from 5 to square root of n
    // Iterate i by (i+6)
    for (let i = 5; i <= Math.sqrt(n); i += 6) {
        if (n % i == 0 || n % (i + 2) == 0) return false;
    }
    return true;
}

function getFactors(num) {
    const factor = []
    for (let i = 1; i <= num; i++) {
        if (num % i == 0) {
            factor.push(i);
        }
    }
    return factor;
}

function divideUp(arr) {
    const spot = (arr.length-1)*Math.random() | 0;
    arr.splice(spot+1, 0, Math.floor((arr[spot]+arr[spot+1])/2) + 1);
    return arr;
}

/**
 * 0 - factors
 * 1 - prime factors
 * 2 - greatest common factor
 * 3 - least common multiple
 */
function generateFactors(choice) {
    let min;
    let max;
    let getNum;
    let getNumA;
    let getNumB;
    const factors = [];

    switch (choice) {
        case 0:
            min = 3;
            max = 1000;
            getNum = Math.floor(Math.random()*(max-min+1))+min;
            for (let i = 1; i <= getNum; i++) {
                if (getNum % i == 0) {
                    factors.push(i);
                }
            };
            return [getNum, factors];            
        case 1:
            min = 4;
            max = 1000;
            getNum = Math.floor(Math.random()*(max-min+1))+min;
            while (isPrime(getNum)) {
                getNum = Math.floor(Math.random()*(max-min+1))+min;
            }
            let n = getNum;
            let i = 2;
            while (i * i <= n) {
                if (n % i) {
                    i += 1
                } else {
                    n = Math.floor(n / i);
                    factors.push(i);
                }
            }
            if (n > 1) {
                factors.push(n);
            }
            return [getNum, factors];
        case 2:
            min = 4;
            max = 100;
            let num = []
            while (true) {
                num = [];
                getNumA = Math.floor(Math.random()*(max-min+1))+min;
                getNumB = Math.floor(Math.random()*(max-min+1))+min;

                while (getNumB == getNumA) {
                    getNumB = Math.floor(Math.random()*(max-min+1))+min;
                }

                num.push(getNumA, getNumB);
                while (getNumB != 0) {
                    let temp = getNumB;
                    getNumB = getNumA % getNumB;
                    getNumA = temp;
                }

                if (getNumA > 2) {
                    break;
                }
            }
            return [num[0], num[1], getNumA];
        case 3:
            min = 3;
            max = 100;
            getNumA = Math.floor(Math.random()*(max-min+1))+min;
            getNumB = Math.floor(Math.random()*(max-min+1))+min;

            while (getNumB == getNumA) {
                // Prevent same number
                getNumB = Math.floor(Math.random()*(max-min+1))+min;
            }
            let a = getNumA;
            let b = getNumB;
            while (getNumB != 0) {
                let temp = getNumB;
                getNumB = getNumA % getNumB;
                getNumA = temp;
            }
            return [a, b, (a*b)/getNumA];
        default:
            alert("Error in generating factors!");
    }
}

const factors = [generateFactors(0), generateFactors(0), generateFactors(0), generateFactors(0)];
const primeFactors = [generateFactors(1), generateFactors(1), generateFactors(1), generateFactors(1)];
const greatestCommonFactors = [generateFactors(2), generateFactors(2), generateFactors(2), generateFactors(2)];
const leastCommonMultiple = [generateFactors(3), generateFactors(3), generateFactors(3), generateFactors(3)];

export const factorQuestions = [
    {
        type: "multipleChoice",
        question: "What is the prime factors for " + primeFactors[0][0] + "?",
        answers: [
            { text: primeFactors[0][1], correct: true},
            { text: [primeFactors[0][1][0], primeFactors[0][1][primeFactors[0][1].length-1]+signs[signCounter++]+Math.floor(Math.random()+(25-5+1))+5], correct: false},
            { text: [1, primeFactors[0][1]], correct: false},
            { text: [Array.from({ length: primeFactors[0][1].length-1}, (_, k) => primeFactors[0][1][k]), primeFactors[0][1][primeFactors[0][1].length-1]+signs[signCounter++]], correct: false}
        ],
        explanation: primeFactors[0][1].join('*') + " = " + primeFactors[0][0]
    },
    {
        type: "multipleChoice",
        question: "What is the prime factors for " + primeFactors[1][0] + "?",
        answers: [
            { text: primeFactors[1][1], correct: true},
            { text: [Array.from({ length: primeFactors[1][1].length-1}, (_, k) => primeFactors[1][1][k]), primeFactors[1][1][primeFactors[1][1].length-1]+signs[signCounter++]], correct: false},
            { text: undefined, correct: false},
            { text: undefined, correct: false},
        ],
        explanation: primeFactors[1][1].join('*') + " = " + primeFactors[1][0]
    },
    {
        type: "multipleChoice",
        question: "What is the prime factors for " + primeFactors[2][0] + "?",
        answers: [
            { text: primeFactors[2][1], correct: true},
            { text: [Array.from({ length: primeFactors[2][1].length-1}, (_, k) => primeFactors[2][1][k]), primeFactors[2][1][primeFactors[2][1].length-1]+signs[signCounter++]], correct: false},
            { text: undefined, correct: false},
            { text: undefined, correct: false}
        ],
        explanation: primeFactors[2][1].join('*') + " = " + primeFactors[2][0]
    },
    {
        type: "multipleChoice",
        question: "What is the prime factors for " + primeFactors[3][0] + "?",
        answers: [
            { text: primeFactors[3][1], correct: true},
            { text: [Array.from({ length: primeFactors[3][1].length-1}, (_, k) => primeFactors[3][1][k]), primeFactors[3][1][primeFactors[3][1].length-1]+signs[signCounter++]], correct: false},
            { text: undefined, correct: false},
            { text: undefined, correct: false}
        ],
        explanation: primeFactors[3][1].join('*') + " = " + primeFactors[3][0]
    },
    {
        type: "multipleChoice",
        question: "What are the factors for " + factors[0][0] + "?",
        answers: [
            { text: factors[0][1], correct: true},
            { text: factors[0][1].length > 2 ? [factors[0][1][0], factors[0][1][factors[0][1].length-1]]: factors[0][1][1], correct: false},
            { text: factors[0][1].length > 2 ? [factors[0][1].slice(0, factors[0][1].length-2), factors[0][1][factors[0][1].length-1]]: factors[0][1][0], correct: false},
            { text: factors[0][1].length > 2 ? divideUp([...factors[0][1]]): [0, factors[0][1][factors[0][1].length-1]], correct: false}
        ],
        explanation: factors[0][1].length % 2 == 1 ?
        Array.from({ length: Math.floor(factors[0][1].length/2)+1}, (_, k) => factors[0][1][k] + "*" + factors[0][1][factors[0][1].length-1-k] + "=" + factors[0][0]).join('\n')
        : Array.from({ length: Math.floor(factors[0][1].length/2)}, (_, k) => factors[0][1][k] + "*" + factors[0][1][factors[0][1].length-1-k] + "=" + factors[0][0]).join('\n')
    },
    {
        type: "multipleChoice",
        question: "What are the factors for " + factors[1][0] + "?",
        answers: [
            { text: factors[1][1], correct: true},
            { text: factors[1][1].length > 2 ? [factors[1][1][0], factors[1][1][factors[1][1].length-1]]: factors[1][1][1], correct: false},
            { text: factors[1][1].length > 2 ? [factors[1][1].slice(0, factors[1][1].length-2), factors[1][1][factors[1][1].length-1]]: factors[1][1][0], correct: false},
            { text: factors[1][1].length > 2 ? divideUp([...factors[1][1]]): [0, factors[1][1][factors[1][1].length-1]], correct: false}
        ],
        explanation: factors[1][1].length % 2 == 1 ?
        Array.from({ length: Math.floor(factors[1][1].length/2)+1}, (_, k) => factors[1][1][k] + "*" + factors[1][1][factors[1][1].length-1-k] + "=" + factors[1][0]).join('\n')
        : Array.from({ length: Math.floor(factors[1][1].length/2)}, (_, k) => factors[1][1][k] + "*" + factors[1][1][factors[1][1].length-1-k] + "=" + factors[1][0]).join('\n')
    },
    {
        type: "multipleChoice",
        question: "What are the factors for " + factors[2][0] + "?",
        answers: [
            { text: factors[2][1], correct: true},
            { text: factors[2][1].length > 2 ? [factors[2][1][0], factors[2][1][factors[2][1].length-1]]: factors[2][1][1], correct: false},
            { text: factors[2][1].length > 2 ? [factors[2][1].slice(0, factors[2][1].length-2), factors[2][1][factors[2][1].length-1]]: factors[2][1][0], correct: false},
            { text: factors[2][1].length > 2 ? divideUp([...factors[2][1]]): [0, factors[2][1][factors[2][1].length-1]], correct: false}
        ],
        explanation: factors[2][1].length % 2 == 1 ? 
        Array.from({ length: Math.floor(factors[2][1].length/2)+1}, (_, k) => factors[2][1][k] + "*" + factors[2][1][factors[2][1].length-1-k] + "=" + factors[2][0]).join('\n')
        : Array.from({ length: Math.floor(factors[2][1].length/2)}, (_, k) => factors[2][1][k] + "*" + factors[2][1][factors[2][1].length-1-k] + "=" + factors[2][0]).join('\n')
    },
    {
        type: "multipleChoice",
        question: "What are the factors for " + factors[3][0] + "?",
        answers: [
            { text: factors[3][1], correct: true},
            { text: factors[3][1].length > 2 ? [factors[3][1][0], factors[3][1][factors[3][1].length-1]]: factors[3][1][1], correct: false},
            { text: factors[3][1].length > 2 ? [factors[3][1].slice(0, factors[3][1].length-2), factors[3][1][factors[3][1].length-1]]: factors[3][1][0], correct: false},
            { text: factors[3][1].length > 2 ? divideUp([...factors[3][1]]): [0, factors[3][1][factors[3][1].length-1]], correct: false}
        ],
        explanation: factors[3][1].length % 2 == 1 ?
        Array.from({ length: Math.floor(factors[3][1].length/2)+1}, (_, k) => factors[3][1][k] + "*" + factors[3][1][factors[3][1].length-1-k] + "=" + factors[3][0]).join('\n')
        : Array.from({ length: Math.floor(factors[3][1].length/2)}, (_, k) => factors[3][1][k] + "*" + factors[3][1][factors[3][1].length-1-k] + "=" + factors[3][0]).join('\n')
    },
    {
        type: "multipleChoice",
        question: "What is the Greatest Common Factor for " + greatestCommonFactors[0][0] + " and " + greatestCommonFactors[0][1] + "?",
        answers: [
            { text: greatestCommonFactors[0][2], correct: true},
            { text: greatestCommonFactors[0][2]+signs[signCounter++], correct: false},
            { text: greatestCommonFactors[0][2]+2*signs[signCounter++], correct: false},
            { text: greatestCommonFactors[0][2]+3*signs[signCounter++], correct: false}
        ],
        explanation: "The factors for " + greatestCommonFactors[0][0] + " are " + getFactors(greatestCommonFactors[0][0]) + 
                     " and the factors for " + greatestCommonFactors[0][1] + " are " + getFactors(greatestCommonFactors[0][1]) + 
                     ". The largest number that " + greatestCommonFactors[0][0] + " and " + greatestCommonFactors[0][1] + " share is " +
                     greatestCommonFactors[0][2]
    },
    {
        type: "multipleChoice",
        question: "What is the Greatest Common Factor for " + greatestCommonFactors[1][0] + " and " + greatestCommonFactors[1][1] + "?",
        answers: [
            { text: greatestCommonFactors[1][2], correct: true},
            { text: greatestCommonFactors[1][2]+signs[signCounter++], correct: false},
            { text: greatestCommonFactors[1][2]-2*signs[signCounter++], correct: false},
            { text: greatestCommonFactors[1][2]-3*signs[signCounter++], correct: false}
        ],
        explanation: "The factors for " + greatestCommonFactors[1][0] + " are " + getFactors(greatestCommonFactors[1][0]) + 
                     " and the factors for " + greatestCommonFactors[1][1] + " are " + getFactors(greatestCommonFactors[1][1]) + 
                     ". The largest number that " + greatestCommonFactors[1][0] + " and " + greatestCommonFactors[1][1] + " share is " +
                     greatestCommonFactors[1][2]
    },
    {
        type: "multipleChoice",
        question: "What is the Greatest Common Factor for " + greatestCommonFactors[2][0] + " and " + greatestCommonFactors[2][1] + "?",
        answers: [
            { text: greatestCommonFactors[2][2], correct: true},
            { text: greatestCommonFactors[2][2]-signs[signCounter++], correct: false},
            { text: greatestCommonFactors[2][2]+2*signs[signCounter++], correct: false},
            { text: greatestCommonFactors[2][2]+3*signs[signCounter++], correct: false}
        ],
        explanation: "The factors for " + greatestCommonFactors[2][0] + " are " + getFactors(greatestCommonFactors[2][0]) + 
                     " and the factors for " + greatestCommonFactors[2][1] + " are " + getFactors(greatestCommonFactors[2][1]) + 
                     ". The largest number that " + greatestCommonFactors[2][0] + " and " + greatestCommonFactors[2][1] + " share is " +
                     greatestCommonFactors[2][2]
    },
    {
        type: "multipleChoice",
        question: "What is the Greatest Common Factor for " + greatestCommonFactors[3][0] + " and " + greatestCommonFactors[3][1] + "?",
        answers: [
            { text: greatestCommonFactors[3][2], correct: true},
            { text: greatestCommonFactors[3][2]+signs[signCounter++], correct: false},
            { text: greatestCommonFactors[3][2]-2*signs[signCounter++], correct: false},
            { text: greatestCommonFactors[3][2]-3*signs[signCounter++], correct: false}
        ],
        explanation: "The factors for " + greatestCommonFactors[3][0] + " are " + getFactors(greatestCommonFactors[3][0]) + 
                     " and the factors for " + greatestCommonFactors[3][1] + " are " + getFactors(greatestCommonFactors[3][1]) + 
                     ". The largest number that " + greatestCommonFactors[3][0] + " and " + greatestCommonFactors[3][1] + " share is " +
                     greatestCommonFactors[3][2]
    },
    {
        type: "multipleChoice",
        question: "What is the Least Common Multiple for " + leastCommonMultiple[0][0] + " and " + leastCommonMultiple[0][1] + "?",
        answers: [
            { text: leastCommonMultiple[0][2], correct: true},
            { text: leastCommonMultiple[0][2]+signs[signCounter++], correct: false},
            { text: leastCommonMultiple[0][2]+2*signs[signCounter++], correct: false},
            { text: leastCommonMultiple[0][2]+3*signs[signCounter++], correct: false}
        ],
        explanation: "The smallest number that both " + leastCommonMultiple[0][0] + 
                     " and " + leastCommonMultiple[0][1] + " can divide into evenly is " +
                     leastCommonMultiple[0][2] + ". Such that " + leastCommonMultiple[0][2] + " / " + leastCommonMultiple[0][0] + " = " + 
                     (leastCommonMultiple[0][2]/leastCommonMultiple[0][0]) + " and " + leastCommonMultiple[0][2] + " / " + leastCommonMultiple[0][1] + 
                     " = " + (leastCommonMultiple[0][2]/leastCommonMultiple[0][1]) + ". The result must be a whole number (integer)"
    },
    {
        type: "multipleChoice",
        question: "What is the Least Common Multiple for " + leastCommonMultiple[1][0] + " and " + leastCommonMultiple[1][1] + "?",
        answers: [
            { text: leastCommonMultiple[1][2], correct: true},
            { text: leastCommonMultiple[1][2]-signs[signCounter++], correct: false},
            { text: leastCommonMultiple[1][2]+2*signs[signCounter++], correct: false},
            { text: leastCommonMultiple[1][2]+3*signs[signCounter++], correct: false}
        ],
        explanation: "The smallest number that both " + leastCommonMultiple[1][0] + 
                     " and " + leastCommonMultiple[1][1] + " can divide into evenly is " +
                     leastCommonMultiple[1][2] + ". Such that " + leastCommonMultiple[1][2] + " / " + leastCommonMultiple[1][0] + " = " + 
                     (leastCommonMultiple[1][2]/leastCommonMultiple[1][0]) + " and " + leastCommonMultiple[1][2] + " / " + leastCommonMultiple[1][1] + 
                     " = " + (leastCommonMultiple[1][2]/leastCommonMultiple[1][1]) + ". The result must be a whole number (integer)"
    },
    {
        type: "multipleChoice",
        question: "What is the Least Common Multiple for " + leastCommonMultiple[2][0] + " and " + leastCommonMultiple[2][1] + "?",
        answers: [
            { text: leastCommonMultiple[2][2], correct: true},
            { text: leastCommonMultiple[2][2]-signs[signCounter++], correct: false},
            { text: leastCommonMultiple[2][2]+2*signs[signCounter++], correct: false},
            { text: leastCommonMultiple[2][2]-3*signs[signCounter++], correct: false}
        ],
        explanation: "The smallest number that both " + leastCommonMultiple[2][0] + 
                     " and " + leastCommonMultiple[2][1] + " can divide into evenly is " +
                     leastCommonMultiple[2][2] + ". Such that " + leastCommonMultiple[2][2] + " / " + leastCommonMultiple[2][0] + " = " + 
                     (leastCommonMultiple[2][2]/leastCommonMultiple[2][0]) + " and " + leastCommonMultiple[2][2] + " / " + leastCommonMultiple[2][1] + 
                     " = " + (leastCommonMultiple[2][2]/leastCommonMultiple[2][1]) + ". The result must be a whole number (integer)"
    },
    {
        type: "multipleChoice",
        question: "What is the Least Common Multiple for " + leastCommonMultiple[3][0] + " and " + leastCommonMultiple[3][1] + "?",
        answers: [
            { text: leastCommonMultiple[3][2], correct: true},
            { text: leastCommonMultiple[3][2]-signs[signCounter++], correct: false},
            { text: leastCommonMultiple[3][2]-2*signs[signCounter++], correct: false},
            { text: leastCommonMultiple[3][2]-3*signs[signCounter++], correct: false}
        ],
        explanation: "The smallest number that both " + leastCommonMultiple[3][0] + 
                     " and " + leastCommonMultiple[3][1] + " can divide into evenly is " +
                     leastCommonMultiple[3][2] + ". Such that " + leastCommonMultiple[3][2] + " / " + leastCommonMultiple[3][0] + " = " + 
                     (leastCommonMultiple[3][2]/leastCommonMultiple[3][0]) + " and " + leastCommonMultiple[3][2] + " / " + leastCommonMultiple[3][1] + 
                     " = " + (leastCommonMultiple[3][2]/leastCommonMultiple[3][1]) + ". The result must be a whole number (integer)"
    }
];