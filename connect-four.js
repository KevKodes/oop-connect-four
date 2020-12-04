import Game from './game.js';

let game;

document.addEventListener('DOMContentLoaded', () => {

  document.getElementById('form-holder').addEventListener('keyup', event => {
    const player1 = document.getElementById('player-1-name');
    const player2 = document.getElementById('player-2-name');
    const gameButton = document.getElementById('new-game');
    console.log(player1.value)
    if (player1.value !== '' && player2.value !== '') {
      gameButton.disabled = false;
    } else {
      gameButton.disabled = true;
    }

  })


})
