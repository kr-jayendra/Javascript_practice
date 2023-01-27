const { send } = require("process");

let sentence = 'The quick brown dog jumps over the lazy dog.';
console.log(sentence.charAt(5))

const str1 = "hello";
const str2 = "\nworld"
console.log(str1+str2);
console.log(str1.concat(str2))
console.log("-----------------------------------------------------------------------------------------------------")
// endwith 
console.log(sentence.endsWith("dog",100))

// slice(start, end)
// substring(start, end)
// substr(start, length)
console.log("-----------------------------------------------------------------------------------------------------")
console.log(sentence.slice(4,8));
console.log(sentence.substring(4,8));
console.log(sentence.substr(4,8));
console.log("-----------------------------------------------------------------------------------------------------")
// difference between slice and substring 
//  The substring() method swaps its two arguments if indexStart is greater than indexEnd, meaning 
// that a string is still returned. The slice() method returns an empty string if this is the case.
// substring property start with index base 0  
console.log(sentence.slice(-4,-1));
console.log(sentence.substring(6,3));
console.log("-----------------------------------------------------------------------------------------------------")

// Replace
// main point 
// The replace() method does not change the string it is called on.
// The replace() method returns a new string.
// The replace() method replaces only the first match
// let newText = sentence.replace("brown", "blue");
// let changText = sentence.replace(/dog/i, "lion");
// console.log(newText,changText)

// sentence = sentence.replaceAll(/dog/g, "lion");
// // let changText = sentence.replaceAll(/dog/i, "lion");
// // console.log(newText,changText)
// console.log(sentence);


// String indexOf()
// The indexOf() method returns the index of (position of) the first occurrence of a string in a string:
console.log(sentence.indexOf("dog"));

// The lastIndexOf() method returns the index of the last occurrence of a specified text in a string:
console.log(sentence.lastIndexOf("dog"));

// search method 
// The search() method searches a string for a string (or a regular expression) and returns the position of the match:
console.log(sentence.search("quick"))
// search also take regular expression 
console.log(sentence.search(/quick/i))

// match
// The match() method retrieves the result of matching a string against a regular expression.
let text = "The rain in SPAIN stays mainly in the plain";
text.match("ain"); 
console.log(text.match("ain"))

const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
const regex = /[A-Z]/g;
const found = paragraph.match(regex);
console.log(found)

// String includes()
// return true if contain the givin parameter 
const isin = sentence.includes("dog");
console.log(isin)

// String startsWith()
// return true if contain startwith paramerter
const issw = sentence.startsWith("The quick")
console.log(issw)
