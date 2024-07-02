// scripts/search.js
function searchGame() {
    const searchQuery = document.getElementById('search-bar').value.trim();
    const searchResults = document.getElementById('search-results');
    searchResults.innerHTML = '';

    if (!searchQuery) {
        searchResults.innerHTML = '<p>Por favor, digite um termo de busca.</p>';
        return;
    }

    fetch(`https://api.rawg.io/api/games?search=${encodeURIComponent(searchQuery)}&key=4a375597e33140c38e0d967f67fbc82a`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro na requisição');
            }
            return response.json();
        })
        .then(data => {
            if (data.results.length === 0) {
                searchResults.innerHTML = '<p>Nenhum jogo encontrado.</p>';
                return;
            }

            data.results.forEach(game => {
                const gameItem = document.createElement('div');
                gameItem.classList.add('game-item');
                gameItem.innerHTML = `
                    <h2>${game.name}</h2>
                    <p>Data de Lançamento: ${game.released}</p>
                    <img src="${game.background_image}" alt="${game.name}">
                `;
                searchResults.appendChild(gameItem);
            });
        })
        .catch(error => {
            console.error('Erro ao buscar jogos:', error);
            searchResults.innerHTML = '<p>Erro ao buscar jogos. Tente novamente mais tarde.</p>';
        });
}
