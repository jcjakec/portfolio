const topSection = document.getElementsByClassName('cover')[0];
const scrollDownBtn = document.getElementById('cover-button');
const scrollUpBtn = document.getElementById('scroll-up-btn');

// Scroll down when button is clicked
scrollDownBtn.addEventListener('click', () => {
    document.body.classList.add('scrolling-enabled');
    window.scrollTo({
        top: window.innerHeight, 
        behavior: 'smooth'
    });
});

// Scroll up only when clicking the button
scrollUpBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0, 
        behavior: 'smooth'
    });
    document.body.classList.remove('scrolling-enabled');
});

// Prevent manual scrolling back up
window.addEventListener('scroll', () => {
    if (window.scrollY === 0) {
        document.body.classList.remove('scrolling-enabled');
    }
});
