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
               // shop check
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

     // Endgame Function
var endGame = function() {

     if (playerHealth > 0) {
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
               if (playerMoney >= 7) {
                    window.alert("Refilling player's health by 20 for 7 dollars.")
                    playerHealth = playerHealth + 20;
                    playerMoney = playerMoney - 7;
                    console.log(playerName, playerAttack, playerHealth, playerMoney);
               }
               else {
                    window.alert("You don't have enough money!");
               }
               break;
          
          case "UPGRADE":
          case "upgrade":
               if (playerMoney >= 7) {
                    window.alert("Upgrading player's attack by 6 for 7 dollars.")
                    playerAttack = playerAttck +6;
                    playerMoney = playerMoney - 7;
                    console.log(playerName, playerAttack, playerHealth, playerMoney);
               }
               else {
                    window.alert("You don't have enough money!")
               }
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

     playerHealth = 100;
     playerAttack = 10;
     playerMoney = 10;

     for (var i = 0; i < enemyNames.length; i++) {
          if (playerHealth > 0) {
               window.alert("Welcome to Robot Gladiators! " + (i + 1));
               var pickedEnemyName = enemyNames[i];
               enemyHealth = 10;
               fight(pickedEnemyName);

          if (playerHealth > 0 && i < enemyNames.length - 1) {

               var storeConfirm = window.confirm("The fight is over, visit the store befor the next round?");

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


