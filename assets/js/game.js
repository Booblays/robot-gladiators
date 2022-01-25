var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

console.log(playerName, playerAttack, playerHealth, playerMoney);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 10;
var enemyAttack = 12;

    // Fight Function
var fight = function(enemyName) {

     while (playerHealth > 0 && enemyHealth > 0) {
               
          var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");  
          
          if (promptFight === "skip" || promptFight === "SKIP") {

               // Comfirm player wants to skip
               var confirmSkip = window.confirm("Would you like to skip the battle?");

               // If yes (true), leave fight
               if (confirmSkip) {
               window.alert(playerName + " has chosen to skip the fight!");
               playerMoney = playerMoney - 2;
               console.log("playerMoney", playerMoney);
               break;
               }

               else {
                    fight();
               }
          }

                // remove enemy's health by subtracting the amount set in the playerAttack variable
          enemyHealth = enemyHealth - playerAttack;
           console.log(
                 playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
          );
               
               // Check enemy's health
          if (enemyHealth <= 0) {
               window.alert(enemyName + " has died!");
               break;
          }
          else {
               window.alert(enemyName + " still has " + enemyHealth + " health left.")
          }
                    
                 // Remove player's health by subtracting the amount set in the enemyAttack variable
          playerHealth = playerHealth - enemyAttack;
          console.log(
               enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
          );
                    
                // Check player's health
          if (playerHealth <= 0) {
                window.alert(playerName + " has died!");
               break;
          }
          else {
                window.alert(playerName + " still has " + playerHealth + " health left.");
          }
     }
          
};

for(var i = 0; i < enemyNames.length; i++) {
     var pickedEnemyName = enemyNames[i];
     enemyHealth = 50;
     fight(enemyNames[i]);
}


// Game States
// "WIN" - Player robot has defeated all enemy-robots
//    * Fight all enemy-robots
//    * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less