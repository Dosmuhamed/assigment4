// Animations when uesr entries to the objects
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
// End

// Subscribe Button Funtionality
function onClickSucbscribe() {
    $("#subscribe").attr('style', "display: block; animation: subscribeAnimation 1.5s;");
    $('#shadow').attr("style", "display: block;");
}
function onClickCloseInner() {
    $("#subscribe").attr("style", "display: none;");
    $("#shadow").attr("style", "display: none;");
}
function onMouseoverSubscribeButtonText() {
    var subscribeButtonText = document.querySelector("#subscribeButton");
    subscribeButtonText.style.color = "#AF601A";
    subscribeButtonText.style.backgroundColor = "#212F3C";
}
function onMouseoutSubscribeButtonText() {
    var subscribeButtonText = document.querySelector("#subscribeButton");
    subscribeButtonText.style.color = "white";
    subscribeButtonText.style.backgroundColor = "#515A5A";
}
// End

// Subscribe form validation
$(document).ready(function() {
$('#subscribeSubmit').on('click', function(e) {
    e.preventDefault();
    var email = $('#email').val();
    if (email === '') {
        alert('Please enter your email.');
        return;
    }
    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }
    var checkboxes = $('input[type="checkbox"]:checked');
    if (checkboxes.length === 0) {
        alert('Please choose at least one newsletter.');
        return;
    }
    var agreeRadio = $('#flexRadioDefault1');
    if (!agreeRadio.is(':checked')) {
        alert('Please agree to the privacy policy.');
        return;
    }
    alert("Ok");
    $("#subscribe").attr("style", "display: none;");
    $("#shadow").attr("style", "display: none;");
    onClickSucbscribeInner();
});
function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}
});
// End