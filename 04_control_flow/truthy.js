                /* 1st Program */
const userEmail = "rp26@ai"

if (userEmail){
    console.log("Got User Email");
} else {
    console.log("Don't Have User Email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values

// "0", 'false', " ", [], {}, function(){}


                   /* Extra Gyannn */

// if (userEmail.length === 0) {
//     console.log("Array Is Empty");
// }


                   /* 2nd Program */

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 25 ?? 35 

console.log(val1);