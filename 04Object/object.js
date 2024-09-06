// Singalton

//

const mySym = Symbol("Key1") // symbol
// object

const user = {
    name : "giri",
    "full name" : "giriraj",
    [mySym]: "key1" // Symobol in object
}

console.log(user.name);
console.log(user["full name"]);
console.log(user.mySym); // not accessable ( show undefined)
console.log(user[mySym]);

//changing value in object

user.name ="giriraj"
console.log(user.name)

// freeze

Object.freeze(user)
user.name ="giri"
console.log(user.name)





