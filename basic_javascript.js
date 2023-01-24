
//  javascript variable
// let val1 = "consistency is key"   //string 
// console.log(val1,typeof(val1))

// let a = 12 + 34;
// let b = 34 + "b";   //use with concadtion operator 
// let c = 'c' + 7;
// console.log(a,b,c);

// hostingnpm install -g nodemon
// var val 
// console.log(val);
// // undefined 

// let val2var val 
// console.log(val);
// // undefined 

// let val2
// console.log(val2);

// const val3          Missing initializer in const declaration
// console.log(val3)



// function  
// function abc(){
//     console.log("this is title of the abc")
// }
// abc();

//function expression
// let abc = function(){
//     console.log("this is tile of the abc but difference")
// }

// difference between function and function expression : 
// hosting

// object;
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

// console.log(person,typeof(person));
// console.log(person["firstName"])
// console.log(person.firstName)


// loops
// for in 
// for of
// foreach 

// to use with iterable in the any variable (which is the object(string,object,array also))
for(let k in person){
    // console.log(k);  to print the key 
    console.log(k,person[k])
}

let arr = [34,45,67,89,90]    
for(let k in arr){
    console.log(arr[k])
}

// 
// let arr = [34,45,67,89,90]     
/*
// Array 
let arr = [34,45,67,89,90]        // array which group of the variable
console.log(arr,typeof(arr))       //which is object 

//Array constructor
//main point about the array that sort m
let arr1 = new Array(7)     //parameter which is length 
// here intialize to array size which creating 7 length but 
// main things that here empty variables add 
console.log(arr1)
// Array(7) [ <7 empty slots> ]

// array method 



//main point about the array that sort method sort the string type which lexicographic order
// ex : 
let array = [567,23,12,100,34,20000,3000];
array.sort();
// console.log(array);
// Array(7) [ 100, 12, 20000, 23, 3000, 34, 567 ]

// therefore use to callback in sort method 
array.sort((a,b)=> a-b);
console.log(array);
// Array(7) [ 12, 23, 34, 100, 567, 3000, 20000 ]

*/