(function () {
    var square = document.querySelector('#latestNewsCards');
    var observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
        if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
            return;
        }
        if (entry.isIntersecting) {
            entry.target.classList.add('latestNewsCardsAnimation');
        }
        });
    });
    observer.observe(square);
})();
(function () {
    var square = document.querySelector('.partHeader');
    var observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
        if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
            return;
        }
        if (entry.isIntersecting) {
            entry.target.classList.add('partHeaderAnimation');
        }
        });
    });
    observer.observe(square);
})();
