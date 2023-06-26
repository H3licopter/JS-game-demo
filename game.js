const attackButton = document.getElementById('attack');
attackButton.addEventListener('click', () => attack(player, enemy));
const statusMessage = document.getElementById('status');

const player = {
  name: 'Alan',
  hp: 100,
  damage: 50,
  sheild: false,
  defence: 10,
  evasion: 0.2
}

const enemy = {
  name: 'Dragon',
  hp: 1000,
  damage: 50,
  sheild: true,
  defence: 20,
  evasion: 0.5
}

function attack(attacker, defender) {
  if (checkIfHit(defender)) {
    const damage = calculateDamage(attacker, defender);
    defender.hp -= damage;
    statusMessage.innerHTML = returnStatusMessage();
  } else {
    statusMessage.innerHTML = 'MISSED! ' + returnStatusMessage();
  }
}

function checkIfHit(defender) {
  const random = Math.random();
  console.log(random);
  return Math.random() > defender.evasion;
}

function calculateDamage(attacker, defender) {
  let damage = attacker.damage - defender.defence;
  if (defender.sheild) {
    damage = damage / 2;
  }

  return damage
}

function returnStatusMessage() {
  let message = 'Your HP: ' + player.hp + '\n Enemy HP: ' + enemy.hp + '\n Game status: In battle';

  if (player.hp <= 0) {
    message = 'You lost the game';
  } else if (enemy.hp <= 0) {
    message = 'You won the game';
  }
  
  return message
}