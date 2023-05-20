
const header = document.querySelector('header');

window.addEventListener('scroll', function(e) {
    header.classList.toggle('stickY', window.scrollY > 80);
})