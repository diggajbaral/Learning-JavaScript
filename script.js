
const user = {
    username : 'diggaj',
    price : 999,

    welcomeMessage: function() {
        console.log(`${this.username}, Welcome to website.`);
    }
}

user.welcomeMessage()