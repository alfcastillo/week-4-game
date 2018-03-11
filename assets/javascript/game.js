
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
var lukePower = 145;
var yodaPower = 165;
var chewbaccaPower=105;
var stormtrooperPower=105;


// Player Buttons Event


$("#luke-button").on("click", function () {
  if (!playerSelection && !defenderSelection) {
    console.log("#### Selecting Character");
    console.log("Player Selection--> " + playerSelection);
    console.log("Defender Selection--> " + defenderSelection);
    console.log("Selected Luke as Character");
    playerSelection = true;
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
    $("#defender-panel").append(defenderSelected);
    console.log("### Selecting Defender");
    console.log("Player Selection--> " + playerSelection);
    console.log("Defender Selection--> " + defenderSelection);
    console.log("**** Selected Luke as Defender");
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
    $("#character-panel").append(playerSelected);
    $("#enemies-panel").append($("#luke"));
    $("#enemies-panel").append($("#chewbacca"));
    $("#enemies-panel").append($("#stormtrooper"));
  }
  else if (playerSelection && !defenderSelection) {
    defenderSelection = true;
    defenderSelected = $(".yoda-card");
    $("#defender-panel").append(defenderSelected);
    console.log("### Selecting Defender");
    console.log("Player Selection--> " + playerSelection);
    console.log("Defender Selection--> " + defenderSelection);
    console.log("**** Selected Yoda as Defender");
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
    $("#character-panel").append(playerSelected);
    $("#enemies-panel").append($("#luke"));
    $("#enemies-panel").append($("#yoda"));
    $("#enemies-panel").append($("#stormtrooper"));
  }
  else if (playerSelection && !defenderSelection) {
    defenderSelection = true;
    defenderSelected = $(".chewbacca-card");
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
    $("#character-panel").append(playerSelected);
    $("#enemies-panel").append($("#luke"));
    $("#enemies-panel").append($("#chewbacca"));
    $("#enemies-panel").append($("#yoda"));
  }
  else if (playerSelection && !defenderSelection) {
    defenderSelection = true;
    defenderSelected = $(".stormtrooper-card");
    $("#defender-panel").append(defenderSelected);
    console.log("### Selecting Defender");
    console.log("Player Selection--> " + playerSelection);
    console.log("Defender Selection--> " + defenderSelection);
    console.log("**** Selected stormtrooper as Defender");
  }
})

$(".fight-button").on("click", function () {
console.log("Attack button pressed");
console.log("Player Selected --> "+playerSelected);
// console.log(playerSelected);
console.log("Luke power: "+$("#luke-power"));
console.log("Defender Selected --> "+defenderSelected);
});