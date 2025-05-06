
const user = {
    username: "Steve",
    price: 999,
    welcomeMessage : function() {
        // console.log(`${username}, Welcome to Apple`); // Don't Use
        console.log(`${this.username}, Welcome to Apple`); // Just Use (this.username)
    }
}

user.welcomeMessage()


// Arrow.js
const addOne = (num1, num2) => {
    return num1 + num2
}
console.log(addOne(2, 2));
// OR
const addTwo = (num1, num2) => num1 + num2 // or ... => (num1 + num2) add in parenthesis
console.log(addTwo(5, 2));
