const matchNo = 12
const ticketPrice = 5000
const seatBook = 8
const location = "b-501,narths banglos,nikol,ahmedabad-380025"
const mobileNo = "9327351824"
const payment = "paytm"


if(matchNo < 8){
    console.log("matches is finished. available match is 8 to 65");
    return
}

if(matchNo > 65){
    console.log("not available match. available match is 8 to 65");
    return
}

if(ticketPrice<1800){
    console.log("not available range. available is 2500 to 5500");
    return
}

if (ticketPrice>5500) {
    console.log("not available range. available is 2500 to 5500");
    return   
}


if (seatBook === 0){
    console.log("minimum 1 seat book");
    return
}

if (seatBook>20) {
    console.log("maximum 20 seat book per slot");
    return
}

if (location === "") {
    console.log("enter your location. please enter right location your tickets are delivery in this location");
    return
}

if(mobileNo === ""){
    console.log("enter your mobile number.");
    return
}

if (payment === "cod"){
    console.log("payment method not available. available payment method is gpay ,phonepay and paytm.");
    return
}

if (payment === "") {
    console.log("payment method not available. available payment method is gpay ,phonepay and paytm.");
    return   
}

if (seatBook) {
    console.log(`Total Payment: ${seatBook*ticketPrice}`)
}

if (payment === "paytm") {
    console.log("payment in this paytm number(9106330710).");
    console.log("payment and send ss to whatsapp. under 2 hour payment is confirmed.");
    console.log("order is confirmed message in your register mobile number.");
    console.log(`Delivery in this location : ${location}`)
    return
}

if (payment === "gpay") {
    console.log("gpay(9106330710) this number and send 12 digit utr number.");
    console.log("payment and send ss to whatsapp. under 2 hour payment is confirmed.");
    console.log("order is confirmed message in your register mobile number.");
    console.log(`Delivery in this location : ${location}`)
    return
}

if (payment === "phonepay") {
    console.log("phonepay(9106330710) this number and enter 12 digit utr number.");
    console.log("payment and send ss to whatsapp. under 2 hour payment is confirmed.");
    console.log("order is confirmed message in your register mobile number.");
    console.log(`Delivery in this location : ${location}`)
    return
}









