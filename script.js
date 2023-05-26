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
    var square = document.querySelector('#partHeader1');
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
(function () {
    var square = document.querySelector('#partHeader2');
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
(function () {
    var square = document.querySelector('.modelsBoxRight1');
    var observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
        if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
            return;
        }
        if (entry.isIntersecting) {
            entry.target.classList.add('modelsBoxRightAnimation');
        }
        });
    });
    observer.observe(square);
})();
(function () {
    var square = document.querySelector('.modelsBoxRight2');
    var observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
        if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
            return;
        }
        if (entry.isIntersecting) {
            entry.target.classList.add('modelsBoxRightAnimation');
        }
        });
    });
    observer.observe(square);
})();
(function () {
    var square = document.querySelector('.modelsBoxLeft1');
    var observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
        if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
            return;
        }
        if (entry.isIntersecting) {
            entry.target.classList.add('modelsBoxLeftAnimation');
        }
        });
    });
    observer.observe(square);
})();
(function () {
    var square = document.querySelector('.modelsBoxLeft2');
    var observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
        if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
            return;
        }
        if (entry.isIntersecting) {
            entry.target.classList.add('modelsBoxLeftAnimation');
        }
        });
    });
    observer.observe(square);
})();
function onClickSucbscribe() {
    document.getElementById("subscribe").style = "display: block; animation: subscribeAnimation 1.5s;";
    document.getElementById("shadow").style = "display: block;";
}
function onClickShadow() {
    document.getElementById("subscribe").style = "display: none;";
    document.getElementById("shadow").style = "display: none;";
}
