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
    #sides
    // #sidesLength

    constructor(name,sides){
        this.#name = name ;
        this.#sides = JSON.parse(JSON.stringify(sides));
    }

    perimeter(){
        return this.#sides.reduce((acc,e) => acc + e);
    }

    area(){
        
    }
}

const square = new Shape('square',[2,2,2,2]);

// console.log(square.sides);
console.log(square.perimeter())
