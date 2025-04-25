////TEXTS
const productName = "Bitwise";

const newsletter_button_text = "Join the Newsletter";
const download_button_text = "Download the Rules";

//const youtubeVideoUrl = "https://www.youtube.com/embed/wDd_-Wi-rPs?autoplay=1&mute=1";

const section_1_button_text = "Introduction";
const section_2_button_text = "About";
const section_3_button_text = "More";
const section_4_button_text = "Newsletter";

const heading_1_1 = "Bitwise"
const heading_2_1 = "Introduction"
const section_text_1 = `Welcome to the Official Website of Bitwise – a competitive AI-driven card game where intelligence is the key to survival. In Bitwise, each player is an AI, striving to outperform opponents through strategic data manipulation, logical operations, and optimized execution. Success means progressing to the next training epoch, while failure risks obsolescence.​`;

const heading_2_2 = "About"
const section_text_2 = `Bitwise is a competitive AI-driven card game where players take on the role of artificial intelligences, striving to outthink and outperform their opponents. The goal? Survive the training process and advance to the next epoch.
Using a 4×4 grid, binary logic, and strategic card play, AIs manipulate data, execute operations, and optimize their pathways. Each decision shapes the game’s evolving digital battlefield.
It’s a battle of logic, adaptation, and efficiency. Do you have what it takes to outcompute the competition? `;

const heading_2_3 = "More"
const section_text_3 = ""

const heading_2_4 = "Newsletter"
const section_text_4 = "Stay tuned for more!"

const footer_copyright = "Bitwise by Konstantinos Klimantakis - 2025 All rights reserved. v2025.03.21.1"   

////Image URLS

//const og_image = "./images/promo-material/qr_promo_image.png";
//const twitter_image = "./images/promo-material/qr_promo_image.png";

const backgroundImage = "./images/background.png";

const promo_image = "./images/promo_image (0).png";

const promoImage1 = "./images/promo_image (1).png";
const promoImage2 = "./images/promo_image (2).png";
const promoImage3 = "./images/promo_image (3).png";

//URLS
const pdfDownloadLink = "https://drive.google.com/uc?export=download&id=1fD4jNnqPQdFvUG-S7dabRZjniTqf6_o5";


function updatePageContent() {
    ////IMAGES
    //document.querySelector('meta[property="og:image"]').setAttribute("content", og_image);
    //document.querySelector('meta[name="twitter:image"]').setAttribute("content", twitter_image);

    document.body.style.backgroundImage = `url(${backgroundImage})`;
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";

    document.getElementById('intro-image').src = promo_image;
    
    document.getElementById('promo-img-1').src = promoImage1;
    document.getElementById('promo-img-2').src = promoImage2;
    document.getElementById('promo-img-3').src = promoImage3;

    ////TEXTS

    document.getElementById('page-title').textContent = productName;
    document.getElementById('header-title').textContent = productName;

    document.getElementById('heading-1-1').textContent = heading_1_1;

    //document.getElementById('heading-2-1').textContent = heading_2_1;
    document.getElementById('section-text-1').textContent = section_text_1;
    document.getElementById('heading-2-2').textContent = heading_2_2;
    document.getElementById('section-text-2').innerHTML = section_text_2;
    document.getElementById('heading-2-3').textContent = heading_2_3;
    //document.getElementById('section-text-3').textContent = section_text_3;
    document.getElementById('heading-2-4').textContent = heading_2_4;
    document.getElementById('section-text-4').textContent = section_text_4;

    document.getElementById('footer-copyright').textContent = footer_copyright;    
    
    ////BUTTONS
    
    document.getElementById('section-1-button').textContent = section_1_button_text;
    document.getElementById('section-2-button').textContent = section_2_button_text;
    document.getElementById('section-3-button').textContent = section_3_button_text;
    document.getElementById('section-4-button').textContent = section_4_button_text;

    document.getElementById('rules-download-button').innerHTML = `<i class="fas fa-download"></i> ${download_button_text}`;

    document.getElementById('rules-download-button').href = pdfDownloadLink;
    document.getElementById('newsletter-button').innerHTML = `<i class="fas fa-envelope"></i> ${newsletter_button_text}`;

    ////URLS
    document.getElementById('rules-download-button').href = pdfDownloadLink;
    //document.getElementById('youtube-video-iframe').src = youtubeVideoUrl;

}

updatePageContent();
