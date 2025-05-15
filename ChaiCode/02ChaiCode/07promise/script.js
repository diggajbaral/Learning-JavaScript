const promiseOne = new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log('Async task is Completed!');
        resolve()
    }, 1000)
})

promiseOne.then(function() {
    console.log("Promise consumed");
})