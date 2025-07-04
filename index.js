document.addEventListener('DOMContentLoaded', () => {
    const images = [
        'assets/images/frame0.png',
        'assets/images/frame1.png',
        'assets/images/frame2.png',
        'assets/images/frame3.png',
        'assets/images/frame4.png', 
        'assets/images/frame5.png',
        'assets/images/frame6.png',
        'assets/images/frame7.png',
        'assets/images/frame8.png',
        'assets/images/frame9.png',
        'assets/images/frame10.png',
        'assets/images/frame11.png',
        'assets/images/frame12.png',
        'assets/images/frame13.png',
        'assets/images/frame14.png',
        'assets/images/frame15.png',
        'assets/images/frame16.png',
        'assets/images/frame17.png',
        'assets/images/frame18.png',
        'assets/images/frame19.png',
        'assets/images/frame20.png',
        'assets/images/frame21.png',
        'assets/images/frame22.png',
    ];

    const texts = [
        "Caption for Frame 0", "Caption for Frame 1", "Caption for Frame 2",
        "Caption for Frame 3", "Caption for Frame 4", "Caption for Frame 5",
        "Caption for Frame 6", "Caption for Frame 7", "Caption for Frame 8",
        "Caption for Frame 9", "Caption for Frame 10", "Caption for Frame 11",
        "Caption for Frame 12", "Caption for Frame 13", "Caption for Frame 14",
        "Caption for Frame 15", "Caption for Frame 16", "Caption for Frame 17",
        "Caption for Frame 18", "Caption for Frame 19", "Caption for Frame 20",
        "Caption for Frame 21", "Caption for Frame 22",
    ];

    let currentIndex = 0;

    const galleryImage = document.getElementById('galleryImage');
    const imageCaption = document.getElementById('image-caption');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const prevPreview = document.getElementById('prevPreview');
    const nextPreview = document.getElementById('nextPreview');
    const mainImageContainer = document.querySelector('.main-image-container'); // Target for swipe

    function updateContent() {
        galleryImage.src = images[currentIndex];
        imageCaption.textContent = texts[currentIndex];

        const prevIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
        const nextIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;

        prevPreview.src = images[prevIndex];
        nextPreview.src = images[nextIndex];
    }

    function showNext() {
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
        updateContent();
    }

    function showPrev() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
        updateContent();
    }

    prevBtn.addEventListener('click', showPrev);
    nextBtn.addEventListener('click', showNext);

    // --- SWIPE FUNCTIONALITY START ---
    let touchStartX = 0;
    let touchEndX = 0;
    const swipeThreshold = 50; // Minimum distance for a swipe

    mainImageContainer.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    mainImageContainer.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });

    function handleSwipe() {
        const swipeDistance = touchEndX - touchStartX;

        if (swipeDistance > swipeThreshold) {
            // Swipe Right
            showPrev();
        } else if (swipeDistance < -swipeThreshold) {
            // Swipe Left
            showNext();
        }
    }
    // --- SWIPE FUNCTIONALITY END ---

    // Initial load
    updateContent();
});
