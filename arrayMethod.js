
// Array 
let arr = [34,45,67,89,90,56,78,90,23,45]        // array which group of the variable
console.log(arr,typeof(arr))       //which is object 

//Array constructor
//main point about the array that sort m
let arr1 = new Array(7)     //parameter which is length 
// here intialize to array size which creating 7 length but 
// main things that here empty variables add 
console.log(arr1)
// Array(7) [ <7 empty slots> ]

// array method 
// concat method
// const array1 = ['a', 'b', 'c'];
// const array2 = ['d', 'e', 'f'];
// const array3 = array1.concat(array2);
// console.log(array3);

// entries
// const iterator1 = arr.entries();
// // return the iterator
// console.log(iterator1.next().value) //[ 0, 34 ]
// console.log(iterator1.next().value)

// filter
// const eventArr = arr.filter(e => e % 2 == 0);
// const oddArr = arr.filter(e => e % 2 !== 0);
// console.log(eventArr);
// console.log(oddArr);

// find()
const finde = arr.find(e=>e>50)
console.log(finde)  //67

// flatMap()
// return array which is depth one to convert the all subarray to element
// const arr2 = [1, 2, [3], [4, 5], 6, [[[5,6,[90,[5,7,9]]]]]];
// const flatmap = arr2.flatMap(num => num);
// console.log(flatmap);

// Array.from()
// create new array shallow-copied array instance from given existence array
const charArr = Array.from("jayendra");
console.log(charArr)


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

