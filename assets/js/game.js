     // Random Number Function
var randomNumber = function(min, max) {
          var value = Math.floor(Math.random() * (max - min + 1) + min);
          
          return value;
}


var playerInfo = {
     name: window.prompt("What is yout robot's name?"),
     health: 100,
     attack: 10,
     money: 10,
     reset: function() {
          this.health = 100;
          this.money = 10;
          this.attck=10;
          
     },
     refillHealth: function() {
          if (this.money >= 7) {
               window.alert("Refilling player's health by 20 for 7 dollars.");
               this.healt += 20;
               this.money -= 7;
          }
          else {
               window.alert("You don't have enough money!");
          }
     },
     upgradeAttack: function() {
          if (this.money >= 7) {
               window.alert("Upgrading player's attack by 6 for 7 dollars.")
               this.attack += 6;
               this.money -= 7;
          }
          else {
               window.alert("You don't have enough money!")
          }
     }
};


console.log(playerInfo);

var enemyInfo = [
     {
          name: "Roborto",
          attack: randomNumber(10, 14)
     },
     {
          name: "Amy Android",
          attack: randomNumber(10, 14)
     },
     {
          name: "Robo Trumble",
          attack: randomNumber(10, 14)
     }
];




    // Fight Function
var fight = function(enemy) {

     while (playerInfo.health > 0 && enemy.health > 0) {
          
          var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");  
               
          if (promptFight === "skip" || promptFight === "SKIP") {

                // Comfirm player wants to skip
               var confirmSkip = window.confirm("Would you like to skip the battle?");

                    // If yes (true), leave fight
               if (confirmSkip) {
                    window.alert(playerInfo.name + " has chosen to skip the fight!");
                    playerInfo.money = Math.max(0, playerInfo.money - 2);
                    console.log("playerMoney", playerInfo.money);
                    break;
               }
 
               else {
                    fight();
               }
          }

               // remove enemy's health by subtracting the amount set in the player Attack variable
          var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
          console.log(damage);
          enemy.health = Math.max(0, enemy.health - damage);
          console.log(
               playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining."
          );
                    
               // Check enemy's health
          if (enemy.health <= 0) {
               window.alert(enemy.name + " has died!");
               break;
          }
          else {
               window.alert(enemy.name + " still has " + enemy.health + " health left.")
          }
                         
                // Remove player's health by subtracting the amount set in the enemy Attack variable
          var damage = randomNumber(enemy.attack - 3, enemy.attack);
          playerInfo.health = Math.max(0, playerInfo.health - damage);
          console.log(
               enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining."
          );
                         
               // Check player's health
          if (playerInfo.health <= 0) {
                window.alert(playerInfo.name + " has died!");
               break;
          }
          else {
               window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
          }
     }
     
          
};

     // Endgame Function
var endGame = function() {

     if (playerInfo.health > 0) {
          window.alert("The game has now ended. Let's see how you did!");
     }
     else {
          window.alert("You've lost your robot in battle.")
     }

     var playAgainConfirm = window.confirm("Would you like to play again?");

     if (playAgainConfirm) {
          startGame();
     }
     else {
          window.alert("Thank you for playing Robot Gladiators! Come back soon!");
     }

}
     // Shop Function
var shop = function() {
     var shopOptionPrompt = window.prompt(
          "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
     );

     switch (shopOptionPrompt) {
          case "REFILL":
          case "refill":
               playerInfo.refillHealth();
               break;
          
          case "UPGRADE":
          case "upgrade":
               playerInfo.refillHealth();
               break;

          case "LEAVE":
          case "leave":
               window.alert("Leaving the store.");
          break;

          default:
               window.alert("You did not pick a valid option. Try again.");
               shop();
          break;
     }
};

     // Startgame Function
var startGame = function() {

     playerInfo.reset();

     for (var i = 0; i < enemyInfo.length; i++) {
          if (playerInfo.health > 0) {
               window.alert("Welcome to Robot Gladiators! " + (i + 1));
               var pickedEnemyObj = enemyInfo[i];
               pickedEnemyObj.health = randomNumber(40, 60);
               fight(pickedEnemyObj);

          if (playerInfo.health > 0 && i < enemyInfo.length - 1) {

               var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");

               if (storeConfirm) {
                    shop();
               }
          }
                    
          }
          
          else {
               window.alert("You have lost your robot in battle! Game Over!");
               break;
          }
     }
     // startGame();
     endGame();
};

     
startGame();


