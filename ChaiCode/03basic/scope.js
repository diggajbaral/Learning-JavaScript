
// Don't use var
// use let and const (only)

if (true) {

    const username = "nothing"

    if (username === "nothing") {
        const website = " google"
        console.log(username + website);
    }

    // console.log(website); // Error - (You can't acess value for child)
} // Only child can acess value from parents.

// - - - IMPORTANT to know,

function addOne(num) { // @ Function
    return num + 1
}
console.log(addOne(4)); // 5

const addTwo = function(num) { // @ Express Function
    return num + 2
}
console.log(addTwo(5)); // 7
