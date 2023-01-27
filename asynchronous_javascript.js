const  sumOfNumber = function(num1,num2,callback1,callback2){
    const result = num1 + num2 ;
    callback1(result,callback2);
    
}

const  sumOfNumbe = function(num1,num2,callback1,callback2){
    const result = num1 + num2 ;
    callback1(result,callback2);
    
}

const add = (n1,n2,(n1,n2)=>{
    return n1+n2;
})

console.log(add(3,4))
// sumOfNumber(2,5,function(result){
//     console.log("this is the answer provide after result generate by callback ")
//     console.log(result)
// })

const cb1 = (res,cb2)=>{
    cb2(res*res);
}

const cb2 = (ans)=>{
    console.log(`this is the answer to convert into square ${ans}`)
}

// sumOfNumber(3,4,cb1,cb2);

// const sumOfNumber = (function(res,cb1){
//     res = num1 + num2;
//     cb1(res);
// },num1,num2)

// console.log(sumOfNumber(2,4))
// )=>{
//     res = num1+num2;
// }
// =>{ 
//     // cb1(num1 + num2);
// }