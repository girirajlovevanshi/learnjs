function PersonMaker(name,age){
    const person = {
        name : name ,
        age : age ,
        talk(){
            console.log(`my name is ${this.name}`);
            
        }
    }
    return person
}

let person1 = PersonMaker( "giri", 22);

console.log(person1);
console.log(person1.name);
console.log(person1.name);

