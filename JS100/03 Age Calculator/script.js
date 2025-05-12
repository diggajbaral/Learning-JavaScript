const birthdayDate = document.querySelector('#birthday')
const calculateButton = document.querySelector("#btn")
const result = document.querySelector("#result")

function CalculateAge() {
    const birthdayValue = birthdayDate.value;
    if (birthdayValue === "") {
        alert("Please enter your Birthday.")
    } else {
        const age = getAge(birthdayValue);
        result.innerHTML = `Your age is ${age} ${age > 1 ? "years" : "year"} old.`
    }
}

function getAge(birthdayValue) {
    const currentDate = new Date();
    const birthdayDate = new Date(birthdayValue);

    let age = currentDate.getFullYear() - birthdayDate.getFullYear();
    const month = currentDate.getMonth() - birthdayDate.getMonth();

    if (month < 0 || (month === 0 && currentDate.getDate() < birthdayDate.getDate())) {
        age--;
    }

    return age;

}

calculateButton.addEventListener("click", CalculateAge)