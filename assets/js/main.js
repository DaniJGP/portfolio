const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('#navbar .navbar-item');
const animatedElements = document.querySelectorAll('.animate');

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.55,
};

const animatorOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.25,
};

const observerCallback = (entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const sectionId = entry.target.getAttribute('id');
            navLinks.forEach((link) => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
};

const animatorCallback = (entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        };
    });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);
const animator = new IntersectionObserver(animatorCallback, animatorOptions);

sections.forEach((section) => {
    observer.observe(section);
});

animatedElements.forEach((element) => {
  animator.observe(element);
})
