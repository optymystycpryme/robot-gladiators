let playerName = window.prompt("What is your robot's name?");
let playerHealth = 100;
let playerAttack = 10;
let playerMoney = 10;



let enemyNames = ["Roboto", "Amy Android", "Robo Trumble"];
let enemyHealth = 50;
let enemyAttack = 12;

console.log(
  playerName,
  playerHealth,
  playerAttack,
  playerMoney + ' | ' +
  enemyNames,
  enemyHealth,
  enemyAttack
);

window.alert(`The fight has begun, ${playerName}!`);

const fight = (enemyName) => {
  while (enemyHealth > 0) {
    var promptFight = window.prompt(
      "Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose."
    );
    window.alert(`${promptFight} it is!!!`);
    if (promptFight.toLowerCase() === "fight") {

      //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
      enemyHealth = enemyHealth - playerAttack;

      // Log a resulting message to the console so we know that it worked.
      console.log(`${playerName} attacked ${enemyName}. ${enemyName} now has ${enemyHealth} health remaining.`);

      if (enemyHealth <= 0) {
        window.alert(`${enemyName} has died!`);
      } else {
        window.alert(`${enemyName} still has ${enemyHealth} health left.`)
      }

      playerHealth = playerHealth - enemyAttack;
      console.log(`${enemyName} attacked ${playerName}. ${playerName} now has ${playerHealth} health remaining.`);

      if (playerHealth <= 0) {
        window.alert(`${playerName} has died!`);
      } else {
        window.alert(`${playerName} still has ${playerHealth} health left.`);
      }
    } else if (promptFight.toLowerCase() === "skip") {
      let confirmSkip = window.confirm("Are you sure you'd like to quit?");
      // if yes (true), leave fight
      if (confirmSkip) {
        window.alert(playerName + " has chosen to skip the fight!");
        playerMoney = playerMoney - 2;
      } else {
        fight();
      }
    } else {
      window.alert("You need to pick a valid option. Try again!");
    }

    console.log(
      playerName,
      playerHealth,
      playerAttack,
      playerMoney + ' | ' +
      enemyName,
      enemyHealth,
      enemyAttack
    );
  }
}
for (let i = 0; i < enemyNames.length; i++) {
  let pickedEnemyName = enemyNames[i];
  enemyHealth = 50;
  fight(pickedEnemyName);
}