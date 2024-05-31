var p1roll = 5;
var p2roll = 5;
var rolling = false;
const matrix = [
  [0, 0, 0, 0, 1, 0, 0, 0, 0],
  [0, 0, 1, 0, 0, 0, 1, 0, 0],
  [0, 0, 1, 0, 1, 0, 1, 0, 0],
  [1, 0, 1, 0, 0, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 1, 0, 1, 1, 0, 1],
];

function announceWinner() {
  if (p1roll > p2roll) {
    document.querySelector(".t1").classList.remove("hidden");
    document.querySelector(".t2").classList.add("hidden");
    document.querySelector("h1").innerHTML = "PLAYER I WINS!!!";
  } else if (p1roll < p2roll) {
    document.querySelector(".t1").classList.add("hidden");
    document.querySelector(".t2").classList.remove("hidden");
    document.querySelector("h1").innerHTML = "PLAYER II    WINS!!!";
  } else {
    document.querySelector(".t1").classList.add("hidden");
    document.querySelector(".t2").classList.add("hidden");
    document.querySelector("h1").innerHTML = "DRAW! Roll Again!";
  }
  rolling = false;
}

function changeNumber() {
  var dotChange = document.querySelectorAll(".dice div");
  for (var i = 0; i < dotChange.length; i++) {
    dotChange[i].classList.remove("dot");
  }

  dotChange = document.querySelectorAll(".p1 div");
  for (var i = 0; i < dotChange.length; i++) {
    if (matrix[p1roll][i] === 1) {
      dotChange[i].classList.add("dot");
    }
  }

  dotChange = document.querySelectorAll(".p2 div");
  for (var i = 0; i < dotChange.length; i++) {
    if (matrix[p2roll][i] === 1) {
      dotChange[i].classList.add("dot");
    }
  }
}

function roll() {
    if(rolling === true) {return;}
    rolling = true
  for (let tension = 0; tension < 10; tension++) {
    setTimeout(function() {
      p1roll = Math.floor(Math.random() * 6);
      p2roll = Math.floor(Math.random() * 6);
      changeNumber();
      if (tension === 9) {
        announceWinner();
      }
    }, tension * tension * 50);
  }
}

window.onload = changeNumber;
