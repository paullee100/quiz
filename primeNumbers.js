/** Prime Numbers **/
const primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]
const nonPrimeNumbers = [1, 4, 6, 8, 9, 10, 12, 14, 15, 16, 18, 20, 21, 22, 24, 25, 26, 27, 28, 30, 32, 33, 34, 35, 36, 38, 39, 40, 42, 44, 45, 46, 48, 49, 50, 51, 52, 54, 55, 56, 57, 58, 60, 62, 63, 64, 65, 66, 68, 69, 70, 72, 74, 75, 76, 77, 78, 80, 81, 82, 84, 85, 86, 87, 88, 90, 91, 92, 93, 94, 95, 96, 98, 99, 100]

const val = []
for (let i = 0; i < 4; i++) {
    val.push(getRandom(nonPrimeNumbers, 3));
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

export const primeNumberQuestions = [
    {
        type: "multipleChoice",
        question: "Which value is a prime number?",
        answers: [
            { text: primeNumbers[Math.floor(Math.random() * primeNumbers.length)], correct: true},
            { text: val[0][0], correct: false},
            { text: val[0][1], correct: false},
            { text: val[0][2], correct: false}
        ],
        explanation: "A prime number is a whole number greater than 1 whose only factors are itself and 1"
    },
    {
        type: "multipleChoice",
        question: "Which value is a prime number?",
        answers: [
            { text: primeNumbers[Math.floor(Math.random()*primeNumbers.length)], correct: true},
            { text: val[1][0], correct: false},
            { text: val[1][1], correct: false},
            { text: val[1][2], correct: false}
        ],
        explanation: "A prime number is a whole number greater than 1 whose only factors are itself and 1"
    },
    {
        type: "multipleChoice",
        question: "Which value is a prime number?",
        answers: [
            { text: primeNumbers[Math.floor(Math.random()*primeNumbers.length)], correct: true},
            { text: val[2][0], correct: false},
            { text: val[2][1], correct: false},
            { text: val[2][2], correct: false}
        ],
        explanation: "A prime number is a whole number greater than 1 whose only factors are itself and 1"
    },
    {
        type: "multipleChoice",
        question: "Which value is a prime number?",
        answers: [
            { text: primeNumbers[Math.floor(Math.random()*primeNumbers.length)], correct: true},
            { text: val[3][0], correct: false},
            { text: val[3][1], correct: false},
            { text: val[3][2], correct: false}
        ],
        explanation: "A prime number is a whole number greater than 1 whose only factors are itself and 1"
    },
    {
        type: "shortAnswer",
        question: "How many prime numbers are between 1 and 10? Type your answer in the form of the number (i.e., 5).",
        answers: [
            "4"
        ],
        explanation: "The prime numbers between 1 and 10 are 2, 3, 5, and 7."
    },
]