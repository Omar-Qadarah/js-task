// 1-JavaScript Functions

function sm(x){
return Math.min(...x);
}
console.log(sm([30, 45, 60, 7]));
// 2
function order(x){
    return x.split("").sort().join("");
}
console.log(order("hello"));
// 3
function factorial(n){
    let f=1;
    for (i=n;i>0;i--){
        f=f*i;
    }
    return console.log(f);
};
factorial(8);
// 4
function EO(N) {
    if (N % 2 == 0) {
        return console.log("EVEN");
    }else{
        return console.log("ODD");
    };
}
EO(9);
// 5. Return the sum of a number going back to it's root. In other words, the function will work

let addup =(n) =>{
    let add=0;
    for (let i = n; i > 0; i--){
        add +=i;
    }
    return console.log(add);
}
addup(7);
// 6. Create a function that will accept an array and do the following:
let mMla=(a) =>{
    let b=[];
    b.push(Math.min(...a));
    b.push(Math.max(...a));
    b.push(a.length);
    let sum=0;
    for (let i = 0; i < a.length; i++) {
        sum+=a[i];        
    }
    b.push((sum/(a.length)));
    return console.log(b);
}
mMla([7, 13, 3, 77, 100]);

// 7. Return how many words was given/
let countwords=(a) =>{
    let b = a.split(" ");
    return console.log(b.length);
}
countwords('hello from CodingAcademy!');


// 8.Create function to Multiply all elements in an array by it's length
let ml=(a) =>{
    let b=[];
    for (let i = 0; i < a.length; i++) {
        b.push(a.length*a[i])        
    }
    return console.log(b);    
}
ml([4,2,5]);

// 9

let match=( a, b ) =>{
    let c= a.split("");
    let d= b.split("");
    let e= c.length - d.length;
    let f=0;
    for (let i = e; i < c.length; i++) {
        if (c[i] == d[f]){
            f++;
        }else{
            return console.log("false");
        }        
    }
    if (f==d.length) {
        return console.log("true");
    }

}
match("CodingSchool", "Ac");

// 10

let r=(a) =>{
    let b=a.split("");
    let c=[];
    for (let i = 0; i < b.length; i++) {
        c.push (b[i]);
        c.push (b[i]);        
    }
    return console.log(c.join(""));
}
r('Coding');

// 11

let findex=(a,b)=>console.log(a.indexOf(b));

findex(['Ali', 'Mazen', 'Ayham', 'Murad'], 'Ali');