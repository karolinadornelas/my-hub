// Seleciona os elementos necessários
const track = document.querySelector('.carousel-track');
const items = document.querySelectorAll('.carousel-item');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

let index = 0;
const itemWidth = items[0].clientWidth;
const totalItems = items.length;
let interval = null;

// largura a track por item
track.style.width = `${itemWidth * totalItems}px`;

const moveCarousel = () => {
    track.style.transform = `translateX(-${index * itemWidth}px)`;
};
const nextSlide = () => {
    index++;
    if (index > totalItems - 1) {
        index = 0;
    }
    moveCarousel();
};
const prevSlide = () => {
    index--;
    if (index < 0) {
        index = totalItems - 1;
    }
    moveCarousel();
};


nextBtn.addEventListener('click', () => {
    nextSlide();
    resetInterval();
});

prevBtn.addEventListener('click', () => {
    prevSlide();
    resetInterval();
});

//intervalo automático
const startInterval = () => {
    interval = setInterval(() => {
        nextSlide();
    }, 5000); 
};

//parar intervalo automático
const resetInterval = () => {
    clearInterval(interval);
    startInterval();
};

//iniciar carousel automático
startInterval();
