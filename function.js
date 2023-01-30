// function statement

function a(){
    console.log("this is the function statmenat")
}

// console.log(a())
console.log(b)

// b() //get the error

// function expression 
var b = function(name){
    console.log("My Name is ",name)
} 

// console.log(b("jayendra"))

// arrow function 
var area = (radius)=>{
    return Math.PI * radius * radius;
}

console.log(area(90));


// difference between function and arrow function 
// arrow function 

// not bind : this , super (instance , method)
// can't use in constructor 
// can't call with new keyword 


// lexical environment
function init(){
    var name = "jay"

    // inner function 
    function displayName(){
        var name = "poja"
        console.log(name);
    }
    // displayName();
    console.log(name);

    // return displayName;
}

// init();

// closures 
// a closures is the combination of a function bundled together (enclosed) with references to its surrounding state (lexical environment)

function x(){
        var a = 7 ;
        function y(){
            console.log(a);
        }
        // y();
        return y;
    }
// init()();
// x();

console.log(x(),typeof x)
x()();

// function z(){
//     for(var i = 1; i<= 5; i++){
//         setTimeout(function(){
//             console.log(i);
//         },i*1000);
//     }
//     // console.log()
// //      6
// //      6
// //      6
// //      6
// //      6
// }

// z()

// to make it closure than you can solve above the problem
// function z(){
//     for(var i = 1; i<= 5; i++){
//         function close(val){
//             setTimeout(function(){
//                 console.log(val);
//             },val*1000)
//         }
//         close(i);
//     }
  
// }
// z()

// rest parameter 
function myfun(...args){
    return args.reduce((acc,e)=> acc + e);
}
console.log(myfun(2,3,5,6,21,2,3,3))


const person = {
    firstName : "jayendra",
    gender : "male",
    age : 21
}
// parameter destructing 
function printDetails({firstName,gender,age}){
    console.log(firstName,gender,age)
}

printDetails(person)
// console.log()

let val1 = "this is global var"
let y = function(){
    console.log(val1)
}

let fun1 = function(){
    val1 = "this is block of the x"
    return y;
}

//here refer noraml block scope 
y()
let z = fun1();     //when after lexical bind attach than 
y()                 //function follow the closure or its closure 
// z();

