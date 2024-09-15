// This is where it all goes :)
document.addEventListener('DOMContentLoaded', function() {
    var scrollDown = document.getElementById('scroll-down');
    if (scrollDown) {
        scrollDown.addEventListener('click', function() {
            var aboutSection = document.getElementById('about');
            if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
});
