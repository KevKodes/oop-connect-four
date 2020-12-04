import Game from './game.js';

let game;
function updateUI () {
  if (!game){
    document.getElementById('board-holder').classList.add('is-invisible')
    
  } else {
    document.getElementById('board-holder').classList.remove('is-invisible')
    document.getElementById('game-name').innerHTML=game.getName()
  }
}

document.addEventListener('DOMContentLoaded', () => {

  const player1 = document.getElementById('player-1-name');
  const player2 = document.getElementById('player-2-name');
  const gameButton = document.getElementById('new-game');
  document.getElementById('form-holder').addEventListener('keyup', event => {
    
    console.log(player1.value)
    if (player1.value !== '' && player2.value !== '') {
      gameButton.disabled = false;
    } else {
      gameButton.disabled = true;
    }

  })

  gameButton.addEventListener('click', (event) =>{

    game= new Game (player1.value, player2.value)
    player1.value= '';
    player2.value = '';

    gameButton.disabled= true;
    updateUI()
  })




})
