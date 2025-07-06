document.addEventListener('DOMContentLoaded', () => {
    const images = [
        'assets/images/frame0.png', 'assets/images/frame1.png', 'assets/images/frame2.png',
        'assets/images/frame3.png', 'assets/images/frame4.png', 'assets/images/frame5.png',
        'assets/images/frame6.png', 'assets/images/frame7.png', 'assets/images/frame8.png',
        'assets/images/frame9.png', 'assets/images/frame10.png', 'assets/images/frame11.png',
        'assets/images/frame12.png', 'assets/images/frame13.png', 'assets/images/frame14.png',
        'assets/images/frame15.png', 'assets/images/frame16.png', 'assets/images/frame17.png',
        'assets/images/frame18.png', 'assets/images/frame19.png', 'assets/images/frame20.png',
        'assets/images/frame21.png', 'assets/images/frame22.png',
    ];

    const texts = [
        "Bilder generiert von Midjourney v6.1, geschrieben von Sarah, Ylva, Liana und Maggie",
        "Irgendetwas stimmte nicht. Für ihn hatte es sich immer so angefühlt, als ob etwas nicht stimmte – aber dieser Tag fühlte sich <span class='highlight'>anders</span> an.",
        "Als er den Supermarkt betrat, hatte er das Gefühl, beobachtet zu werden – als wären <span class='highlight'>überall Augen</span>.",
        "Er schaute sich gerade Lebensmittel an, als -",
        "<span class='highlight'>Was war das?!</span>",
        "Nein, das konnte nicht sein.",
        "Doch in dem Moment, in dem er sich umdrehte, war nichts Ungewöhnliches zu sehen. Mit einem mulmigen Gefühl machte er mit seinem Einkauf weiter.",
        "„Etwas Wasser wäre schön“, dachte er, als er eine der Flaschen nahm – beinahe hätte er sie fallen lassen.",
        "„Du bist ein...“ – weiter konnte er das Etikett nicht lesen...", 
        "...denn es verschwand im nächsten Augenblick. <span class='highlight'>Wortwörtlich</span>.",
        "Das Etikett war wieder in seinem normalen Zustand.",
        "In Panik ging er zur Kasse, um zu bezahlen, was er kaufen wollte. Er konnte nicht länger hier bleiben.",
        "Und – Nein, das konnte <span class='highlight'>nicht real</span> sein. Er schnappte hörbar nach Luft.",
        "Im Bruchteil einer Sekunde war das Gesicht der Kassiererin wieder normal.",
        "Sie schien von seiner Reaktion überrascht und fragte: „Was ist los? Ist alles in Ordnung?“",
        "Sein Einkauf war vergessen – er rannte aus dem Laden. Nach Hause, er musste nach Hause.",
        "Zuhause angekommen, hatte er wieder dieses Gefühl, dass etwas nicht stimmte.",
        "Er fühlte sich nicht mehr wohl in seiner eigenen Haut – fast so, als müsste er sie abstreifen. Er ertastete ein kleines Hautanhängsel an seinem Gesicht.",
        "Er ging zum Spiegel im Flur, um es sich anzusehen.",
        "Er traute seinen Augen kaum – je mehr er an seiner Haut zupfte, desto <span class='highlight'>grüner</span> wurde er.",
        "Als er in seine neuen großen dunklen Augen blickte, verspürte er keine Angst. Er hatte sich noch nie so wohl gefühlt.",
        "Ein ungewöhnliches Licht erschien im Flur, und als er aus dem Fenster sah, erkannte er das <span class='highlight'>Mutterschiff</span> – und wusste instinktiv, dass er mit ihnen gehen musste.",
        "Und als er nach draußen ging, wurde ihm klar: Sie würden ihn an einen <span class='highlight'>besseren Ort</span> bringen."
    ];

    let currentIndex = 0;

    // Get all DOM elements
    const galleryImage = document.getElementById('galleryImage');
    const imageCaption = document.getElementById('image-caption');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const prevPreview = document.getElementById('prevPreview');
    const nextPreview = document.getElementById('nextPreview');
    const mainImageContainer = document.querySelector('.main-image-container');
    const indicatorsContainer = document.getElementById('page-indicators');

    // --- FUNCTIONS ---

    function updateIndicators() {
        const buttons = indicatorsContainer.children;
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove('active');
        }
        buttons[currentIndex].classList.add('active');
    }

    function updateContent() {
        galleryImage.src = images[currentIndex];
        imageCaption.innerHTML = texts[currentIndex];

        const prevIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
        const nextIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;

        prevPreview.src = images[prevIndex];
        nextPreview.src = images[nextIndex];

        updateIndicators();
    }

    function showNext() {
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
        updateContent();
    }

    function showPrev() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
        updateContent();
    }

    function handleIndicatorClick(e) {
        if (e.target.classList.contains('indicator-btn')) {
            currentIndex = parseInt(e.target.dataset.index);
            updateContent();
        }
    }

    function handleSwipe() {
        const swipeDistance = touchEndX - touchStartX;
        if (swipeDistance > 50) showPrev();
        if (swipeDistance < -50) showNext();
    }

    // --- INITIALIZATION ---

    // Create indicator dots
    images.forEach((_, index) => {
        const button = document.createElement('button');
        button.classList.add('indicator-btn');
        button.dataset.index = index;
        indicatorsContainer.appendChild(button);
    });

    // Add event listeners
    prevBtn.addEventListener('click', showPrev);
    nextBtn.addEventListener('click', showNext);
    indicatorsContainer.addEventListener('click', handleIndicatorClick);

    // Swipe listeners
    let touchStartX = 0;
    let touchEndX = 0;
    mainImageContainer.addEventListener('touchstart', e => { touchStartX = e.changedTouches[0].screenX; }, { passive: true });
    mainImageContainer.addEventListener('touchend', e => { touchEndX = e.changedTouches[0].screenX; handleSwipe(); });

    // Load the first image and set the first indicator
    updateContent();
});