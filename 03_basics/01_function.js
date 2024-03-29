

function sayMyName(){
    console.log("R");
    console.log("U");
    console.log("C");
    console.log("H");
    console.log("I");
    console.log("T");
}

// sayMyName()

function addTwoNumber(number1, number2){
    // console.log(number1 + number2);
    return number1 + number2
}

const result = addTwoNumber(4,5)

// console.log("Result: ", result);


function loginUserMessage(username){
    if(username === undefined){
        console.log("Please Enter a Username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Ruchit"))
console.log(loginUserMessage("Patel"))

function calculateCartPrice(...num1){
        return num1
}

console.log(calculateCartPrice(488, 395, 337, 322, 269, 205, 157, 100, 68, 32));

const user = {
     username: "Ruchit",
     price: 499
}

function handleObject(anyobject){
      console.log(`Username is ${anyobject.username} and price is ${anyobject.price}.`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 1500
})