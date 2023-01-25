const sentence = 'The quick brown fox jumps over the lazy dog.';
console.log(sentence.charAt(5))

const str1 = "hello";
const str2 = "\nworld"
console.log(str1+str2);
console.log(str1.concat(str2))

// endwith 
console.log(sentence.endsWith("dog",100))

// slice(start, end)
// substring(start, end)
// substr(start, length)

console.log(sentence.slice(4,8));
console.log(sentence.substring(4,8));
console.log(sentence.substr(4,8));

// difference between slice and substring 
//  The substring() method swaps its two arguments if indexStart is greater than indexEnd, meaning 
// that a string is still returned. The slice() method returns an empty string if this is the case.
// substring property start with index base 0  
console.log(sentence.slice(-4,-1));
console.log(sentence.substring(6,3));

