
//  javascript variable
let val1 = "consistency is key"   //string 
console.log(val1,typeof(val1))



// Array 


let arr = [34,45,67,89,90]        // array which group of the variable
console.log(arr,typeof(arr))       //which is object 

//Array constructor
//main point about the array that sort m
let arr1 = new Array(7)     //parameter which is length 
console.log(arr1)



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

