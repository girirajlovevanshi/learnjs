
class Person {
    constructor( name, age){
        this.name = name;
        this.age = age;
    }
    talk(){
        console.log(`Hi, my name is ${this.name}`);
        
    }
}

let Person1 = new Person("giri", 22);

console.log(Person1);
