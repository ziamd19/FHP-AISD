document.addEventListener('DOMContentLoaded', () => {

    // 1. Mobile Hamburger Menu Toggle
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navLinks = document.getElementById('nav-links');

    if (hamburgerMenu && navLinks) {
        hamburgerMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const currentlyExpanded = hamburgerMenu.getAttribute('aria-expanded') === 'true' || false;
            hamburgerMenu.setAttribute('aria-expanded', !currentlyExpanded);
            // Optional: Toggle hamburger icon appearance (e.g., to an 'X')
            // This can also be done purely with CSS based on a class on the button or nav
            hamburgerMenu.classList.toggle('is-active');
        });
    }

    // 2. Back-to-Top Button Visibility
    const backToTopButton = document.getElementById('back-to-top');
    if (backToTopButton) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) { // Show button after scrolling 300px
                backToTopButton.classList.add('visible');
            } else {
                backToTopButton.classList.remove('visible');
            }
        });
        // Smooth scroll to top when clicked (handled by href="#hero" and CSS scroll-behavior)
    }

    // 3. Dynamic Year in Footer
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // 4. Active Navigation Link Highlighting on Scroll
    const sections = document.querySelectorAll('section[id]'); // All sections with an ID
    const navLi = document.querySelectorAll('#navbar .nav-links li a');
    const navbar = document.getElementById('navbar'); // Get navbar reference

    if (sections.length > 0 && navLi.length > 0 && navbar) { // Check if navbar exists
        window.addEventListener('scroll', () => {
            let currentSectionId = '';
            const navHeight = navbar.offsetHeight || 0; // Get navbar height

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (scrollY >= (sectionTop - navHeight - 50)) { // 50px offset
                    currentSectionId = section.getAttribute('id');
                }
            });

            navLi.forEach(a => {
                a.classList.remove('active');
                // Check if the link's href matches #<sectionId>
                if (a.getAttribute('href') === `#${currentSectionId}`) {
                    a.classList.add('active');
                }
            });

            // Special case for hero section if no other section is "active" (top of page)
            // Also handle if currentSectionId is explicitly 'hero'
            const homeLink = document.querySelector('#navbar .nav-links li a[href="#hero"]');
            if (homeLink) { // Ensure homeLink exists
                if (currentSectionId === 'hero' || (currentSectionId === '' && scrollY < sections[0].offsetTop - navHeight - 50)) {
                     homeLink.classList.add('active');
                } else if (currentSectionId !== 'hero' && currentSectionId !== '') {
                    // If another section is active, but not hero, ensure hero is not marked active unless it's the one
                    // This case might be redundant given the loop above, but added for clarity
                }
            }
        });
    }

    // Close mobile menu when a link is clicked
    if (navLinks && hamburgerMenu) {
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    hamburgerMenu.setAttribute('aria-expanded', 'false');
                    hamburgerMenu.classList.remove('is-active');
                }
            });
        });
    }

});
