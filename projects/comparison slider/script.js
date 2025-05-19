const slider = document.querySelector('input[type = "range"]');
const imgTwo = document.querySelector('#two');

slider.addEventListener('input', () => {
    const value = slider.value;
    imgTwo.style.clipPath = `inset(0 ${100 - value}% 0 0)`;
});