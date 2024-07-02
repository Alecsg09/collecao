// scripts/app.js
document.addEventListener('DOMContentLoaded', () => {
    const gameList = document.getElementById('game-list');

    fetch('https://api.rawg.io/api/games?key=4a375597e33140c38e0d967f67fbc82a')
        .then(response => response.json())
        .then(data => {
            data.results.forEach(game => {
                const gameItem = document.createElement('div');
                gameItem.classList.add('game-item');
                gameItem.innerHTML = `
                    <h2>${game.name}</h2>
                    <p>Data de Lançamento: ${game.released}</p>
                    <img src="${game.background_image}" alt="${game.name}">
                `;
                gameList.appendChild(gameItem);
            });
        })
        .catch(error => console.error('Erro ao buscar jogos:', error));
});
