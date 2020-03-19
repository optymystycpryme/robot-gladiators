let playerName = window.prompt("What is your robot's name?");
let playerHealth = 100;
let playerAttack = 10;

let enemyName = "Roboto";
let enemyHealth = 50;
let enemyAttack = 12;

console.log(
  playerName,
  playerHealth,
  playerAttack + ' | ' +
  enemyName,
  enemyHealth,
  enemyAttack
);

const fight = () => {
  console.log(`The fight has begun, ${playerName}!`);

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

  // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.

  // Log a resulting message to the console so we know that it worked.
  }
fight();