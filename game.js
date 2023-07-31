const attackButton = document.getElementById('attack');
attackButton.addEventListener('click', () => attackClicked());
const statusMessage = document.getElementById('status');

function attackClicked() {
  //Player attacks Enemy
  statusMessage.innerHTML = player.attack(enemy);

  //Enemy attacks Player
  setTimeout(() => {
    statusMessage.innerHTML = enemy.attack(player);
  }, 3000);
  
}

class Character {
  constructor(name, hp = 100, damage = 10, sheild = false, defence = 0, evasion = 0.5) {
    this.name = name;
    this.hp = hp;
    this.damage = damage;
    this.sheild = sheild;
    this.defence = defence;
    this.evasion = evasion;
  }

  attack(defender) {
    let message = returnStatusMessage();
    if (this.calculateDamage(defender.damage) > 0) {
      const damage = this.calculateDamage(this.damage, defender);
      defender.hp -= damage;
    } else {
      message += '\n' + this.name + ' MISSED!';
    }
    return message;
  }

  attacked(damage) {
    this.hp -= damage;
    return returnStatusMessage();
  }

  calculateDamage(damage) {
    if (Math.random() > this.evasion) return 0

   damage -= this.defence;
    if (this.sheild) {
      damage = damage / 2;
    }
  
    return damage
  }
}

const player = new Character('Alan');
const enemy = new Character('Dragon', 100, true);


function returnStatusMessage() {
  let message = 'Your HP: ' + player.hp + '\n Enemy HP: ' + enemy.hp + '\n Game status: In battle';

  if (player.hp <= 0) {
    message = 'You lost the game';
  } else if (enemy.hp <= 0) {
    message = 'You won the game';
  }
  
  return message
}

