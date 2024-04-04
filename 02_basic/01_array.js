//array
const myArr = [0,1,2,3,4,5]
console.log(myArr);
const myArr2 = new Array(1,2,3,4,5)
console.log(myArr2);
//Array Methods

myArr.push(6)
console.log(myArr)
myArr.push(7)
console.log(myArr);
myArr.pop()
console.log(myArr);

myArr.unshift(8)
console.log(myArr);
myArr.unshift(9)
console.log(myArr);
myArr.shift()
console.log(myArr);
myArr.shift()
console.log(myArr);

console.log(myArr.includes(10));
console.log(myArr.includes(11));
console.log(myArr.includes(1));

console.log(myArr.indexOf(0));
console.log(myArr.indexOf(1));

const newarr = myArr.join()
console.log(myArr);
console.log(newarr);
console.log(myArr);
console.log(typeof(myArr));
console.log(newarr);
console.log(typeof(newarr));
console.log(myArr2.join());

//Slice and Splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);

// way for marging arrays

let arr1 = ["AA","BB","CC", "DD","EE"];
let arr2 = ["aa", "bb", "cc","dd", "ee"];

//using push

arr1.push(arr2); //arr2 behave as a single element in arr1 
console.log(arr1);
console.log(arr1[5][2]);
console.log(arr2);
arr1 = ["AA","BB","CC", "DD","EE"];
arr2 = ["aa", "bb", "cc","dd", "ee"];

//using concate 

const concatedArr = arr1.concat(arr2); //have limitation, only can concat two array at a time
console.log(concatedArr);

// using spread 
const arrSpread1 = [...arr1, ...arr2]
console.log(arrSpread1);
const arrSpread2 = [...arr1, ...arr2, ...arrSpread1] //marage any no of arr
console.log(arrSpread2);

let num ="hello";
const arrSpread3 = [...arr1, ...arr2, ...num]

// 
const another_array = [1,2,3, [4,5,[6,7,[8,9]]],1]
const real_another_array1 = another_array.flat(1);
const real_another_array2 = another_array.flat(2);
const real_another_array3 = another_array.flat(Infinity);
console.log(real_another_array1);
console.log(real_another_array2);
console.log(real_another_array3);

console.log(Array.isArray("GIRI"));
console.log(Array.from("GIRI"));
console.log(Array.from({name: "giri"}));

let num1 = 100;
let num2 = 200;
let num3 = 300;

console.log(Array.of(num1, num2, num3));