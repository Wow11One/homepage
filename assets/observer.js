const observer = new IntersectionObserver((items) => {
    items.forEach(item => {
        if (item.isIntersecting) {
            item.target.classList.add('in-view');
        };
    });
}, {
    rootMargin: '0px',
    threshold: [0, 0.1, 1],
},
);

const tags = document.querySelectorAll('.container');

tags.forEach(() => {
    observer.observe(tags);
});