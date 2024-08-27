// for: Smooth Scroll for CTA Buttons

document.querySelectorAll('.cta').forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});
