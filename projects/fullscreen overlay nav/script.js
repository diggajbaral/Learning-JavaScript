function navBar() {
    const icon = document.querySelector('#icon');
    const nav = document.querySelector('#navbar');

    if (icon.classList.contains('fa-bars')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');

        nav.style.left = '0'

    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');

        nav.style.left = '-100%'
    }
}