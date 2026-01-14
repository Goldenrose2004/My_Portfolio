let currentSlideIndex = 0;
let autoSlideTimer;
const totalSlides = 5;

function rotateCarousel(direction) {
    const grid = document.querySelector('.screenshots-grid');
    const images = Array.from(grid.querySelectorAll('img'));
    
    if (direction === 'next') {
        currentSlideIndex = (currentSlideIndex + 1) % totalSlides;
    } else if (direction === 'prev') {
        currentSlideIndex = (currentSlideIndex - 1 + totalSlides) % totalSlides;
    }
    
    // Rotate array so current index becomes center
    const rotatedImages = [
        ...images.slice(currentSlideIndex),
        ...images.slice(0, currentSlideIndex)
    ];
    
    // Reorder DOM elements
    rotatedImages.forEach(img => {
        grid.appendChild(img);
    });
}

function autoSlide() {
    rotateCarousel('next');
}

function resetAutoSlide() {
    clearInterval(autoSlideTimer);
    autoSlideTimer = setInterval(autoSlide, 2000);
}

// Start autoplay when page loads
window.addEventListener('load', function() {
    autoSlideTimer = setInterval(autoSlide, 2000);
});
