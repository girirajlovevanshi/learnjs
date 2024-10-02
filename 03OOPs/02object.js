// {} => eMPTY Object

let obj =  {
    name : "name",
    //name : "name", - this one overide pervious name 
    //"name" : "nameeee", - this one overide pervious name 
    "name1" : "name1",
    "my name" : "my name",
    //my name : "my name " not possible
    key : "value"
}

//accessing obj 

console.log(obj.name);
//console.log(obj.name()); // name not an function
console.log(obj["name"]);
// console.log(obj.["name"]); wrong
console.log(obj["my name"]);
