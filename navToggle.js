const navToggle = document.getElementById('nav-toggle');
const navMenu = document.querySelector('nav');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active'); // This should toggle the navigation menu
});
