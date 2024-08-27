const carousel = document.querySelector('.carousel');
let currentIndex = 0;

function showNextSlide() {
    currentIndex = (currentIndex + 1) % carousel.children.length;
    updateCarousel();
}

function updateCarousel() {
    const offset = -currentIndex * 100;
    carousel.style.transform = `translateX(${offset}%)`;
}

setInterval(showNextSlide, 3000); // Auto-slide every 3 seconds
