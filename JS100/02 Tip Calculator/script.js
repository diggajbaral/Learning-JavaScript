const billAmount = document.querySelector('#bill')
const tipPercentage = document.querySelector('#tip')
const calculate = document.querySelector('#calculate')
const totalTip = document.querySelector('#total')

function calculateTotal() {
    const billValue = billAmount.value;
    const tipValue = tipPercentage.value;
    const totalValue = billValue * (1 + tipValue / 100);
    totalTip.innerHTML = `$ ${totalValue.toFixed(2)}`
}

calculate.addEventListener("click", calculateTotal)