// DOM Elements
const search = document.querySelector('.fa-search');
const searchInput = document.querySelector('#search');
let slide = document.querySelector('.slide');
const lastSlide = document.querySelector('.last');
const slider = document.querySelector('.slider');
const prev = document.querySelector('.prev')
const next = document.querySelector('.next');
const menuBtn = document.querySelector('.fa-bars');
const list = document.querySelector('ul');

// Slideshow

function nextSlide() {
    if (slide.nextElementSibling.classList.contains('slide') && slide.classList.contains('current')) {
        slide.classList.remove('current');
        slide.nextElementSibling.classList.add('current');
        slide = slide.nextElementSibling; 
    } else {
        slide.classList.remove('current');
        slider.firstElementChild.classList.add('current');
        slide = slider.firstElementChild;
    }
}

function prevSlide() {
    if (slide.previousElementSibling === null) {
        slide.classList.remove('current');
        lastSlide.classList.add('current');
        slide = lastSlide;   
    } else if (slide.classList.contains('current')) {
        slide.classList.remove('current');
        slide.previousElementSibling.classList.add('current');
        slide = slide.previousElementSibling;
    }
}


prev.addEventListener('click', prevSlide);
next.addEventListener('click', nextSlide);

// Show/Hide Searchbar
search.addEventListener('click', () => {
    if (searchInput.style.display === 'none') {
        searchInput.style.display = 'inline-block';
    } else {
        searchInput.style.display = 'none';
    }
});

// Show/Hide Menu
menuBtn.addEventListener('click', () => {
    list.classList.toggle('show');
});
