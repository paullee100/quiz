const square_root = '\u221A';
const cube_root = '\u221B';
const fourth_root = '\u221C';

// Generate Signs //
const signs = [];
let signCounter = 0;
for (let i = 0; i < 20; i++) {
    let randomSign = Math.random() < 0.5 ? -1 : 1;
    signs.push(randomSign);
}

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

/** Prime Numbers **/
const primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]
const nonPrimeNumbers = [1, 4, 6, 8, 9, 10, 12, 14, 15, 16, 18, 20, 21, 22, 24, 25, 26, 27, 28, 30, 32, 33, 34, 35, 36, 38, 39, 40, 42, 44, 45, 46, 48, 49, 50, 51, 52, 54, 55, 56, 57, 58, 60, 62, 63, 64, 65, 66, 68, 69, 70, 72, 74, 75, 76, 77, 78, 80, 81, 82, 84, 85, 86, 87, 88, 90, 91, 92, 93, 94, 95, 96, 98, 99, 100]

const val = getRandom(nonPrimeNumbers, 3);

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

// https://stackoverflow.com/questions/19269545/how-to-get-a-number-of-random-elements-from-an-array
function getRandom(arr, n) {
    let result = new Array(n),
          len = arr.length,
          taken = new Array(len);

    if (n > len) throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        const x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}

// Factor Problems //
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
            max = 100;
            getNum = Math.floor(Math.random()*(max-min+1))+min;
            while (isPrime(getNum)) {
                getNum = Math.floor(Math.random()*(max-min+1))+min;
            }
            // if (isPrime(getNum)) {
            //     factors.push(1);
            //     factors.push(getNum);
            // } else {
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
            // }
            return [getNum, factors];
        case 2:
            min = 3;
            max = 100;
            let getNumA = Math.floor(Math.random()*(max-min+1))+min;
            let getNumB = Math.floor(Math.random()*(max-min+1))+min;
            console.log("A: " + getNumA);
            console.log("B: " + getNumB);
            while (getNumB == getNumA) {
                getNumB = Math.floor(Math.random()*(max-min+1))+min;
            };
            while (getNumB != 0) {
                let temp = getNumB;
                getNumB = getNumA % getNumB;
                getNumA = temp;
            }
            console.log(getNumA);
            return [getNumA, getNumB, getNumA];
        case 3:
            break;
        default:
            alert("Error in generating factors!");
    }
}

const factors = [generateFactors(0), generateFactors(0), generateFactors(0), generateFactors(0)];
const primeFactors = [generateFactors(1)];

// console.log(factors);
console.log(primeFactors)

export const questions = [
    // {
    //     type: "multipleChoice",
    //     question: "What is an integer?",
    //     answers: [
    //         { text: "Any positive or negative whole number, including zero. Integers do not include fractions (1/3), decimals (0.56), or mixed numbers (7*(3/4))", correct: true},
    //         { text: "Any integer that can be divided by 2 without leaving a remainder.", correct: false},
    //         { text: "Cannot be written as fractions or decimals because the number of decimal places is infinite and there is no recurring pattern of digits within the number.", correct: false},
    //         { text: "The basic building blocks of mathematics.", correct: false},
    //         { text: "None of the above", correct: false}
    //     ],
    //     explanation: "Integers are whole numbers including zero."
    // },
    // {
    //     type: "multipleChoice",
    //     question: "Which value is a prime number?",
    //     answers: [
    //         { text: "" + primeNumbers[Math.floor(Math.random() * primeNumbers.length)], correct: true},
    //         { text: "" + val[0], correct: false},
    //         { text: "" + val[1], correct: false},
    //         { text: "" + val[2], correct: false}
    //     ],
    //     explanation: "A prime number is a whole number greater than 1 whose only factors are itself and 1"
    // },
    // {
    //     type: "multipleChoice",
    //     question: "A perfect square is ",
    //     answers: [
    //         { text: "another way of writing a fractional exponent.", correct: false},
    //         { text: "a number that has an integer for its square root. There are 10 perfect squares from 1 to 100.", correct: true},
    //         { text: "a superscript number placed next to another number at the top right.", correct: false},
    //         { text: "a graph to see the distance between numbers", correct: false}
    //     ],
    //     explanation: "Result of the square root will equal to an integer value."
    // },
    // {
    //     type: "multipleChoice",
    //     question: "What is the value of " + square_root + "" + squareRoot[0] + "?",
    //     answers: [
    //         { text: "" + Math.sqrt(squareRoot[0]), correct: true},
    //         { text: "" + (Math.sqrt(squareRoot[0])+Math.floor(Math.random() * 10)+1), correct: false},
    //         { text: "" + (Math.sqrt(squareRoot[0])-Math.floor(Math.random() * 10)-1), correct: false},
    //         { text: "" + (Math.sqrt(squareRoot[0])+Math.ceil(Math.random() * 10)+21), correct: false},
    //     ],
    //     explanation: Math.sqrt(squareRoot[0]) + " * " + Math.sqrt(squareRoot[0]) + " = " + squareRoot[0]
    // },
    // {
    //     type: "multipleChoice",
    //     question: "What is the value of " + cube_root + "" + cubeRoot[0] + "?",
    //     answers: [
    //         { text: "21", correct: false},
    //         { text: "" + Math.round(Math.sqrt(cubeRoot[0])), correct: false},
    //         { text: "" + Math.cbrt(cubeRoot[0]), correct: true},
    //         { text: "40", correct: false},
    //     ],
    //     explanation: Math.cbrt(cubeRoot[0]) + " * " + Math.cbrt(cubeRoot[0]) + " * " + Math.cbrt(cubeRoot[0]) + " = " + (Math.cbrt(cubeRoot[0])*Math.cbrt(cubeRoot[0])) + " * " + Math.cbrt(cubeRoot[0]) + " = " + cubeRoot[0]
    // },
    // {
    //     type: "multipleChoice",
    //     question: "What does |" + absoluteVal[0] + "| = ?",
    //     answers: [
    //         { text: "" + Math.abs(absoluteVal[0]), correct: true},
    //         { text: "0", correct: false},
    //         { text: "" + -Math.abs(absoluteVal[0]), correct: false},
    //         { text: "None of the above", correct: false}
    //     ],
    //     explanation: "Absolute value is the distance from zero, so it will always be a positive number."
    // },
    // {
    //     type: "multipleChoice",
    //     question: "What does |" + absoluteVal[1] + "| = ?",
    //     answers: [
    //         { text: "" + -Math.abs(absoluteVal[1]), correct: false},
    //         { text: "" + Math.abs(absoluteVal[1]), correct: true},
    //         { text: "0", correct: false},
    //         { text: "None of the above", correct: false}
    //     ],
    //     explanation: "Absolute value is the distance from zero, so it will always be a positive number."
    // },
    // {
    //     type: "multipleChoice",
    //     question: "Which of the following values is a perfect square?",
    //     answers: [
    //         { text: "" + (squareRoot[1]+Math.floor(Math.random()*10)+1), correct: false},
    //         { text: "" + squareRoot[1], correct: true},
    //         { text: "" + (squareRoot[1]+Math.floor(Math.random()*100)+2), correct: false},
    //         { text: "" + (squareRoot[1]-Math.floor(Math.random()*10)+1), correct: false}
    //     ],
    //     explanation: square_root + "" + squareRoot[1] + " =  " + Math.sqrt(squareRoot[1])  + ", which is an integer"
    // },
    // {
    //     type: "multipleChoice",
    //     question: "Which of the following value is equivalent to 4^10?",
    //     answers: [
    //         { text: "4*4*4*4*4*4*4*4*4*4", correct: true},
    //         { text: "10*10*10*10", correct: false},
    //         { text: "14", correct: false},
    //         { text: "4*10", correct: false}
    //     ],
    //     explanation: "Exponents is the number of the base number times the exponent amount of times"
    // },
    // {
    //     type: "multipleChoice",
    //     question: "What is the definition of a prime number?",
    //     answers: [
    //         { text: "A number that has an integer for its square root. There are 10 perfect squares from 1 to 100.", correct: false},
    //         { text: "Any positive or negative whole number, including zero. Integers do not include fractions (1/3), decimals (0.56), or mixed numbers (7*(3/4))", correct: false},
    //         { text: "Any integer that cannot be divided evenly by 2.", correct: false},
    //         { text: "Any whole number greater than 1 that has only two factors, itself and 1; that is, a number that can be divided evenly only by 1 and itself.", correct: true}
    //     ],
    //     explanation: "Definition is the green answer"
    // },
    // {
    //     type: "multipleChoice",
    //     question: "What is the definition of a composite number?",
    //     answers: [
    //         { text: "A superscript number placed next to another number at the top right.", correct: false},
    //         { text: "Any positive or negative whole number, including zero. Integers do not include fractions (1/3), decimals (0.56), or mixed numbers (7*(3/4))", correct: false},
    //         { text: "Cannot be written as fractions or decimals because the number of decimal places is infinite and there is no recurring pattern of digits within the number.", correct: false},
    //         { text: "Any whole number greater than 1 that has more than two different factors; in other words, any whole number that is not a prime number", correct: true}
    //     ],
    //     explanation: "Defintion is the green answer"
    // },
    // {
    //     type: "multipleChoice",
    //     question: "What is the definition of a even number?",
    //     answers: [
    //         { text: "Cannot be written as fractions or decimals because the number of decimal places is infinite and there is no recurring pattern of digits within the number.", correct: false},
    //         { text: "Any integer that can be divided by 2 without leaving a remainder.", correct: true},
    //         { text: "Any interger that cannot be divided evenly by 2", correct: false},
    //         { text: "A superscript number placed next to another number at the top right.", correct: false}
    //     ],
    //     explanation: "Definition is the green answer"
    // },
    // {
    //     type: "multipleChoice",
    //     question: "Rational numbers ",
    //     answers: [
    //         { text: "is a superscript number placed next to another number at the top right.", correct: false},
    //         { text: "cannot be written as fractions or decimals because the number of decimal places is infinite and there is no recurring pattern of digits within the number.", correct: false},
    //         { text: "include all integers, decimals, and fractions. Any terminating or repeating decimal number is a rational number.", correct: true},
    //         { texT: "cannot be written as fractions or decimals because the number of a decimal places is infinite and there is no recurring pattern or digits within the number.", correct: false}
    //     ],
    //     explanation: "Definition is the green answer"
    // },
    // {
    //     type: "multipleChoice",
    //     question: "Irrational numbers ",
    //     answers: [
    //         { text: "cannot be written as fractions or decimals because the number of decimal places is infinite and there is no recurring pattern of digits within the number.", correct: true},
    //         { text: "include all integers, decimals, and fractions. Any terminating or repeating decimal number is a rational number.", correct: false},
    //         { text: "are the basic building blocks of mathematics.", correct: false},
    //         { text: "are any number that uses a decimal point to show the part of the number that is less than one.", correct: false}
    //     ],
    //     explanation: "Definition is the green answer"
    // },
    // {
    //     type: "multipleChoice",
    //     question: "Which of the following is NOT an operation",
    //     answers: [
    //         { text: "Addition", correct: false},
    //         { text: "Subtraction", correct: false},
    //         { text: "Roots", correct: false},
    //         { text: "Multiplication", correct: false},
    //         { text: "Division", correct: false},
    //         { text: "Exponents", correct: false},
    //         { text: "Parentheses", correct: false},
    //         { text: "None of the above", correct: true}
    //     ],
    //     explanation: "Remember PEMDAS (Parentheses, Exponent, Multiplication, Division, Addition, and Subtraction) and Root is the inverse of Exponent"
    // },
    // {
    //     type: "multipleChoice",
    //     question: "Which of the following is equivalent to 5*3?",
    //     answers: [
    //         { text: "5+5+5", correct: true},
    //         { text: "3+3+3+3+3", correct: true},
    //         { text: "5*5*5", correct: false},
    //         { text: "3*3*3*3*3", correct: false},
    //         { text: "All of the above", correct: false},
    //         { text: "None of the above", correct: false}
    //     ],
    //     explanation: "Add them up. 5*3 is 15. 5+5+5=10+5=15\n3+3+3+3+3=6+3+3+3=9+3+3=12+3=15"
    // },
    // {
    //     type: "shortAnswer",
    //     question: "What does 9 + 10 * 2 =?",
    //     answers: [
    //         "29",
    //     ],
    //     explanation: "Using PEMDAS, multiplication would come first, then addition\n 9 + 10 * 2 = 9 + 20 = 29"
    // },
    // {
    //     type: "shortAnswer",
    //     question: "How many prime numbers are between 1 and 10? Type your answer in the form of the number (i.e., 5).",
    //     answers: [
    //         "4"
    //     ],
    //     explanation: "The prime numbers between 1 and 10 are 2, 3, 5, and 7."
    // },
    // {
    //     type: "multipleChoice",
    //     question: "What is the value of " + cube_root + "" + cubeRoot[1] + "?",
    //     answers: [
    //         { text: "" + Math.cbrt(cubeRoot[1]), correct: true},
    //         { text: "" + Math.round(Math.sqrt(cubeRoot[1])), correct: false},
    //         { text: "" + Math.round(Math.pow(cubeRoot[1], 1/4)), correct: false},
    //         { text: "" + cubeRoot[1], correct: false}
    //     ],
    //     explanation: Math.cbrt(cubeRoot[1]) + " * " + Math.cbrt(cubeRoot[1]) + " * " + Math.cbrt(cubeRoot[1]) + " = " + (Math.cbrt(cubeRoot[1])*Math.cbrt(cubeRoot[1])) + " * " + Math.cbrt(cubeRoot[1]) + " = " + cubeRoot[1]
    // },
    {
        type: "multipleChoice",
        question: "What is the prime factors for " + primeFactors[0][0] + "?",
        answers: [
            { text: primeFactors[0][1], correct: true},
            { text: [primeFactors[0][1][0], primeFactors[0][1][primeFactors[0][1].length-1]+signs[signCounter++]], correct: false},
            { text: [1, primeFactors[0][1]], correct: false},
            { text: [Array.from({length: primeFactors[0][1].length-1}, (_, k) => primeFactors[0][1][k]), primeFactors[0][1][primeFactors[0][1].length-1]+signs[signCounter++]], correct: false}
        ],
        explanation: ""
    },
    // {
    //     type: "multipleChoice",
    //     question: "What are the factors for " + factors[0][0] + "?",
    //     answers: [
    //         { text: factors[0][1], correct: true},
    //         { text: "", correct: false},
    //         { text: "", correct: false},
    //         { text: "", correct: false}
    //     ],
    //     explanation: ""
    // },
    // {
    //     type: "multipleChoice",
    //     question: "What are the factors for " + factors[1][0] + "?",
    //     answers: [
    //         { text: factors[1][1], correct: true},
    //         { text: "", correct: false},
    //         { text: "", correct: false},
    //         { text: "", correct: false}
    //     ],
    //     explanation: ""
    // },
    // {
    //     type: "multipleChoice",
    //     question: "What are the factors for " + factors[2][0] + "?",
    //     answers: [
    //         { text: factors[2][1], correct: true},
    //         { text: "", correct: false},
    //         { text: "", correct: false},
    //         { text: "", correct: false}
    //     ],
    //     explanation: ""
    // },
    // {
    //     type: "multipleChoice",
    //     question: "What are the factors for " + factors[3][0] + "?",
    //     answers: [
    //         { text: factors[3][1], correct: true},
    //         { text: "", correct: false},
    //         { text: "", correct: false},
    //         { text: "", correct: false}
    //     ],
    //     explanation: ""
    // },
];