// singleton
// Object.create

// object literals
const Jsuser = {
    name: "Ruchit",
    fullname: "Ruchit Patel",
    age: 19,
    location: "Ahmedabad",
    email: "ruchit@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"] 
}

// console.log(Jsuser["email"]);
// console.log(Jsuser["full name"]);

// Jsuser.email = "patelruchit@chatgpt.com"
// console.log(Jsuser);
// Object.freeze(Jsuser)
// Jsuser.email = "vikramkalor@ppt.com"


Jsuser.greeting = function(){
    console.log("Hello JS User");
}
Jsuser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.fullname}`)
}

console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());