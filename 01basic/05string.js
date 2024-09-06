let str = "Hello";
console.log(str.charAt(1)); // "e"

let str0 = "Hello";
console.log(str0.charCodeAt(1)); // 101 (Unicode of 'e')

let str1 = "Hello";
let str2 = "World";
console.log(str1.concat(" ", str2)); // "Hello World"

let str3 = "Hello World";
console.log(str3.includes("World")); // true

let str4 = "Hello World";
console.log(str4.endsWith("World")); // true

console.log(str.repeat(3)); // "HelloHelloHello"

console.log(str3.replace("World", "Everyone")); // "Hello Everyone"

console.log(str3.split(" ")); // ["Hello", "World"]

let str5 = "  Hello World  ";
console.log(str5.trim()); // "Hello World"

console.log(str.toLowerCase()); // "hello world"

console.log(str.toUpperCase()); //"HELLO WORLD"

console.log(str.indexOf('H')); //-1 not exist, if exist return first index no 

console.log(str5.trim().toUpperCase()); //Method chanining

console.log(str.replace('llo','ro'));
