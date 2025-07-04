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
        "Bilder generiert von Midjourney v6.1, geschrieben von Sarah, Ylva, Liana und Maggie",
        "Irgendetwas stimmte nicht. Für ihn hatte es sich immer so angefühlt, als ob etwas nicht stimmte – aber dieser Tag fühlte sich anders an.",
        "Als er den Supermarkt betrat, hatte er das Gefühl, beobachtet zu werden – als wären überall Augen.",
        "Er schaute sich gerade Lebensmittel an, als -",
       "Was war das?!",
        "Nein, das konnte nicht sein.",
        "Doch in dem Moment, in dem er sich umdrehte, war nichts Ungewöhnliches zu sehen. Mit einem mulmigen Gefühl machte er mit seinem Einkauf weiter.",
        "„Etwas Wasser wäre schön“, dachte er, als er eine der Flaschen nahm – beinahe hätte er sie fallen lassen.",
        "„Du bist ein...“ – weiter konnte er das Etikett nicht lesen...", 
        "...denn es verschwand im nächsten Augenblick. Wortwörtlich.",
        "Das Etikett war wieder in seinem normalen Zustand.",
        "In Panik ging er zur Kasse, um zu bezahlen, was er kaufen wollte. Er konnte nicht länger hier bleiben.",
        "Und – Nein, das konnte nicht real sein. Er schnappte hörbar nach Luft.",
        "Im Bruchteil einer Sekunde war das Gesicht der Kassiererin wieder normal.",
        "Sie schien von seiner Reaktion überrascht und fragte: „Was ist los? Ist alles in Ordnung?“",
        "Sein Einkauf war vergessen – er rannte aus dem Laden. Nach Hause, er musste nach Hause.",
        "Zuhause angekommen, hatte er wieder dieses Gefühl, dass etwas nicht stimmte.",
        "Er fühlte sich nicht mehr wohl in seiner eigenen Haut – fast so, als müsste er sie abstreifen. Er ertastete ein kleines Hautanhängsel an seinem Gesicht.",
        "Er ging zum Spiegel im Flur, um es sich anzusehen.",
        "Er traute seinen Augen kaum – je mehr er an seiner Haut zupfte, desto grüner wurde er.",
        "Als er in seine neuen großen dunklen Augen blickte, verspürte er keine Angst. Er hatte sich noch nie so wohl gefühlt.",
        "Ein ungewöhnliches Licht erschien im Flur, und als er aus dem Fenster sah, erkannte er das Mutterschiff – und wusste instinktiv, dass er mit ihnen gehen musste.",
        "Und als er nach draußen ging, wurde ihm klar: Sie würden ihn an einen besseren Ort bringen."
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