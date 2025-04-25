// Helper function to log whether an element with a given ID exists
function debugElement(id) {
    const element = document.getElementById(id);
    if (element) {
        console.log(`${id} found and exists on the page.`);
    } else {
        console.log(`${id} NOT found.`);
    }
}

// Debugging function to check all elements on the page
function runDebugging() {
    console.log("Starting debug checks...");

    // Header and Page Title
    debugElement('page-title');
    debugElement('header-title');

    // Section Buttons in the Nav
    debugElement('section-1-button');
    debugElement('section-2-button');
    debugElement('section-3-button');
    debugElement('section-4-button');

    // Section 1 (Introduction)
    debugElement('intro-image');
    debugElement('section-text-1');
    debugElement('newsletter-button');
    debugElement('rules-download-button');

    // Section 2 (About)
    debugElement('heading-2-2');
    debugElement('section-text-2');

    // Section 3 (More / Promo Gallery)
    debugElement('heading-2-3');
    debugElement('promo-img-1');
    debugElement('promo-img-2');
    debugElement('promo-img-3');
    debugElement('promo-img-4');
    debugElement('promo-img-5');
    debugElement('promo-img-6');

    // Section 4 (Contact)
    debugElement('heading-2-4');
    debugElement('section-text-4');

    // Footer
    debugElement('footer-copyright');

    console.log("Debugging completed.");
}

// Automatically run the debug checks when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded. Running debugging script...");
    runDebugging();
});
