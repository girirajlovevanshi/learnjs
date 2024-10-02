function Person(name, age) {
    this.name = name;
    this.age = age;

    Person.prototype.talk = function(){
        console.log(`hi, my name is ${this.name}`);
        
    }
}

let Person1 = new Person ("giri", 22);
console.log(Person1);
