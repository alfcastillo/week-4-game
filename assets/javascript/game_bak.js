
// JavaScript function that wraps everything
// $(document).ready(function() {

// Gets Link for Theme Song
// var audioElement = document.createElement("audio");
// audioElement.setAttribute("src", "../audio/star-wars-theme-song.mp3");

// // Theme Button
// $(".theme-button").on("click", function() {
//   audioElement.play();
// });

// $(".pause-button").on("click", function() {
//   audioElement.pause();
// });

// Character Object
// Variables
var playerPanel;
var playerSelection = false;
var defenderSelection = false;
var playerSelected;
var defenderSelected;
var player = {
  lukePower: 145,
  yodaPower: 165,
  chewbaccaPower: 105,
  stormtrooperPower: 105,
};
var attacker = {
  attackerPower: 0,
  currentPower: 0,
  attackerWin: false,
  attackerName: " "
}

var defender = {
  defenderPower: 0,
  currentPower: 0,
  defenderWin: false,
  defenderName: " "
}
var attackFactor = 3; //Factor used to calculate the Attack level

// Player Buttons Event


$("#luke-button").on("click", function () {
  if (!playerSelection && !defenderSelection) {
    console.log("#### Selecting Character");
    console.log("Player Selection--> " + playerSelection);
    console.log("Defender Selection--> " + defenderSelection);
    playerSelection = true;
    attacker.attackerPower = player.lukePower;
    attacker.currentPower = attacker.attackerPower;
    attacker.attackerName = "luke";
    console.log("Selected Luke as Character. Power= " + attacker.attackerPower);
    console.log("Player Selection--> " + playerSelection);
    console.log("Defender Selection--> " + defenderSelection);
    playerSelected = $(".luke-card");

    $("#character-panel").append(playerSelected);
    $("#enemies-panel").append($("#yoda"));
    $("#enemies-panel").append($("#chewbacca"));
    $("#enemies-panel").append($("#stormtrooper"));
  }
  else if (playerSelection && !defenderSelection) {
    defenderSelection = true;
    defenderSelected = $(".luke-card");
    defender.defenderPower = player.lukePower;
    defender.currentPower = defender.defenderPower;
    defender.defenderrName = "luke";
    $("#defender-panel").append(defenderSelected);
    console.log("### Selecting Defender");
    console.log("Player Selection--> " + playerSelection);
    console.log("Defender Selection--> " + defenderSelection);
    console.log("Selected Luke as Character. Power= " + defender.defenderPower);

  }
});

$("#yoda-button").on("click", function () {
  if (!playerSelection && !defenderSelection) {
    console.log("#### Selecting Character");
    console.log("Player Selection--> " + playerSelection);
    console.log("Defender Selection--> " + defenderSelection);
    console.log("Selected Yoda as Character");
    playerSelection = true;
    playerSelected = $(".yoda-card");
    attacker.attackerPower = player.yodaPower;
    attacker.currentPower = attacker.attackerPower;
    attacker.attackerName = "yoda";
    $("#character-panel").append(playerSelected);
    $("#enemies-panel").append($("#luke"));
    $("#enemies-panel").append($("#chewbacca"));
    $("#enemies-panel").append($("#stormtrooper"));
  }
  else if (playerSelection && !defenderSelection) {
    defenderSelection = true;
    defenderSelected = $(".yoda-card");
    defender.defenderPower = player.yodaPower;
    defender.currentPower = defender.defenderPower;
    defender.defenderName = "yoda";
    $("#defender-panel").append(defenderSelected);
    console.log("### Selecting Defender");
    console.log("Player Selection--> " + playerSelection);
    console.log("Defender Selection--> " + defenderSelection);
    console.log("**** Selected Yoda as Defender");
    console.log("Defender Power= " + defender.defenderPower);
  }
})

$("#chewbacca-button").on("click", function () {
  if (!playerSelection && !defenderSelection) {
    console.log("#### Selecting Character");
    console.log("Player Selection--> " + playerSelection);
    console.log("Defender Selection--> " + defenderSelection);
    console.log("Selected Chewbacca as Character");
    playerSelection = true;
    playerSelected = $(".chewbacca-card");
    attacker.attackerPower = player.chewbaccaPower;
    attacker.currentPower = attacker.attackerPower;
    attacker.attackerName = "chewbacca";
    $("#character-panel").append(playerSelected);
    $("#enemies-panel").append($("#luke"));
    $("#enemies-panel").append($("#yoda"));
    $("#enemies-panel").append($("#stormtrooper"));
  }
  else if (playerSelection && !defenderSelection) {
    defenderSelection = true;
    defenderSelected = $(".chewbacca-card");
    defender.defenderPower = player.chewbaccaPower;
    defender.currentPower = defender.defenderPower;
    defender.defenderName = "chewbacca";
    $("#defender-panel").append(defenderSelected);
    console.log("### Selecting Defender");
    console.log("Player Selection--> " + playerSelection);
    console.log("Defender Selection--> " + defenderSelection);
    console.log("**** Selected Chewbacca as Defender");
  }
})

$("#stormtrooper-button").on("click", function () {
  if (!playerSelection && !defenderSelection) {
    console.log("#### Selecting Character");
    console.log("Player Selection--> " + playerSelection);
    console.log("Defender Selection--> " + defenderSelection);
    console.log("Selected Stormtrooper as Character");
    playerSelection = true;
    playerSelected = $(".stormtrooper-card");
    attacker.attackerPower = player.stormtrooperPower;
    attacker.currentPower = attacker.attackerPower;
    attacker.attackerName = "stormtrooper";
    $("#character-panel").append(playerSelected);
    $("#enemies-panel").append($("#luke"));
    $("#enemies-panel").append($("#chewbacca"));
    $("#enemies-panel").append($("#yoda"));
  }
  else if (playerSelection && !defenderSelection) {
    defenderSelection = true;
    defenderSelected = $(".stormtrooper-card");
    $("#defender-panel").append(defenderSelected);
    defender.defenderPower = player.stormtrooperPower;
    defender.currentPower = defender.defenderPower;
    defender.defenderName = "stormtrooper";
    console.log("### Selecting Defender");
    console.log("Player Selection--> " + playerSelection);
    console.log("Defender Selection--> " + defenderSelection);
    console.log("**** Selected stormtrooper as Defender");
  }
})

function resetEnemies(){
  console.log("reseting Enemies for new Game");
 $("#enemies-panel").append(defenderSelected);
 playerSelection = true;
 defenderSelection = false;
 console.log("Player Selection--> " + playerSelection);
 console.log("Defender Selection--> " + defenderSelection);
}

function fighting() {
  console.log("Running fighting function");
  attacker.attackerPower = attacker.attackerPower - (defender.defenderPower / attackFactor);
  defender.defenderPower = defender.defenderPower - (attacker.attackerPower / attackFactor);
  console.log("Attacker Power Left--> " + attacker.attackerPower);
  console.log("Defender Power Left--> " + defender.defenderPower);

  if ((attacker.attackerPower <= 0) && (defender.defenderPower >= 0)) {
    attacker.attackerWin = false;
    defender.defenderWin = true;
    console.log(attacker.attackerName + "--> LOSER");
  }
  else if ((attacker.attackerPower >= 0) && (defender.defenderPower <= 0)) {
    attacker.attackerWin = true;
    defender.defenderWin = false;
    console.log(attacker.attackerName + "--> WINNER");
    attacker.attackerPower = attacker.attackerPower + attacker.currentPower;
    console.log("New Attack Power for: " + attacker.attackerName + "--> " + attacker.attackerPower);
    resetEnemies();
  }
};
 


$(".attack-button").on("click", function () {
  // var currentAttackerPower = attacker.attackerPower;
  // var currentDefenderPower = defender.defenderPower;
  console.log("Attack button pressed");
  console.log("Player Selected --> "+attacker.attackerName);
  console.log("Defender Selected --> "+defender.defenderName);
  fighting(attacker.attackerPower, defender.defenderPower);
  });

// $(".attack-button").on("click", function () {
// // var currentAttackerPower = attacker.attackerPower;
// // var currentDefenderPower = defender.defenderPower;
// console.log("Attack button pressed");
// console.log("Player Selected --> "+attacker.attackerName);
// console.log("Defender Selected --> "+defender.defenderName);
// currentAttackerPower = currentAttackerPower - (defender.defenderPower/attackFactor);
// currentDefenderPower = currentDefenderPower - (attacker.attackerPower/attackFactor);
// console.log("Fighting!!!!!")
// console.log("Attacker Power Left--> "+currentAttackerPower);
// console.log("Defender Power Left--> "+currentDefenderPower);

// if ((currentAttackerPower <= 0) && (currentDefenderPower >= 0)){
//   attacker.attackerWin = false;
//   defender.defenderWin = true;
//   console.log(attacker.attackerName + "--> LOSER");
// }
// else if ((currentAttackerPower >= 0) && (currentDefenderPower <= 0)){
//   attacker.attackerWin = true;
//   defender.defenderWin = false;
//   console.log(attacker.attackerName + "--> WINNER");
//   attacker.attackerPower = attacker.attackerPower + currentAttackerPower;
//   console.log("New Attack Power for: "+attacker.attackerName+"--> "+attacker.attackerPower);
// }
// });