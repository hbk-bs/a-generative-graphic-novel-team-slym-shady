document.addEventListener('DOMContentLoaded', () => {
    // VERIFY THESE PATHS
    // 1. Is the 'assets' folder in the same directory as index.html?
    // 2. Do these filenames EXACTLY match the files in your 'assets' folder (case-sensitive)?
    //    e.g., 'assets/image1.jpg' must match the file name perfectly.
    const images = [
        'assets/image1.jpg',
        'assets/image2.jpg',
        'assets/image3.jpg',
        
    ];

    let currentIndex = 0;

    const galleryImage = document.getElementById('galleryImage');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const prevPreview = document.getElementById('prevPreview');
    const nextPreview = document.getElementById('nextPreview');

    function updateImage() {
        // This function will fail if the paths in the `images` array are incorrect.
        galleryImage.src = images[currentIndex];

        const prevIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
        const nextIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;

        prevPreview.src = images[prevIndex];
        nextPreview.src = images[nextIndex];
    }

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
        updateImage();
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
        updateImage();
    });

    // Load the first image and previews initially
    updateImage();
});
