new Vue({
  el: '#app',
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false,
    logs: []
  },
  methods: {
    startGame: function() {
      this.gameIsRunning = true;
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.logs = [];
    },
    attack: function() {
      var damage = this.calculateDamage(3,10);
      this.monsterHealth -= damage;
      this.logs.unshift({
        isPlayer: true,
        message: 'Player hits monster by ' + damage
      });
      if(this.checkWin()) {
        return;
      }
      this.monsterAttacks();
    },
    specialAttack: function() {
      var damage = this.calculateDamage(6,20);
      this.monsterHealth -= damage;
      this.logs.unshift({
        isPlayer: true,
        message: 'Player hits [specialAttack] monster by ' + damage
      });
      if(this.checkWin()) {
        return;
      }
      this.monsterAttacks();
    },
    heal: function() {
      if(this.playerHealth <= 90) {
        this.playerHealth += 10;
      } else {
        this.playerHealth = 100;
      }
      this.logs.unshift({
        isPlayer: true,
        message: 'Player heals for 10'
      });
      this.monsterAttacks();
    },
    giveUp: function() {
        this.gameIsRunning = false;
        this.logs = [];
    },
    monsterAttacks: function() {
      var damage = this.calculateDamage(2,9);
      this.playerHealth -= damage;
      this.logs.unshift({
        isPlayer: false,
        message: 'Monster hits player by ' + damage
      });
      this.checkWin();
    },
    calculateDamage: function(min, max) {
      return Math.max(Math.floor(Math.random() * max) + 1, min);
    },
    checkWin: function() {
      if(this.monsterHealth <= 0) {
        if(confirm('You won, do you want play again?')) {
          this.startGame();
        } else {
          this.startGame = false;
        }
        return true;
      } else if (this.playerHealth <= 0) {
        if(confirm('You lost, do you want play again?')) {
          this.startGame();
        } else {
          this.startGame = false;
        }
        return true;
      }
      return false;
    }
  }
})
