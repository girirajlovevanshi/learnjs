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