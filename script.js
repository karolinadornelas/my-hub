// Seleciona os elementos necessários
const track = document.querySelector('.carousel-track');
const items = document.querySelectorAll('.carousel-item');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

let index = 0;
const itemWidth = items[0].clientWidth;
const totalItems = items.length;
let interval = null;

// Define a largura da track baseada no número de itens
track.style.width = `${itemWidth * totalItems}px`;

// Função para mover o carousel
const moveCarousel = () => {
    track.style.transform = `translateX(-${index * itemWidth}px)`;
};

// Função para avançar para o próximo slide
const nextSlide = () => {
    index++;
    if (index > totalItems - 1) {
        index = 0;
    }
    moveCarousel();
};

// Função para voltar para o slide anterior
const prevSlide = () => {
    index--;
    if (index < 0) {
        index = totalItems - 1;
    }
    moveCarousel();
};

// Event listener para o botão Próximo
nextBtn.addEventListener('click', () => {
    nextSlide();
    resetInterval();
});

// Event listener para o botão Anterior
prevBtn.addEventListener('click', () => {
    prevSlide();
    resetInterval();
});

// Função para iniciar o intervalo automático
const startInterval = () => {
    interval = setInterval(() => {
        nextSlide();
    }, 5000); // 5000 milissegundos = 5 segundos
};

// Função para parar o intervalo automático
const resetInterval = () => {
    clearInterval(interval);
    startInterval();
};

// Inicia o carousel automático
startInterval();
