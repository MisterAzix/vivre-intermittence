const lines = document.querySelectorAll('.line');
const anchors = document.querySelectorAll('.line-progress');

window.addEventListener('scroll', function () {
    let titleIndex = 0;

    anchors.forEach(function (anchor, index) {
        const bounding = anchor.getBoundingClientRect();
        const y = bounding.y - window.innerHeight / 3;
        if (y < 0) {
            titleIndex = index;
        }
    });

    lines.forEach(function (line, index) {
        if (index === titleIndex) {
            line.classList.add('is-active');
        } else {
            line.classList.remove('is-active');
        }
    });

});