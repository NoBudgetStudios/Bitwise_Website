// JavaScript for carousel modal
let currentImageIndex = 0;
const images = document.querySelectorAll('.promo-gallery img');
const modal = document.getElementById('carouselModal');
const modalImage = document.getElementById('carouselImage');

// Function to open modal
function openModal(index) {
    currentImageIndex = index;
    modal.style.display = "block";
    showSlide(currentImageIndex);
}

// Function to close modal
document.querySelector('.close').onclick = function() {
    modal.style.display = "none";
}

// Function to navigate slides
function changeSlide(n) {
    currentImageIndex += n;
    if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    } else if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    }
    showSlide(currentImageIndex);
}

// Display the image in the modal
function showSlide(index) {
    modalImage.src = images[index].src;
}

// Add click event to each image in the gallery
images.forEach((img, index) => {
    img.onclick = () => openModal(index);
});

// Close the modal when clicking outside of the image
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
