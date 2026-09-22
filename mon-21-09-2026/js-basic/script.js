// Data Types and Operators
console.log(1000/500);
console.log(1000-500);
console.log(1000+500);
console.log(1000*500);
console.log((7+9+2)/3);
console.log(150-(0.3*150));

let x=20;
if (30>x>18) {
    console.log("true");
   
}
else{
    console.log("false");
}
console.log(2**3);
console.log(10%4);

// Strings
let str="Welcome to Orange";
console.log(str.toUpperCase());
console.log(str.slice(8,10).toLocaleUpperCase());
console.log(str.replace("Welcome to","Hello from"));
console.log(str.toLocaleLowerCase());
console.log(str.length);
console.log(str.replace("Orange","“Orange“"));
console.log(str.concat(" Jordan"));
let text = "cactus";
let firstLetter = text[0];
let result = firstLetter + text.slice(1).replaceAll(firstLetter, "*");
console.log(result);

//Arrays
let array=["Coding","Academy","By","Orange"]
console.log(array+",Jordan");
console.log(array[0],array[1]);
console.log("Welcome,"+"To,"+array);
let no_st=array.filter((_,index)=>index!==0)
console.log(no_st.join(" "));
console.log(array.join(" "));
console.log(array);
console.log(array[0],array[3]);

var fruit = ["banana", "apple", "orange", "watermelon"]; 
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];
vegetables.pop();
console.log(vegetables);
fruit.shift();
console.log(fruit);
let orange_index=fruit.indexOf("orange");
console.log(orange_index);
fruit.push(orange_index);
console.log(fruit);
let vegetables_length=vegetables.length;
console.log(vegetables_length);
vegetables.push(vegetables_length);
console.log(vegetables);
let food=fruit.concat(vegetables);
console.log(food);
food.splice(4,2);
console.log(food);
food.reverse();
console.log(food);
food.join(",");
console.log(food);

// Conditionals

let birth_year=prompt("birth year");
let year= new Date().getFullYear();
let age=year-birth_year;
console.log("You are "+age+" years old.");
if (age > 60) {
    console.log("You may join the seniors' program.");    
}else if (age > 30){
    console.log("You are not eligible. You may join other programs.");
}else if (age>=18 && age<=30){
    console.log("You are eligible. Start your application.");
}else{
    console.log("You may join the kids' program.");
}
function switchCase(str) {
    return str.replace(/[a-zA-Z]/g, function(char) {
        if (char === char.toUpperCase()) {
            return char.toLowerCase();
        } else {
            return char.toUpperCase();
        }
    });
}
console.log(switchCase("OrAnGe"));

function cap_no_space(string) {
    return string
    .split(" ")
    .map(word=>word[0].toUpperCase() + word.slice(1))
    .join("");
    
}
console.log(cap_no_space("Coding Academy by Orange"));

let rem=["Coding","Academy","By","Orange"];
function remover(rem){
    rem.splice(2,1);
    return rem;
}
console.log(remover(rem));

let num = prompt("insert number to tell odd or even");
function odd_even(num) {
   
    if (num % 2 === 0) {
         return "Even";
    }else{
        return "Odd";
    }
}
console.log(odd_even(num));

// let input=prompt("input any thing to check if it is a number");
function num_check(input){
    if (typeof input == "number") {
        return "It is a number"
    }else{
        return "It is not a number"
    }
}
console.log(num_check(5));

let X=prompt("enter first value");
let Y=prompt("enter second value");
 function greater(X,Y) {
    if (X>Y){
        return X;
    }else{
        return Y;
    }
 }
console.log(greater(X,Y));

let a=prompt("enter first triangle side");
let b=prompt("enter second triangle side");
let c=prompt("enter third triangle side");
function triangle_type(a,b,c) {
    if (a===b && b===c) {
        return "Equilateral";
    }else if (a===b || a===c ){
        return "Isosceles";
    }else{
        return "Scalene";
    }
}
console.log(triangle_type(a, b, c));

function range(value, u, l) {
    if (value >= l && value<=u){
        return "Number within range";
    }else{
        return "Number out of range";
    }
}
console.log(range(4,5,6));
let Year=prompt("check leap Year");
function year_type(Year){
    if (Year % 400 === 0) {
        return "It is a leap Year";
    } else if (Year % 100 === 0) {
        return "It is not a leap Year"
    } else if (Year % 4 === 0) {
        return "It is a leap Year"
    } else {
        return "It is not a leap Year"
    }    
}
console.log(year_type(Year));

// Loops
let i=1;
while (i <= 50) {
    if (i % 2 === 0){
        console.log(i);
    };
i++
}

for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0){
        console.log(i);
    };
    
}

// 3
 i=1;
while (i <= 50) {
    if (i % 2 === 0){
        console.log(i);
    };
i++
}

for (let i = 1; i <= 50; i++) {
    if (i % 2 !== 0){
        console.log(i);
    };
    
}

// 4

for ( let i = 1; i <= 100; i++){
    if (i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz");         
    }else if (i % 3 === 0 ){
        console.log("Fizz");
    }else if(i % 5 === 0){
        console.log("Buzz");
    }else{
        console.log(i);        
    }
}
//  5
function fizz_buzz(i){
     if (i % 3 === 0 && i % 5 === 0){
        return ("FizzBuzz");         
    }else if (i % 3 === 0 ){
        return ("Fizz");
    }else if(i % 5 === 0){
        return ("Buzz");
    }else{
        return (i);        
    }
}
for (let i = 1; i <= 100; i++) {
    console.log(fizz_buzz(i));
    ;    
}
// 6
i=0;
function re_fizzbuzz(i){
    if (i > 100){
        return;
    }
    if (i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz");         
    }else if (i % 3 === 0 ){
        console.log("Fizz");
    }else if(i % 5 === 0){
        console.log("Buzz");
    }else{
        console.log(i);        
    }
    re_fizzbuzz(i+1)
}
re_fizzbuzz(i);

// 7
function banknotes(amount, notes) {
    let result = [];

    for (let i = 0; i < notes.length; i++) {

        while (amount >= notes[i]) {
            result.push(notes[i]);
            amount = amount - notes[i];
        }

    }

    return result;
}

console.log(banknotes(57, [25, 10, 5, 1]));

// 8
function counter(word,cha){
    let count=0;
    for (let i = 0; i < word.length; i++) {
        if (word[i].toUpperCase === cha.toUpperCase) {
            count++;
        }
    }
    return count;
}
console.log(counter("Coding Academy by Orange", "o"));

// 9
for (let i = 0; i <= 20; i++) {
    console.log(i);
}
for (let i = 3; i <= 29; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}
for (let i = 12; i >= -14; i--) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
for (let i = 50; i >= 20; i--) {
    if (i % 3 === 0) {
        console.log(i);
    }
}

// 10

let TEXT = "CodingAcademy";

let ARRAY = [7, 500, "KH404", "black", 36];

for (let i = 0; i < ARRAY.length; i++) {
    console.log(ARRAY[i]);
}
for (let i = TEXT.length - 1; i >= 0; i--) {
    console.log(TEXT[i]);
}

// 11
let NUMBERS = [7, 23, 18, 9, -13, 38, -10, 12, 0, 124];
let EVENS = [];
let ODDS = [];
for (let i = 0; i < NUMBERS.length; i++) {
    if (NUMBERS[i] % 2 === 0) {
        EVENS.push(NUMBERS[i]);
    } else {
        ODDS.push(NUMBERS[i]);
    }
}
console.log(EVENS);
console.log(ODDS);

// 12

let proteins = [
    "chicken","pork",
    "tofu","beef",
    "fish","beans"
];

let grains = [
    "rice","pasta","corn","potato","quinoa","crackers"
];

let vegetables = [
    "peas","green beans","kale","edamame","broccoli","asparagus"
];

let beverages = [
    "juice","milk","water","soy milk","soda","tea"
];

let desserts = [
    "apple","banana","more kale","ice cream","chocolate","kiwi"
];
let numberOfMeals = 5;
let meals = [];

for (let i = 0; i < numberOfMeals; i++) {

    let meal =
        proteins[i] + ", " +
        grains[i] + ", " +
        vegetables[i] + ", " +
        beverages[i] + ", " +
        desserts[i];

    meals.push(meal);
}

console.log(meals);

// Objects

function getPropertyNames(obj) {
  return Object.keys(obj);
}

function countProperties(obj) {
  return Object.keys(obj).length;
}

function mergeObjects(obj1, obj2) {
  return Object.assign({}, obj1, obj2);
}

function toUpperCaseValues(obj) {
  const result = {};
  for (let key in obj) {
    result[key] = String(obj[key]).toUpperCase();
  }
  return result;
}
function removeNullProperties(obj) {
  const result = {};
  for (let key in obj) {
    if (obj[key] !== null) {
      result[key] = obj[key];
    }
  }
  return result;
}

function getSortedPropertyNames(obj) {
  return Object.keys(obj).sort();
}
