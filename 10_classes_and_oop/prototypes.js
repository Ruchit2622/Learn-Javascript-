// let myName = "Ruchit          "

// console.log(myName.trim().length);
// console.log(sayMyName.truelength);

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
}

Object.prototype.ruchit =function(){
    // console.log(`ruchit is present in all object`);
}

Array.prototype.heyruchit = function(){
    // console.log(`Ruchit Says Hello `);
}

// heroPower.ruchit()
myHeros.ruchit()
myHeros.heyruchit()
// heroPower.heyruchit()

// inheritance

const User = {
    name: "chai",
    email: "chai26@gmail.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// Modern Syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode   "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"ruchit".trueLength()
"icetea".trueLength()
"what are you doing".trueLength()