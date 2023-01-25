
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

// includes()
console.log(arr.includes(45));

// join()
const joinStr = arr.join('-');
console.log(joinStr);   //34-45-67-89-90-56-78-90-23-45 return as string 

// map 
const nums = [22,78,11,90,3,23,909,233,898]
const numsmap = nums.map((e)=> e * 2);
console.log(numsmap);

//reduce(callback(accumulator,currentvalue,currentindex)) method 
const nums2 = [0,1,2,3,4]
let intialvalue = 1;
const sumofelement = nums2.reduce((acc,e,i)=> acc + e,intialvalue);
console.log(sumofelement);

// find the occurance of given element 
const fruits = [ 'Banana', 'Orange', 'Apple', 'Orange', 'Pear', 'Banana']
const occurrences = fruits.reduce((acc, currFruit) => {
            //spreadopertor
    return {...acc, [currFruit]: (acc[currFruit] || 0) + 1 }
}, {})
console.log(occurrences)

// second example 
//indivdiual element that to sort by highest frequency to lower 
// const nums3 = ['abbced','jayedra','locked','bccedprt']

// const nums4 = nums3.reduce((acc,element)=>{




//     const frArr = element.reduce((acc,currchar)=>{
//         return {...acc,[currchar]:(acc[currchar] || 0) + 1}
//     },{})
//     console.log(frArr);
// })

const students = [
    [  "Kingsley",  70 ],
    [  "Jack",  80 ],
    [  "Joe",  63 ],
    [  "Beth",  75 ],
    [  "Kareem",  59 ],
    [  "Sarah",  93]
]

// to divided the name and score in seperate array using reduce property 
// const names = students.reduce((acc,student)=> [...acc, { student[0] : student[1]} ],{})
// console.log(names);


// slice(start,end)  return array of the shallow copy given element
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
// // console.log(anarr); 
// var anarr = animals.slice(2,4);
// anarr[0] = 'lion'
// console.log(animals,anarr);

// splice
// splice(start)
// splice(start, deleteCount)
// splice(start, deleteCount, item1)
// splice(start, deleteCount, item1, item2, itemN)

// inserting element
let firstan = animals.splice(0,0,'lion')
console.log(animals)

// delete element 
animals.splice(2,1);
console.log(animals)

//delete two element and add in index 1 to three element 
animals.splice(1,2,'tiger','fox','wolvern')
console.log(animals)

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

//array destructing 
let array4 = ['val1','val2','val3','val4','val5'];
let [val1,val2,...array5] = array4;
console.log(val1,val2,array5)


// temporal dead zone 
// console.log(a)
// let a