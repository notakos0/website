//galery

let currentSlide = 0;
const slides = document.querySelectorAll('.gallery-image');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
}

function changeSlide(step) {
    currentSlide = (currentSlide + step + slides.length) % slides.length;
    showSlide(currentSlide);
}

//show the first slide
showSlide(currentSlide);

//menu

function toggleMenu() {
    var navMenu = document.querySelector('.nav-menu');
    var topLine = document.querySelector('.topline');
    navMenu.classList.toggle('open');
    topLine.classList.toggle('set');
}

//scrolldown

function scrollDown() {
    window.scrollBy({
        top: window.innerHeight,
        left: 0,
        behavior: 'smooth'
    });
}