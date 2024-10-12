let rollCount = 0;
const diceImages = [
  'images/dice1.png',
  'images/dice2.png',
  'images/dice3.png',
  'images/dice4.png',
  'images/dice5.png',
  'images/dice6.png'
];
function rollDice() {
  const dice1 = Math.floor(Math.random() * 6) + 1;
  const dice2 = Math.floor(Math.random() * 6) + 1;
  
  document.getElementById('dice1').src = diceImages[dice1 - 1];
  document.getElementById('dice2').src = diceImages[dice2 - 1];

  rollCount++;
  document.getElementById('roll-counter').textContent = `Rolls: ${rollCount}`;

  const sum = dice1 + dice2;
  document.getElementById('sum-display').textContent = `Sum: ${sum}`;

  const winningMessage = document.getElementById('winning-message');
  if (dice1 === dice2) {
    winningMessage.textContent = 'You rolled doubles! 🎉';
  } else {
    winningMessage.textContent = '';
  }
}

document.getElementById('roll-button').addEventListener('click', rollDice);
