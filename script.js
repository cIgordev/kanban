// Selecionar todos os cartões e colunas (boards)
const cards = document.querySelectorAll('.card');
const boards = document.querySelectorAll('.board');

// Adicionar eventos aos cartões (o que acontece quando começamos e paramos de arrastar)
cards.forEach(card => {
    card.addEventListener('dragstart', () => {
        // Adiciona a classe 'dragging' para mudar a opacidade (CSS)
        card.classList.add('dragging');
    });

    card.addEventListener('dragend', () => {
        // Remove a classe quando soltamos o cartão
        card.classList.remove('dragging');
    });
});

// Adicionar eventos às colunas (zonas de drop)
boards.forEach(board => {
    
    // O evento dragover é necessário para permitir que um item seja solto na área
    board.addEventListener('dragover', e => {
        e.preventDefault(); // Previne o comportamento padrão do navegador
        board.classList.add('hovered'); // Dá um feedback visual na coluna
    });

    // Quando o item sai da área da coluna (se você desistir de soltar lá)
    board.addEventListener('dragleave', () => {
        board.classList.remove('hovered');
    });

    // Quando o cartão é finalmente solto na coluna
    board.addEventListener('drop', () => {
        board.classList.remove('hovered');
        
        // Encontra o cartão que está sendo arrastado (tem a classe .dragging)
        const draggingCard = document.querySelector('.dragging');
        
        // Move o cartão para esta nova coluna
        if (draggingCard) {
            board.appendChild(draggingCard);
        }
    });
});