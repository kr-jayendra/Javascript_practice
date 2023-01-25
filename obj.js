
// creating object using method 
function createUser(firstName, lastName, email, age, address){
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = function(){
        return `${this.firstName} is ${this.age} years old.`;
    };
    user.is18 =  function(){
        return this.age >= 18;
    }
    return user;
}

// insted of use with you can use constructor 
function User(firstName, lastName, email, age, address){

    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
    this.about = function(){
        return `${this.firstName} is ${this.age} years old.`;
    };
    this.is18 =  function(){
        return this.age >= 18;
    }
    
}

// const u1 = createUser("harshad","parmar","parmar@mail.com",23,"gujarat");
// console.log(u1);
// console.log(u1.about());
// console.log(u1.is18());

const u1 = new User("harshad","parmar","parmar@mail.com",23,"gujarat");
console.log(u1);
console.log(u1.about());
console.log(u1.is18());


const band = {
    bandName : "led zepplin",
    famousSong: "stariway to heaven",
    year:2001,
    viralSong:"yararanna.."
};


const {bandName ,famousSong,...restcon } = band; 

// you can implemented it below type 
// to use with value1 and value2 to assign the value 
// const {bandName : value1,famousSong : value2} = band; 
// console.log(value1,value2);

// restone assign the rest of variable as object form 
console.log(bandName,famousSong,restcon)

//nested destructuring 
const users = [
    {userId: 1,firstName: 'harshit', gender: 'male'},
    {userId: 2,firstName: 'mohit', gender: 'male'},
    {userId: 3,firstName: 'nitish', gender: 'male'},
]

// to add on the property into the object 
for(const u of users){
    u.val = 89;
    console.log(u,typeof u);
}

// const [user1,...resUser] = users;
// console.log(user1,resUser)

// const obj = {
//     pro:"property",
//     arr : [5,6,4,5,6],
//     fun : function(first,second){
//         console.log(this.pro,this.arr,first,second)
//     }
// }

// const obj2 = {
//     pro : "property2",
//     arr:[23,78,45]
// }

// // to use with property of any declared object 
// obj.fun.call(obj2,"obj2","obj2-last")

// // same as call but here parameter as array form 
// obj.fun.apply(obj2, ["first-name","last-name"]);

// // bind method is similar but its return the function 
// const method = obj.fun.bind(obj2,"obj2","obj2-last")
// method();