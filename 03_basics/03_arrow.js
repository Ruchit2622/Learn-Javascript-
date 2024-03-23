const user = {
username: "Ruchit",
price: 599,

welcomeMessage: function(){
    console.log(`${this.username} , welcome to website`);
    }
}

// user.welcomeMessage()

const chai = function(){
    let username = "Riupcl"
    console.log(this.username);
}

// chai()

// const addTwo = (num1 , num2) => {
//     return num1 + num2
// }

// const addTwo = (num1 , num2) => num1 + num2

const addTwo = (num1 , num2) => (num1 + num2)

console.log(addTwo(3,8))