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
    bentoCards.forEach(function(card) {
        card.addEventListener('mouseenter', function() {
            card.style.filter = 'grayscale(0%)';
            const animatedImg = card.querySelector('.animated-img');
            const imgSrc = animatedImg.src;
            animatedImg.src = ''; // Reset the GIF
            animatedImg.src = imgSrc; // Re-assign to restart it
        });
        card.addEventListener('mouseleave', function() {
            if (!card.classList.contains('lumos')) {
                card.style.filter = 'grayscale(100%)';
            }
        });
    });

    document.querySelectorAll('.mockup').forEach(mockup => {
        const gif = mockup.querySelector('.animated-mockup');
        const img = new Image();
        img.src = gif.src;
        mockup.addEventListener('mouseenter', () => {
            gif.src = '';
            gif.src = img.src;
        });
    }); 
});


window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.scroll-section');
    const numberElement = document.querySelector('.number');
    
    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const halfWayPoint = window.innerHeight / 2;
        
        if (rect.top <= halfWayPoint && rect.bottom >= halfWayPoint) {
        let newNumber = '0' + (index + 1) + '.';
        if (numberElement.textContent !== newNumber) {
            numberElement.textContent = newNumber;
            numberElement.style.transform = 'translateY(0)';
            setTimeout(() => {
            numberElement.style.transform = 'translateY(0)';
            }, 100);
        }
        }
    });    
});

function copyToClipboard() {
    const email = "tairashingie@gmail.com";
    const tooltip = document.querySelector('.custom-tooltip');

    navigator.clipboard.writeText(email)
        .then(() => {
            console.log("Email copied to clipboard!");
            tooltip.textContent = "Copied!";
            
            setTimeout(() => {
                tooltip.textContent = "Copy E-mail";
            }, 2000);
        })
        .catch(err => {
            console.error("Error copying email: ", err);
        });
}
