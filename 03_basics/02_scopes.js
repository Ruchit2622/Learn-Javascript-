
// Example
/*
const seatBook = 5 
var ticketPrice = 1800

if(ticketPrice == 10000){
    console.log("Your Vip (PRIME) Ticket Booked Succesfully.");
    console.log("Seat Book : ",seatBook);
    console.log("Ticket Price :",ticketPrice);
    console.log("Total (Including Food):",ticketPrice*seatBook);
    console.log("Tickets Arrive In Home In Next 4-5 Working Days.");
    return
}   

if(ticketPrice < 1000){
    console.log("Ticket Price Not Available For This Range. Available Range Is 1800 to 2000 And Vip Ticket Is 10,000");
    return
}

if(ticketPrice > 2000){
    console.log("Ticket Price Not Available For This Range. Available Range Is 1800 to 2000 And Vip Ticket Is 10,000.");
    return
}

if(seatBook > 5){
    console.log("Select Max 5 Seat Per Slot.");
    return
}

if(seatBook == 1){
    console.log("Your Ticket Booked Succesfully.");
    console.log("Seat Book : ",seatBook);
    console.log("Ticket Price :",ticketPrice);
    console.log("Total (Discount: 100 Rupees):",ticketPrice-100);
    return
}

else{
    console.log("Your Tickets Booked Succesfully.");
}

 console.log("Seat Book : ",seatBook);
 console.log("Ticket Price :",ticketPrice);
 console.log("Total (5% Discount) :",ticketPrice*seatBook/1.05);
 console.log("Tickets Arrive In Home In Next 4-5 Working Days.");
*/


function one(){
    const username = "Ruchit"

    function two(){
        const website = "Youtube"
        console.log(username);
    }
    // console.log(website);

    two()
}

// one()

if(true) {
    const username = "RP"
    if (username === "RP"){
        const website = "Youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username)

// +++++++++++++++++++++++  Intresting  +++++++++++++++++++++++++++++++

console.log(addone(5))                                                                                                                      

function addone(num){
    return num + 1
}


const addTwo = function(num){
    return num + 2
}

console.log(addTwo(5))