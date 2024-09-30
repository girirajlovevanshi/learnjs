let arr = [1,2,3,4]

// forEach
arr.forEach(function(val){
    console.log(2*val)
})

// map - it create a new mapped array
let arr1 = arr.map(function(val){
    return 2*val
})
console.log(arr1);

// filter
let arr2 = arr1.filter(function(val){
    if(val > 5 ){
        return true
    }
})
console.log(arr2);

// find 
arr.find(function (params) {
    if (params === 3) {
        return console.log(params);
        
    }
})

// indexOf
console.log(arr.indexOf(2));
 