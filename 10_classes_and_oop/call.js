function SetUserame(username){
    // Complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUserame.call(this, username)

    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "786")
console.log(chai);