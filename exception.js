// Error handle try-catch 
// here not handle the error due to callback which execute after timer out after that 
// its get syntax error but not handle the error by try-catch 

// try {
//     setTimeout(function() {
//       noSuchVariable; // script will die here
//     }, 5000);
//   } catch (err) {
//     alert( "won't work" );
//   }

// handle by the catch
// setTimeout(function() {
//     try {
//       noSuchVariable; // try...catch handles the error!
//     } catch {
//       alert( "error is caught here!" );
//     }
//   }, 1000);

let errorHandle = function () {

    let json = "{ bad json }";

    try {

        let user = JSON.parse(json); // <-- when an error occurs...
        alert(user.name); // doesn't work

    } catch (err) {
        // ...the execution jumps here
        // alert( "Our apologies, the data has errors, we'll try to request it one more time." );
        // alert( err.name );
        // alert(err.message);
        console.log(err.message)
    }
}

// errorHandle();

const customError = () => {

    let json = '{"age": 30 }'; // incomplete data

    try {

        let user = JSON.parse(json); // <-- no errors

        if (!user.name) {
            throw new SyntaxError("Incomplete data: no name"); // (*)
        }

        console.log(user.name)

    } catch (err) {
        alert("JSON Error: " + err.message); // JSON Error: Incomplete data: no name
    } if (err instanceof SyntaxError) {
        alert("JSON Error: " + err.message);
    } else {
        throw err; // rethrow (*)
    }

}

// customError();

// rethrowing 

const rethrowing = () => {

    let json = '{ "age": 30 }'; // incomplete data
    try {

        let user = JSON.parse(json);

        // if (!user.name) {
        //     throw new SyntaxError("Incomplete data: no name");
        // }

        // unexpected error
        // blabla);

        glgl();

        write();new Error("not know this error");
    } catch (err) {
        // console.log(err.message)
        if (err instanceof SyntaxError) {
            console.log("error handle which know")
        } else {
            throw err;      //rethrowing to parent scope which handle (if try-catch exist otherwise error occur)
        }
    }
}

const rethrow1 = () => {

    try {
        rethrowing()
    } catch (err) {
        console.log("this is the error : ",err);
    }
}

rethrow1();
