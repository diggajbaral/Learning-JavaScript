
const tinderUser = {}

tinderUser.id = "777"
tinderUser.name = "Nothing Parsad"
tinderUser.isLogged = false
// console.log(tinderUser);

///

const obj1 = {
    1: "a",
    2: "b",
}

const obj2 = {
    3: "c",
    4: "d",
}

// const obj3 = Object.assign({}, obj1, obj2) // One
const obj3 = {...obj1, ...obj2} // Two
console.log(obj3);
