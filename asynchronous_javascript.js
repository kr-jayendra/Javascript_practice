
//callback 
const sumOfNumber = function (num1, num2, callback1, callback2) {
    const result = num1 + num2;
    callback1(result, callback2);
}

const sumOfNumbe = function (num1, num2, callback1, callback2) {
    const result = num1 + num2;
    callback1(result, callback2);
}

// const add = (n1, n2, (n1, n2) => {
//     return n1 + n2;
// })

// console.log(add(3, 4))
// sumOfNumber(2,5,function(result){
//     console.log("this is the answer provide after result generate by callback ")
//     console.log(result)
// })

const cb1 = (res, cb2) => {
    cb2(res * res);
}

const cb2 = (ans) => {
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


//promise
// The Promise object represents the eventual completion(or failure) of an
// asynchronous operation and its resulting value.

// **important 
// --> promise is the imuutable object that means not change the object data

// in promise three states accoding its execute by follow this states 
// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.

//let's create own promise 

// here example that we make the card with its orderid when order procced than according order-api
// we take orderid and vaildate if its true than promise resolve and than we procced to payment with its
// order-id 

let validateCard = (orderid) => {
    return orderid === "" ? false : true;
}

let successfullyPaymentCard = (orderid) => {

    // here we create the promise object which contain the resolve and reject callback
    const pr = new Promise(function (resolve, rejected) {

        if (!validateCard(orderid)) {
            const err = new Error("this is the invalidate the orderid / product");
            rejected(err);
        } else {
            setTimeout(() => {
                resolve(orderid);
            }, 3000);
        }

    })

    return pr;
}

const promise = successfullyPaymentCard("234")

// promise chain 
// promise
//   .then((orderId) => {
//     console.log(orderId);    //when promise resolve its called and its return orderid as promise 
//     return orderId;          // return orderid as promise
//   })
//   .then((orderId) => {
//     //this logic here its say when you not return than return undefinded  after specific time its return the orderid
//     // after two second
//     // setTimeout(() => {
//     //   console.log(orderId);
//     //   return orderId;
//     // }, 2000);
//     return orderId   //here return orderid but above settimeout which timer 2s therefore after 2s above code execute when promise chain resolve (all of the code executed)
//   })
//   .then((orderId) => {
//       setTimeout(() => {
//         console.log(orderId)
//       }, 2000);
//     // return orderId;
//   })
//   .then((orderId) => {
//     //the chain arrived to here after five second and its get the undefined
//     console.log(orderId);
//     return orderId;
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });


// when any perticular time settimeout and its promise both not called at time more priority 
// promise execute due to micro-task queue execute first 
// after that callback queue content execute 
//all the things mange by the event loop 
promise.then((orderid) => {
    console.log("product orderid : ", orderid)
}).catch((err) => {
    console.log(err.message);
})

let cb3 = function(){
    setTimeout(() => {
        console.log("this is the execute after 1 second ")
    }, 3000);
}

cb3();