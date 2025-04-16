const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('#navbar .navbar-item');

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.55,
};

const observerCallback = (entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const sectionId = entry.target.getAttribute('id');
            console.log('The active ID section is', sectionId);
            navLinks.forEach((link) => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);

sections.forEach((section) => {
    observer.observe(section);
});
