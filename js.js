
const searchIcons = document.querySelectorAll('.search-icon');
const searchBoxes = document.querySelectorAll('.search-box');

searchIcons.forEach(icon => {
    icon.addEventListener('click', function (e) {
        e.stopPropagation();
        const parent = this.closest('.desktop-search-container, .navbar__item--search');
        const box = parent.querySelector('.search-box');
        box.classList.toggle('active');
    });
});

document.addEventListener('click', function (e) {
    if (!e.target.closest('.search-box') && !e.target.matches('.search-icon')) {
        searchBoxes.forEach(box => box.classList.remove('active'));
    }
});



window.addEventListener('resize', () => {
    searchBoxes.forEach(box => box.classList.remove('active'));
});


document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
    toggle.addEventListener('click', function (e) {
        e.preventDefault();
        const dropdown = this.closest('.dropdown');
        const wasActive = dropdown.classList.contains('active');

        document.querySelectorAll('.dropdown').forEach(d => d.classList.remove('active'));

        if (!wasActive) {
            dropdown.classList.add('active');
        }
    });
});

// إغلاق القوائم عند النقر خارجها
document.addEventListener('click', function (e) {
    if (!e.target.closest('.dropdown')) {
        document.querySelectorAll('.dropdown').forEach(d => d.classList.remove('active'));
    }
});




let touchStartY = 0;

document.querySelector('.navbar').addEventListener('touchstart', e => {
    touchStartY = e.touches[0].clientY;
});

document.querySelector('.navbar').addEventListener('touchmove', e => {
    const touchEndY = e.touches[0].clientY;
    if (touchEndY - touchStartY > 50) {
        document.querySelectorAll('.dropdown').forEach(d => d.classList.remove('active'));
    }
});

// قائمة الصور الخلفية
const images = [
    'assets/images/hero-background.png',
    'assets/images/image-1.png',
    'assets/images/image-2.png',
    'assets/images/image-1.png',
];

const heroSection = document.getElementById('hero-slider');
const prevBtn = document.querySelector('.hero-section__prev-btn');
const nextBtn = document.querySelector('.hero-section__next-btn');

let currentIndex = 0;

function updateBackground() {
    heroSection.style.backgroundImage = `url('${images[currentIndex]}')`;
}

nextBtn.addEventListener('click', () => {
    if (currentIndex < images.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateBackground();
});

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = images.length - 1;
    }
    updateBackground();
});

updateBackground();

const menuIcon = document.getElementById('menu__header-icon');
const navbar = document.getElementById('navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper(".mySwiper", {
        direction: "vertical",
        slidesPerView: 1,
        spaceBetween: 20,
        mousewheel: true,
        grabCursor: true,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
});
// report slider
document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.report__image', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        loop: true,
        slidesPerView: 1,
        speed: 500,
        effect: 'slide',

        // التهيئة الأولية
        on: {
            init: function () {
                updateContent(this.slides[this.activeIndex]);
            },
            slideChange: function () {
                updateContent(this.slides[this.activeIndex]);
            }
        }
    });
    // تحديث المحتوى
    function updateContent(activeSlide) {
        activeSlide.style.opacity = 0;
        setTimeout(() => {
            activeSlide.style.opacity = 1;
        }, 50);

        // تحديث التاريخ
        document.querySelector('.active-date').textContent =
            activeSlide.getAttribute('data-date');

        // تحديث النص
        document.querySelector('.active-text').textContent =
            activeSlide.getAttribute('data-text');
    }
});
// channel swiper
const swiper1 = new Swiper('.channelSwiper', {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 10,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 15
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 10
        }
    }
});



// video swiper
const videoSwiper = new Swiper('.videoSwiper', {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 10,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 15
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 10
        }
    }
});

