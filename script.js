function isLeap(yrs) {

    if ((yrs % 4 === 0 && yrs % 100 !== 0) || (yrs % 400 === 0)) {
        console.log(true);
    } else {
        console.log(false);
    }

}

isLeap(2023)