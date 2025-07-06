document.addEventListener('DOMContentLoaded', () => {
    const images = [
        'assets/images/frame0.png', 'assets/images/frame1.png', 'assets/images/frame2.png',
        'assets/images/frame3.png', 'assets/images/frame4.png', 'assets/images/frame5.png',
        'assets/images/frame6.png', 'assets/images/frame7.png', 'assets/images/frame8.png',
        'assets/images/frame9.png', 'assets/images/frame10.png', 'assets/images/frame11.png',
        'assets/images/frame12.png', 'assets/images/frame13.png', 'assets/images/frame14.png',
        'assets/images/frame15.png', 'assets/images/frame16.png', 'assets/images/frame17.png',
        'assets/images/frame18.png', 'assets/images/frame19.png', 'assets/images/frame20.png',
        'assets/images/frame21.png', 'assets/images/frame22.png', 'assets/images/endframe.png',
    ];

    const texts = [
       "'Was ist los?'- Ein KI Graphic Novel",
        "Irgendetwas stimmte nicht. Für ihn hatte es sich immer so angefühlt, als ob etwas nicht stimmte – aber dieser Tag fühlte sich <span class='highlight'>anders</span> an.",
        "Als er den Supermarkt betrat, hatte er das Gefühl, beobachtet zu werden – als wären <span class='highlight'>überall Augen</span>.",
        "Er schaute sich gerade Lebensmittel an, als -",
        "<span class='highlight'>Was war das?!</span>",
        "Nein, das konnte nicht sein.",
        "Doch in dem Moment, in dem er sich umdrehte, war nichts Ungewöhnliches zu sehen. Mit einem mulmigen Gefühl machte er mit seinem Einkauf weiter.",
        "„Etwas Wasser wäre schön“, dachte er, als er eine der Flaschen nahm – beinahe hätte er sie fallen lassen.",
        "„Du bist ein...“ – weiter konnte er das Etikett nicht lesen...", 
        "...denn es verschwand im nächsten Augenblick...",
        "..und war wieder in seinem normalen Zustand.",
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
        "Und als er nach draußen ging, wurde ihm klar: Sie würden ihn an einen <span class='highlight'>besseren Ort</span> bringen.",
        "generiert von Midjourney, Idee und geschrieben von Sarah, Ylva, Liana und Maggie", 
        
    ];

    let currentIndex = 0;

    // Get all DOM elements
    const galleryImage = document.getElementById('galleryImage');
    const imageCaption = document.getElementById('image-caption');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const mainImageContainer = document.querySelector('.main-image-container');
    const indicatorsContainer = document.getElementById('page-indicators');

    // --- FUNCTIONS ---

    function updateIndicators() {
        // Clear out the old indicators first
        indicatorsContainer.innerHTML = '';

        let start, end;

        // Determine the range of indicators to show
        if (currentIndex === 0) {
            // If at the beginning, show the first 3
            start = 0;
            end = Math.min(2, images.length - 1);
        } else if (currentIndex === images.length - 1) {
            // If at the end, show the last 3
            start = Math.max(0, images.length - 3);
            end = images.length - 1;
        } else {
            // Otherwise, center the current index
            start = currentIndex - 1;
            end = currentIndex + 1;
        }

        // Create and append the new indicator buttons
        for (let i = start; i <= end; i++) {
            const button = document.createElement('button');
            button.classList.add('indicator-btn');
            button.dataset.index = i;
            button.textContent = i + 1; // Add the number
            if (i === currentIndex) {
                button.classList.add('active');
            }
            indicatorsContainer.appendChild(button);
        }
    }

    function updateContent() {
        galleryImage.src = images[currentIndex];
        imageCaption.innerHTML = texts[currentIndex];
        updateIndicators(); // Call the new function to redraw indicators
    }

    function showNext() {
        if (currentIndex < images.length - 1) {
            currentIndex++;
            updateContent();
        }
    }

    function showPrev() {
        if (currentIndex > 0) {
            currentIndex--;
            updateContent();
        }
    }

    function handleIndicatorClick(e) {
        // Check if a button was clicked inside the container
        if (e.target.classList.contains('indicator-btn')) {
            currentIndex = parseInt(e.target.dataset.index);
            updateContent();
        }
    }

    // --- EVENT LISTENERS ---
    prevBtn.addEventListener('click', showPrev);
    nextBtn.addEventListener('click', showNext);
    indicatorsContainer.addEventListener('click', handleIndicatorClick);

    // Swipe listeners
    let touchStartX = 0;
    mainImageContainer.addEventListener('touchstart', e => { touchStartX = e.changedTouches[0].screenX; }, { passive: true });
    mainImageContainer.addEventListener('touchend', e => {
        const touchEndX = e.changedTouches[0].screenX;
        if (touchEndX < touchStartX - 50) showNext();
        if (touchEndX > touchStartX + 50) showPrev();
    });

    // --- INITIALIZATION ---
    // No need to create all indicators here anymore.
    // Just call updateContent() which will create the first set.
    updateContent();
});