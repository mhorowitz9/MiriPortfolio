// JavaScript for lightbox effect
document.addEventListener('DOMContentLoaded', (event) => {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.close');
    const projectImages = document.querySelectorAll('.project-image');

    projectImages.forEach(image => {
        image.addEventListener('click', () => {
            lightbox.style.display = 'block';
            lightboxImg.src = image.src;
        });
    });

    closeBtn.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target == lightbox) {
            lightbox.style.display = 'none';
        }
    });
});

function bounceAnimation(element) {
    element.classList.add('bounce');

    setTimeout(() => {
        element.classList.remove('bounce');
    }, 500); // Adjust duration as needed (500ms = 0.5s)
}
