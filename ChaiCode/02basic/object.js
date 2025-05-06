
const mySymbol = Symbol("null")

const JsUser = {

    name : "Nothing",
    age : 18,
    locaction : "Gali no. Aath, Juipter",
    email : "nothing@nolook.com",
    [mySymbol] : "empty"

}

JsUser.greet = function() {
    console.log("Hello, JavaScript");
}
console.log(JsUser.greet());

JsUser.age = 21;
// Object.freeze(JsUser) // The next value willn't pass,
// JsUser.age = 81;

console.log(JsUser);


