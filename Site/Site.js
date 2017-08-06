/* --------------------------------------------------------------------------------------------------------
                    GLOBAL VARIABLES
-------------------------------------------------------------------------------------------------------- */

var playImpro = false;
var idPeriod = 0;
var periodWordings = ['Première période', 'Seconde période', 'Période n°1', 'Période n°2', 'Période n°3', 'Période T = 1/f'];

/* --------------------------------------------------------------------------------------------------------
                    GLOBAL FUNCTIONS
-------------------------------------------------------------------------------------------------------- */

function add(score) {
  score = Number(score)+1;
  return score;
}

function substract(score) {
  score = Number(score)-1;
  return score;
}

function countdown(elementMin, elementSec)
{
    var timeLeft = Number(elementMin.innerHTML) * 60 + Number(elementSec.innerHTML) - 1;

    if (timeLeft >= 0)
    {
        var minutes = Math.floor(timeLeft / 60);
        var aff_min = minutes;
        var secondes = Math.floor(timeLeft -  minutes * 60);
        var aff_sec = secondes;

        if (minutes < 10) {
          aff_min = "0" + aff_min;
        }
        if (secondes < 10) {
          aff_sec = "0" + aff_sec;
        }

        elementMin.innerHTML = aff_min;
        elementSec.innerHTML = aff_sec;
    }

    if (playImpro)
      var actualisation = setTimeout(function(){countdown(elementMin, elementSec);}, 1000);
}

/* --------------------------------------------------------------------------------------------------------
                                  Team 1
                              Event listeners
                    Score "Add & Sub" triangles display
-------------------------------------------------------------------------------------------------------- */

document.getElementById("subST1").addEventListener('mouseenter', function(){
  document.getElementById("subST1").style.opacity = "0.15";
}, false);
document.getElementById("subST1").addEventListener('mouseout', function(){
  document.getElementById("subST1").style.opacity = "0";
}, false);

document.getElementById("addST1").addEventListener('mouseenter', function(){
  document.getElementById("addST1").style.opacity = "0.15";
}, false);
document.getElementById("addST1").addEventListener('mouseout', function(){
  document.getElementById("addST1").style.opacity = "0";
}, false);

/* --------------------------------------------------------------------------------------------------------
                                  Team 2
                              Event listeners
                    Score "Add & Sub" triangles display
-------------------------------------------------------------------------------------------------------- */

document.getElementById("subST2").addEventListener('mouseenter', function(){
  document.getElementById("subST2").style.opacity = "0.15";
}, false);
document.getElementById("subST2").addEventListener('mouseout', function(){
  document.getElementById("subST2").style.opacity = "0";
}, false);

document.getElementById("addST2").addEventListener('mouseenter', function(){
  document.getElementById("addST2").style.opacity = "0.15";
}, false);
document.getElementById("addST2").addEventListener('mouseout', function(){
  document.getElementById("addST2").style.opacity = "0";
}, false);

/* --------------------------------------------------------------------------------------------------------
                                  Team 1
                              Event listeners
                          Score "Add & Sub" on click
-------------------------------------------------------------------------------------------------------- */

document.getElementById("subST1").onclick = function(){
  var score = Number(document.getElementById("sT1").innerHTML);
  if(score != 0)
    document.getElementById("sT1").innerHTML = substract(score);
}

document.getElementById("addST1").onclick = function(){
  document.getElementById("sT1").innerHTML = add(Number(document.getElementById("sT1").innerHTML));
}

/* --------------------------------------------------------------------------------------------------------
                                  Team 2
                              Event listeners
                          Score "Add & Sub" on click
-------------------------------------------------------------------------------------------------------- */

document.getElementById("subST2").onclick = function(){
  var score = Number(document.getElementById("sT2").innerHTML);
  if(score != 0)
    document.getElementById("sT2").innerHTML = substract(score);
}

document.getElementById("addST2").onclick = function(){
  document.getElementById("sT2").innerHTML = add(Number(document.getElementById("sT2").innerHTML));
}

/* --------------------------------------------------------------------------------------------------------
                            Type de l'improvisation
-------------------------------------------------------------------------------------------------------- */

document.getElementById("typeMixed").onclick = function(){
    document.getElementById("typeF").innerHTML = "<b>MIXTE</b>";
}

document.getElementById("typeComp").onclick = function(){
    document.getElementById("typeF").innerHTML = "<b>COMPARÉE</b>";
}

document.getElementById("typeMixed").addEventListener('mouseenter', function(){
  document.getElementById("typeMixed").style.opacity = "0.15";
}, false);
document.getElementById("typeMixed").addEventListener('mouseout', function(){
  document.getElementById("typeMixed").style.opacity = "0";
}, false);

document.getElementById("typeComp").addEventListener('mouseenter', function(){
  document.getElementById("typeComp").style.opacity = "0.15";
}, false);
document.getElementById("typeComp").addEventListener('mouseout', function(){
  document.getElementById("typeComp").style.opacity = "0";
}, false);

/* --------------------------------------------------------------------------------------------------------
                            Vérification automatiques
                              des valeurs des champs
-------------------------------------------------------------------------------------------------------- */

document.onmousemove = function() {
  /*Nombre de joueurs*/
  var nbP = document.getElementById("players").innerHTML;
  if(nbP == "I") {
    document.getElementById("players").innerHTML = "Joueurs <b>ILLIMITÉS</b>";
  }

  /*Catégorie*/
  var c = document.getElementById("category").innerHTML;
  if(c == "L") {
    document.getElementById("category").innerHTML = "Catégorie <b>LIBRE</b>";
  }

  /*Durée de l'improvisation*/
  if(document.getElementById("minT").innerHTML == ""){
    document.getElementById("minT").innerHTML = "00";
  }

  if(document.getElementById("secT").innerHTML == ""){
    document.getElementById("secT").innerHTML = "00";
  }

  /*Durée de la période*/
  if(document.getElementById("minTP").innerHTML == ""){
    document.getElementById("minTP").innerHTML = "00";
  }

  if(document.getElementById("secTP").innerHTML == ""){
    document.getElementById("secTP").innerHTML = "00";
  }
}

document.onkeydown = function() {
  /*Nombre de joueurs*/
  var nbP = document.getElementById("players").innerHTML;
  if(nbP == "I") {
    document.getElementById("players").innerHTML = "Joueurs <b>ILLIMITÉS</b>";
  }

  /*Catégorie*/
  var c = document.getElementById("category").innerHTML;
  if(c == "L") {
    document.getElementById("category").innerHTML = "Catégorie <b>LIBRE</b>";
  }
 }

document.onkeyup = function() {
  /*Durée de l'improvisation*/
  var min = document.getElementById("minT").innerHTML;
  if(min == ""){
    document.getElementById("minT").innerHTML = "00";
  } else {
    if(isNaN(min)){
      document.getElementById("minT").innerHTML = "00";
    }
  }

  var sec = document.getElementById("secT").innerHTML;
  if(sec == ""){
    document.getElementById("secT").innerHTML = "00";
  } else {
    if(isNaN(sec)){
      document.getElementById("secT").innerHTML = "00";
    }
  }

  /*Durée de la période*/
  var minP = document.getElementById("minTP").innerHTML;
  if(minP == ""){
    document.getElementById("minTP").innerHTML = "00";
  } else {
    if(isNaN(min)){
      document.getElementById("minTP").innerHTML = "00";
    }
  }

  var secP = document.getElementById("secTP").innerHTML;
  if(secP == ""){
    document.getElementById("secTP").innerHTML = "00";
  } else {
    if(isNaN(secP)){
      document.getElementById("secTP").innerHTML = "00";
    }
  }
}

/* --------------------------------------------------------------------------------------------------------
                            Durée de l'improvisation
-------------------------------------------------------------------------------------------------------- */

document.getElementById("minT").onclick = function(){
  if(document.getElementById("minT").innerHTML == "00")
    document.getElementById("minT").innerHTML = "";
}

document.getElementById("secT").onclick = function(){
  if(document.getElementById("secT").innerHTML == "00")
    document.getElementById("secT").innerHTML = "";
}

document.getElementById("play").onclick = function(){
  if(!playImpro){
    playImpro = true;
    countdown(document.getElementById("minT"), document.getElementById("secT"));
  }
}

document.getElementById("pause").onclick = function(){
  if(playImpro){
    playImpro = false;
  }
}

document.getElementById("play").addEventListener('mouseenter', function(){
  document.getElementById("play").style.opacity = "0.15";
}, false);
document.getElementById("play").addEventListener('mouseout', function(){
  document.getElementById("play").style.opacity = "0";
}, false);

document.getElementById("pause").addEventListener('mouseenter', function(){
  document.getElementById("pause").style.opacity = "0.15";
}, false);
document.getElementById("pause").addEventListener('mouseout', function(){
  document.getElementById("pause").style.opacity = "0";
}, false);


/* --------------------------------------------------------------------------------------------------------
                            Période
-------------------------------------------------------------------------------------------------------- */

document.getElementById("nextPeriodWording").onclick = function(){
  if(idPeriod != 5)
    idPeriod += 1;
  else
    idPeriod = 0;
  document.getElementById("wording").innerHTML = periodWordings[idPeriod];
}

document.getElementById("nextPeriodWording").addEventListener('mouseenter', function(){
  document.getElementById("nextPeriodWording").style.opacity = "0.15";
}, false);
document.getElementById("nextPeriodWording").addEventListener('mouseout', function(){
  document.getElementById("nextPeriodWording").style.opacity = "0";
}, false);

document.getElementById("previousPeriodWording").onclick = function(){
  if(idPeriod != 0)
    idPeriod -= 1;
  else
    idPeriod = 5;
  document.getElementById("wording").innerHTML = periodWordings[idPeriod];
}

document.getElementById("previousPeriodWording").addEventListener('mouseenter', function(){
  document.getElementById("previousPeriodWording").style.opacity = "0.15";
}, false);
document.getElementById("previousPeriodWording").addEventListener('mouseout', function(){
  document.getElementById("previousPeriodWording").style.opacity = "0";
}, false);

/* --------------------------------------------------------------------------------------------------------
                            Durée de la période
-------------------------------------------------------------------------------------------------------- */

document.getElementById("playP").onclick = function(){
  if(!playImpro){
    playImpro = true;
    countdown(document.getElementById("minTP"), document.getElementById("secTP"));
  }
}

document.getElementById("pauseP").onclick = function(){
  if(playImpro){
    playImpro = false;
  }
}

document.getElementById("playP").addEventListener('mouseenter', function(){
  document.getElementById("playP").style.opacity = "0.15";
}, false);
document.getElementById("playP").addEventListener('mouseout', function(){
  document.getElementById("playP").style.opacity = "0";
}, false);

document.getElementById("pauseP").addEventListener('mouseenter', function(){
  document.getElementById("pauseP").style.opacity = "0.15";
}, false);
document.getElementById("pauseP").addEventListener('mouseout', function(){
  document.getElementById("pauseP").style.opacity = "0";
}, false);

document.getElementById("minTP").onclick = function(){
  if(document.getElementById("minTP").innerHTML == "00")
    document.getElementById("minTP").innerHTML = "";
}

document.getElementById("secTP").onclick = function(){
  if(document.getElementById("secTP").innerHTML == "00")
    document.getElementById("secTP").innerHTML = "";
}

 /* --------------------------------------------------------------------------------------------------------
                               Reset : Changement d'improvisation
 -------------------------------------------------------------------------------------------------------- */

 document.getElementById("reset").onclick = function(){
     document.getElementById("typeF").innerHTML = "-";
     document.getElementById("theme").innerHTML = "";
     document.getElementById("players").innerHTML = "";
     document.getElementById("category").innerHTML = "";
     document.getElementById("minT").innerHTML = "";
     document.getElementById("secT").innerHTML = "";
 }

 document.getElementById("reset").addEventListener('mouseenter', function(){
   document.getElementById("reset").style.opacity = "0.30";
 }, false);
 document.getElementById("reset").addEventListener('mouseout', function(){
   document.getElementById("reset").style.opacity = "0";
 }, false);
