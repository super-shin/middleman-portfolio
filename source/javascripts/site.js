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

    var lumosElement = document.querySelector('.lumos');
            var bentoCards = document.querySelectorAll('.bento-card');
            function setAllCardsGrayscale() {
                bentoCards.forEach(function(card) {
                    card.style.filter = 'grayscale(100%)';
                });
            }
            setAllCardsGrayscale();
            if (lumosElement) {
                lumosElement.addEventListener('mouseenter', function() {
                    bentoCards.forEach(function(card) {
                        card.style.filter = 'grayscale(0%)';
                    });
                });
                lumosElement.addEventListener('mouseleave', function() {
                    setAllCardsGrayscale();
                });
            }
            bentoCards.forEach(function(card) {
                card.addEventListener('mouseenter', function() {
                    card.style.filter = 'grayscale(0%)';
                });
                card.addEventListener('mouseleave', function() {
                    if (!card.classList.contains('lumos')) {
                        card.style.filter = 'grayscale(100%)';
                    }
                });
            });
});
