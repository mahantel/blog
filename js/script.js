// Scroll Header Effect
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const closeMenu = document.getElementById('close-menu');
const navMenu = document.getElementById('nav-menu');
const overlay = document.getElementById('overlay');

function openMenu() {
    navMenu.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeMenuFunc() {
    navMenu.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
}

hamburger.addEventListener('click', openMenu);
closeMenu.addEventListener('click', closeMenuFunc);
overlay.addEventListener('click', closeMenuFunc);

// Close mobile menu when clicking on a menu item
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', closeMenuFunc);
});

// Ensure menu resets on window resize
window.addEventListener('resize', function() {
    if (window.innerWidth > 991 && navMenu.classList.contains('active')) {
        closeMenuFunc();
    }
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId !== '#') {
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Calculate header height dynamically
                const headerHeight = document.getElementById('header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Scroll Animation (Fade In)
const fadeElements = document.querySelectorAll('.fade-in');

function checkScroll() {
    fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            element.classList.add('visible');
        }
    });
}

// Throttle function to limit how often a function can run
function throttle(callback, limit) {
    let waiting = false;
    return function() {
        if (!waiting) {
            callback.apply(this, arguments);
            waiting = true;
            setTimeout(function() {
                waiting = false;
            }, limit);
        }
    };
}

// Initial check
checkScroll();

// Check on scroll with throttling
window.addEventListener('scroll', throttle(checkScroll, 100));

// Form Submission (Prevent default for demo)
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('감사합니다! 문의가 접수되었습니다. 빠른 시일 내에 연락 드리겠습니다.');
        this.reset();
    });
}

// Preload images
window.addEventListener('load', function() {
    // Add any specific load event handlers here if needed
    document.body.classList.add('loaded');
});