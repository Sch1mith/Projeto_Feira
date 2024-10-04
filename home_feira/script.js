let items = document.querySelectorAll('.item');
let currentIndex = 0;

// Função para atualizar o slide ativo
function updateSlide(direction) {
    // Esconde o item atual
    items[currentIndex].style.display = 'none';

    // Determina o próximo índice com base na direção
    if (direction === 'next') {
        currentIndex = (currentIndex + 1) % items.length;
    } else {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
    }

    // Exibe o próximo item
    items[currentIndex].style.display = 'block';
}

// Eventos dos botões de próximo e anterior
document.querySelector('.next').addEventListener('click', function() {
    updateSlide('next');
});

document.querySelector('.prev').addEventListener('click', function() {
    updateSlide('prev');
});
