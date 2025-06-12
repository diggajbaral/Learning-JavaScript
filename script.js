
const greeting = "hello word"

for (const greet of greeting) {

    if (greet === ' ') {
        continue
    }
    console.log(`Each char is, ${greet}`);

}
