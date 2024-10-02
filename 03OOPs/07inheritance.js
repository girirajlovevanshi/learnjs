class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    talk(){
        console.log(`Hi, my name is ${this.name}`);
        
    }
}

class Student extends Person {
    constructor(name, age, rollNo) {
        super(name,age)
        this.rollNo = rollNo;
    }
    Student(){
        console.log(`my roll no is ${this.rollNo}`);
        
    }
}

let Student1 = new Student("giri",22, 16)

console.log(Student1);
