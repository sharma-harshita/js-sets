// let num = new Set();
// console.log(num);

let num = new Set([1, 2,3,4, 4,4,5, 67]);
num.add("hello")
console.log(num);


for (let val of num){
    console.log(val);
}


const checkVal = num.has(67)
const checkVal2 = num.has(678)
console.log(checkVal, checkVal2);


console.log(num.keys())
console.log(num.values())
console.log(num.entries())


console.log(typeof num);