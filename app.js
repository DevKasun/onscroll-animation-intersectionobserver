const sectionOne = document.querySelector('.banner');
const sectionTwo = document.querySelector('.intro');
const sectionThree = document.querySelector('.about-us');
const sectionFour = document.querySelector('.contact');

const options = {
    rootMargin: '-200px',
    // threshold: '0.5'
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        entry.target.classList.toggle("show", entry.isIntersecting);
    })
}, options);

observer.observe(sectionOne);
observer.observe(sectionTwo);
observer.observe(sectionThree);
observer.observe(sectionFour);