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

// Initial call to show the first slide
showSlide(currentSlide);

//menu

function toggleMenu() {
    var navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('open'); // Menü megjelenítése/elrejtése
}