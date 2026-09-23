// JavaScript Loops Exercises

// 1
let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

// 2
let numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// 3
for (let i = 0; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// 4
let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i;
}
console.log("Sum:", sum);

// 5
numbers = [1, 2, 3, 4, 5];
let largest = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
        largest = numbers[i];
    }
}
console.log("Largest:", largest);

// 6
numbers = [1, 2, 3, 4, 5];
sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

let average = sum / numbers.length;
console.log("Average:", average);

// 7
let number = 5;
let factorial = 1;

for (let i = 1; i <= number; i++) {
    factorial *= i;
}
console.log("Factorial:", factorial);

// 8
let limit = 10;
let first = 0;
let second = 1;

for (let i = 0; first <= limit; i++) {
    console.log(first);

    let next = first + second;
    first = second;
    second = next;
}

// 9
limit = 20;

for (let number = 2; number <= limit; number++) {
    let isPrime = true;

    for (let divisor = 2; divisor < number; divisor++) {
        if (number % divisor === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log("Prime:", number);
    }
}

// 10
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(matrix[i][j]);
    }
}

// 11
numbers = [1, 2, 3, 4, 5];

for (let i = numbers.length - 1; i >= 0; i--) {
    console.log(numbers[i]);
}

// 12
numbers = [1, 2, 3, 4, 5];
let step = 2;

for (let i = 0; i < numbers.length; i += step) {
    console.log(numbers[i]);
}

// 13
numbers = [1, 2, 1, 3, 2, 1];
let target = 1;
let count = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === target) {
        count++;
    }
}
console.log("Frequency:", count);

// 14
const heros = [
    { name: "Iron Man", power: "Tech" },
    { name: "Spider-Man", power: "Spider abilities" },
    { name: "Thor", power: "Godly powers" },
    { name: "Hulk", power: "Super strength" }
];

const newHeros = heros.map((hero, index) => {
    return {
        hero: hero.name,
        power: hero.power,
        id: index
    };
});

console.log(newHeros);

// 15
const inputWords = [
    "spray",
    "limit",
    "elite",
    "exuberant",
    "destruction",
    "present"
];

function filterWords(inputWords) {
    return inputWords.filter((word) => {
        return word.length >= 7;
    });
}

console.log(filterWords(inputWords));

