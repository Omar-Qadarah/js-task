// 1

const man={
    name:"Adam",
    age:25,
    gender:"male",
};
console.log(Object.values(man).join(" "));

const sman={
    name:"Adam",
    age:25,
};
sman.gender="male";
console.log(sman);

console.log(sman.name);

// 2

let nums=[1,2,3,4,5];
nums.forEach(function print(x) {
    return console.log(x);
});

let fruits= ["banana", "apple", "cherry"];
fruits.sort();
console.log(fruits);

fruits.reverse();
console.log(fruits);

const one=[1,2,3];
 const two=[4,5,6];
const three=one.concat(two);
console.log(three);

const four=[...three.slice(0,2),...three.slice(4)];
console.log(four);

let numbers=[1,2,3,4,5];
numbers.splice(0,1);
numbers.splice(1,3);
console.log(numbers);

numbers=[1,2,3,4,5];
console.log( numbers.indexOf(3));

let NUM="";
NUM=numbers.join(",");
console.log(NUM);

let array=NUM.split(",");
console.log(array);

console.log(array.length);

for(let n of numbers){
    console.log(n)
}

console.log(Array.isArray(array));