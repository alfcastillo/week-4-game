
// JavaScript function that wraps everything
$(document).ready(function () {

  // Gets Link for Theme Song
  var audioElement = document.createElement('audio');
  audioElement.setAttribute('src', "./assets/star-wars-cantina-song.mp3");

  var starwarSongElement = document.createElement('audio');
  starwarSongElement.setAttribute('src', './assets/starwarsthemesong.mp3');

  var imperialSongElement = document.createElement('audio');
  imperialSongElement.setAttribute('src', './assets/imperial_march.mp3');

  // var audioElement = document.createElement("audio");
  // audioElement.setAttribute("src", "../../../NUCHI201802FSF2-Class-Repository-FSF/NUCHI201802FSF2-Class-Repository-FSF/01-Class-Content/04-jquery/01-Activities/10-CaptainPlanetGame/Solved/Assets/captainplanet24.mp3");
  // var audioElement = new Audio('/assets/audio/star-wars-theme-song.mp3');
  
  // Theme Button
  $(".theme-button").on("click", function () {
    audioElement.play();
    console.log("Play song");
  });

  $(".pause-button").on("click", function () {
    audioElement.pause();
  });
  
  $(".restart-button").hide();

  
  // Variables & Objects
  var playerPanel;
  var winCount=0;
  var playerSelection = false;
  var defenderSelection = false;
  var playerSelected;
  var defenderSelected;
  var player = {
    lukePower: 145,
    yodaPower: 165,
    chewbaccaPower: 105,
    stormtrooperPower: 104,
  };
  var attacker = {
    attackerPower: 0,
    currentPower: 0,
    attackerWin: false,
    attackerName: " ",
    powerSpan: " "
  }

  var defender = {
    defenderPower: 0,
    currentPower: 0,
    defenderWin: false,
    defenderName: " ",
    powerSpan: " "
  }
  var attackFactor = Math.floor((Math.random() * 5) + 1); //Factor used to calculate the Attack level
  var defendFactor = Math.floor((Math.random() * 5) + 1); //Factor used to calculate the Attack level

  // FUNCTIONS
  function resetEnemies() {
    console.log("***** RESETING Enemies for new Game");
    $("#defender-panel").empty();
    playerSelection = true;
    defenderSelection = false;
    // attacker.attackerWin = false;
    // defender.defenderWin = false;
    console.log("Player Selection--> " + playerSelection);
    console.log("Defender Selection--> " + defenderSelection);
    console.log("Attacker Win --> " + attacker.attackerWin);
    console.log("Defender Win--> " + defender.defenderWin);
  }

  function restartGame(){
    console.log("Inside Restart Function");
    playerSelection = false;
    defenderSelection = false;
    attacker.attackerWin = false;
    attacker.attackerPower = 0;
    attacker.currentPower=0;
    attackerName= " ";
    attacker.powerSpan = " ";
    defender.defenderWin = false;
    defender.defenderPower = 0;
    defender.currentPower = 0;
    defender.defenderName = " ";
    defender.powerSpan = " ";
    player.lukePower=145;
    player.yodaPower= 165;
    player.chewbaccaPower= 105;
    player.stormtrooperPower= 104;
    audioElement.pause();
    starwarSongElement.pause();
    imperialSongElement.pause();
    

    // Placing Players in Player Panel
    $("#luke").append($(".luke-card"));
    $("#yoda").append($(".yoda-card"));
    $("#chewbacca").append($(".chewbacca-card"));
    $("#stormtrooper").append($(".stormtrooper-card"));

    // Reset Power Values.
    console.log("Resetting Power values")
    $("#luke-power").html("<font color="+"white"+">145</font>");
    $("#yoda-power").html("<font color="+"white"+">165</font>");
    $("#chewbacca-power").html("<font color="+"white"+">105</font>");
    $("#stormtrooper-power").html("<font color="+"white"+">105</font>");

   
    // Reset panels 
    $("#character-panel").empty();
    $("#defender-panel").empty();
    $("#select-panel").html("<h1 class="+'text-center'+"> <strong>Select your Character</strong></h1>");
    $("#status-panel").empty();

    
    console.log("Done with Restarting Game");
  }

  $(".restart-button").on("click", function () {
    console.log("Restart Button Pressed");
    restartGame();
    $(".restart-button").hide();
 });

  function fighting() {
    console.log("Running fighting function");
    var temp = attacker.attackerPower;
    attacker.attackerPower = attacker.attackerPower - (defender.defenderPower / attackFactor);
    defender.defenderPower = defender.defenderPower - (temp / defendFactor);
    $("#" + attacker.powerSpan).html("<font color="+"white"+">"+attacker.attackerPower+"</font>");
    $("#" + defender.powerSpan).html("<font color="+"white"+">"+defender.defenderPower+"</font>");
    console.log("#" + attacker.powerSpan);
    console.log("Attacker Power Left--> " + attacker.attackerPower);
    console.log("Defender Power Left--> " + defender.defenderPower);

    if ((attacker.attackerPower <= 0) && (defender.defenderPower >= 0)) {
      attacker.attackerWin = false;
      defender.defenderWin = true;
      console.log(attacker.attackerName + "--> LOSER");
      $("#status-panel").html("<h1 class="+'text-center'+"> <strong>You Lost the combat. <br> Press Restart if you want to play again</strong></h1>");
      audioElement.pause();
      imperialSongElement.play();   
      $(".restart-button").show();
    }
    else if ((attacker.attackerPower >= 0) && (defender.defenderPower <= 0)) {
      attacker.attackerWin = true;
      defender.defenderWin = false;
      console.log("Attacker Win: " + attacker.attackerWin);
      console.log("Defender Win: " + defender.defenderWin);

      console.log(attacker.attackerName + "--> WINNER");
      winCount++;

      attacker.attackerPower = attacker.attackerPower + attacker.currentPower;
      console.log("New Attack Power for: " + attacker.attackerName + "--> " + attacker.attackerPower);
      $("#" + attacker.powerSpan).html(attacker.attackerPower);
      if (winCount==3){
      $("#status-panel").html("<h1 class="+'text-center'+"> <strong>You defeted all your oponents <br> You WON!!!!</strong></h1>");
      audioElement.pause();
      starwarSongElement.play();
      }
      else{
      $("#status-panel").html("<h1 class="+'text-center'+"> <strong>You defeted your opponent. <br> Select another one</strong></h1>");
      }
      resetEnemies();
    }
  };



  // Player Buttons  - Event Detection

  $("#luke-button").on("click", function () {
    if (!playerSelection && !defenderSelection) {
      console.log("#### Selecting Character");
      console.log("Player Selection--> " + playerSelection);
      console.log("Defender Selection--> " + defenderSelection);
      playerSelection = true;
      attacker.attackerPower = player.lukePower;
      attacker.currentPower = attacker.attackerPower;
      attacker.attackerName = "luke";
      attacker.powerSpan = "luke-power";
      console.log("Selected Luke as Character. Power= " + attacker.attackerPower);
      console.log("Player Selection--> " + playerSelection);
      console.log("Defender Selection--> " + defenderSelection);
      playerSelected = $(".luke-card");
      $("#character-panel").append(playerSelected);
      $("#select-panel").html("<h1 class=" + "text-center" + "><strong>Select your Enemy to Attack</strong></h1>");
    }
    else if (playerSelection && !defenderSelection) {
      defenderSelection = true;
      defenderSelected = $(".luke-card");
      defender.defenderPower = player.lukePower;
      defender.currentPower = defender.defenderPower;
      defender.defenderName = "luke";
      defender.powerSpan = "luke-power";
      $("#defender-panel").append(defenderSelected);
      console.log("### Selecting Defender");
      console.log("Player Selection--> " + playerSelection);
      console.log("Defender Selection--> " + defenderSelection);
      console.log("Selected Luke as Defender. Power= " + defender.defenderPower);

    }
  });

  $("#yoda-button").on("click", function () {
    if (!playerSelection && !defenderSelection) {
      playerSelection = true;
      playerSelected = $(".yoda-card");
      attacker.attackerPower = player.yodaPower;
      attacker.currentPower = attacker.attackerPower;
      attacker.attackerName = "yoda";
      attacker.powerSpan = "yoda-power";
      $("#character-panel").append(playerSelected);
      console.log("#### Selecting Character");
      console.log("Player Selection--> " + playerSelection);
      console.log("Defender Selection--> " + defenderSelection);
      console.log("Selected Yoda as CharacterPower= " + attacker.attackerPower);
    }
    else if (playerSelection && !defenderSelection) {
      defenderSelection = true;
      defenderSelected = $(".yoda-card");
      defender.defenderPower = player.yodaPower;
      defender.currentPower = defender.defenderPower;
      defender.defenderName = "yoda";
      defender.powerSpan = "yoda-power";
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
      playerSelection = true;
      playerSelected = $(".chewbacca-card");
      attacker.attackerPower = player.chewbaccaPower;
      attacker.currentPower = attacker.attackerPower;
      attacker.attackerName = "chewbacca";
      attacker.powerSpan = "chewbacca-power";
      $("#character-panel").append(playerSelected);
      console.log("#### Selecting Character");
      console.log("Player Selection--> " + playerSelection);
      console.log("Defender Selection--> " + defenderSelection);
      console.log("Selected Chewbacca as Character" + attacker.attackerPower);
    }
    else if (playerSelection && !defenderSelection) {
      defenderSelection = true;
      defenderSelected = $(".chewbacca-card");
      defender.defenderPower = player.chewbaccaPower;
      defender.currentPower = defender.defenderPower;
      defender.defenderName = "chewbacca";
      defender.powerSpan = "chewbacca-power";
      $("#defender-panel").append(defenderSelected);
      console.log("### Selecting Defender");
      console.log("Player Selection--> " + playerSelection);
      console.log("Defender Selection--> " + defenderSelection);
      console.log("**** Selected Chewbacca as Defender");
    }
  })

  $("#stormtrooper-button").on("click", function () {
    if (!playerSelection && !defenderSelection) {
      playerSelection = true;
      playerSelected = $(".stormtrooper-card");
      attacker.attackerPower = player.stormtrooperPower;
      attacker.currentPower = attacker.attackerPower;
      attacker.attackerName = "stormtrooper";
      attacker.powerSpan = "stormtrooper-power";
      $("#character-panel").append(playerSelected);
      console.log("#### Selecting Character");
      console.log("Player Selection--> " + playerSelection);
      console.log("Defender Selection--> " + defenderSelection);
      console.log("Selected Stormtrooper as Character"+ attacker.attackerPower);
    }
    else if (playerSelection && !defenderSelection) {
      defenderSelection = true;
      defenderSelected = $(".stormtrooper-card");
      $("#defender-panel").append(defenderSelected);
      defender.defenderPower = player.stormtrooperPower;
      defender.currentPower = defender.defenderPower;
      defender.defenderName = "stormtrooper";
      defender.powerSpan = "stormtrooper-power";
      console.log("### Selecting Defender");
      console.log("Player Selection--> " + playerSelection);
      console.log("Defender Selection--> " + defenderSelection);
      console.log("**** Selected stormtrooper as Defender");
    }
  })

  // Attack Buttons  - Detection
  $(".attack-button").on("click", function () {
    if ((!attacker.attackerWin && !defender.defenderWin && defenderSelection)
      || (attacker.attackerWin && !defender.defenderWin && defenderSelection)) {
        $("#status-panel").html("<h1 class="+'text-center'+"> <strong>Keep Attacking!!!</h1>");
      console.log("Attacker WIN --> " + attacker.attackerWin);
      console.log("Defender WIN --> " + defender.defenderWin);
      console.log("Attack button pressed");
      console.log("Player Selected --> " + attacker.attackerName);
      console.log("Defender Selected --> " + defender.defenderName);
      fighting(attacker.attackerPower, defender.defenderPower);
    };
  });
})