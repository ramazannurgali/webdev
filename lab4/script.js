// Variables for dice images and roll count
let rollCount = 0;
const diceImages = [
  'images/dice1.png',
  'images/dice2.png',
  'images/dice3.png',
  'images/dice4.png',
  'images/dice5.png',
  'images/dice6.png'
];

// Function to roll the dice and update the images
function rollDice() {
  const dice1 = Math.floor(Math.random() * 6) + 1;
  const dice2 = Math.floor(Math.random() * 6) + 1;
  
  document.getElementById('dice1').src = diceImages[dice1 - 1];
  document.getElementById('dice2').src = diceImages[dice2 - 1];

  // Update roll count and display it
  rollCount++;
  document.getElementById('roll-counter').textContent = `Rolls: ${rollCount}`;

  // Calculate the sum and update display
  const sum = dice1 + dice2;
  document.getElementById('sum-display').textContent = `Sum: ${sum}`;

  // Check for doubles and display message
  const winningMessage = document.getElementById('winning-message');
  if (dice1 === dice2) {
    winningMessage.textContent = 'You rolled doubles! 🎉';
  } else {
    winningMessage.textContent = '';
  }
}

// Event listener for roll button
document.getElementById('roll-button').addEventListener('click', rollDice);
