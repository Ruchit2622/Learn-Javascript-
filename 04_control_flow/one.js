                    /* 1st Program */
// if
// const isUserLoggedIn = true
// const temperature = 42

// if (temperature == 42){
//    console.log("IS 42");
// } else{
//     console.log("Is Not 42");
// }

// < , > , <= , >= , == , != , ===

                    /* 2nd Program */

// const score = 200

// if(score > 100) {
//     const power = "fly"
//     console.log(`user Power : ${power}`);
// }

                     /* 3rd Program */  

// const balance = 2000

// if (balance > 500) console.log("Your Balance Is Greter than 500");

                     /* 4th Program */

// const balance = 2000

// if (balance < 1000) {
//        console.log("Less Than 1000");
// } else if (balance < 1500){
//     console.log("Less Than 1500");
// } else if (balance < 1900){
//     console.log("Less Than 1900");    
// } else {
//     console.log("Less Than 2500");
// }

                     /* 5th Program */

const isUserLoggedIn = true
const debitcard = true
const loggedInFromGoogle = true
const loggedInFromEmail = false

if (isUserLoggedIn && debitcard) {
    console.log("Allow To Buy Product");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User Logged In");
}