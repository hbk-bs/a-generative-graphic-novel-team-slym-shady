document.addEventListener('DOMContentLoaded', () => {
    // VERIFY THESE PATHS
    // 1. Is the 'assets' folder in the same directory as index.html?
    // 2. Do these filenames EXACTLY match the files in your 'assets' folder (case-sensitive)?
    //    e.g., 'assets/image1.jpg' must match the file name perfectly.
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
