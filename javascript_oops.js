// classes and objects 
class Person {

    #name = 'hello'
    #age
    //making constructor 
    constructor(name,age) {
      this.#name = name;
      this.#age = age ;
    }
    
    introduceSelf() {
    //   console.log();
        return `Hi! I'm ${this.name} and i am ${this.age} years old`
    }
  
}

class Profeisonal extends Person{

    constructor(name,job,age){
        super(name,age);
        this.job = job ;
    }

    // method overriden property
    introduceSelf(){
        // console.log("he is the professional guy");
        return super.introduceSelf() + ` and working as ${this.job}`;
        // console.log(`Hi! I'm ${this.name} and i am ${this.age} years old and working as ${this.job}` )
    }


}

// const p1 = new Person('jayendra');
// console.log(p1.name)

// const p2 = new Profeisonal('harshad','full-stack development',21);
// console.log(p2.introduceSelf());

class Shape{

    #name
    #sidesLength
    #sides

    // constructor(){
    //     console.log("this difualt constructor")
    // }


    constructor(name,sides,sidesLength){
        this.#name = name ;
        this.#sides = sides ;
        this.#sidesLength = JSON.parse(JSON.stringify(sidesLength));    //for deep_copy
    }

    perimeter(){
        return this.#sidesLength.reduce((acc,e) => acc + e);
    }

    area(){

    }

    getSides(){
        return this.#sides;
    }

    getSideLegth(){
        return this.#sidesLength
    }
}

class Square extends Shape{

    constructor(name,sides,sidesLength){
        // super(name,sides,sidesLength)
        super()
        
        try{

            // console.log(this.getSide())
            if(this.getSides() != 4)
                throw new "must be contain four sides";
            
                const s = this.getSideLegth()[0];
                // console.log(this.getSideLegth());
                const sq = this.getSideLegth().filter((e) => s === e);
                
            if(sq.length != this.getSides()){
                // throw new Error("this is not valid square");
                console.log(sq.length);
            }
        }
        catch(err){
            console.log(err);
        }
    }
}

const sq = new Square('square',4,[2,2,2,2])
// const square = new Shape('square',[2,2,2,2]);

// // console.log(square.sidesLength);
// console.log(square.perimeter())


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