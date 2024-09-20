
function poem(){
    console.log("...............dd");
    console.log("...............dd");
    console.log("...............dd");
    console.log("...............dd");    
}

//poem()


// roll dice and print value from 1 to 6

function roll() {
    // let num = Math.ceil(Math.random()*10)
    // if (num <= 6){
    //     console.log(num);  
    // } else{
    //     roll();
    // }

    let ran = Math.random();
    console.log("ceil",Math.ceil(ran*6));
    console.log("floor",Math.floor(ran*6)+1);
}

// for ( i = 1; i <= 10; i++){
//     roll()
// }


// Average of 3 numbers

function avr(num1,num2,num3){
    console.log((num1+num2+num3)/3);  
}

// avr(2,2,3)


//funcation for create table

function table(num) {
    for (i = 1; i<=10; i++){
        console.log(`${num} * ${i} = ${i*num}`);
    }
}

table(10)