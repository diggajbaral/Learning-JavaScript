const rollButton = document.querySelector("#roll-button");
const dice = document.querySelector("#dice");
const rollHistory = document.querySelector("#roll-history");

let historyList = [];

function rollDice() {
    const rollResult = Math.floor(Math.random() * 6) + 1;
    const diceFace = getDiceFace(rollResult);

    dice.innerHTML = diceFace;
    historyList.push(rollResult);
    updateRollHistory();
}

function updateRollHistory() {
    rollHistory.innerHTML = "";
    for (let i = 0; i < historyList.length; i++) {
        const listItem = document.createElement("li");
        listItem.innerHTML = `Roll ${i + 1} : <span>${getDiceFace(historyList[i])}</span>`;
        rollHistory.appendChild(listItem);
    }
}

function getDiceFace(rollResult) {
    switch (rollResult) {
        case 1: return "&#9856;";
        case 2: return "&#9857;";
        case 3: return "&#9858;";
        case 4: return "&#9859;";
        case 5: return "&#9860;";
        case 6: return "&#9861;";
        default: return "";
    }
}

rollButton.addEventListener("click", () => {
    dice.classList.add("roll-animation");
    setTimeout(() => {
        dice.classList.remove("roll-animation");
        rollDice();
    }, 1000);
});
