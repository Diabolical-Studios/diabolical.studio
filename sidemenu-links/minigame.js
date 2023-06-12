function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  var draggedElement = document.getElementById(data);
  var target = ev.target;

  while (target.classList && !target.classList.contains("droppable")) {
    target = target.parentNode;
  }

  if (target.classList && target.classList.contains("droppable")) {
    target.innerText = draggedElement.innerText;
    checkGameResults();
  }
}

function checkGameResults() {
  var gameResults = document.getElementById("game-results");
  var div2Content = document.getElementById("div2").innerText;
  var div3Content = document.getElementById("div3").innerText;
  var div4Content = document.getElementById("div4").innerText;
  var selectedGameTypes = div2Content + " " + div3Content + " " + div4Content;

  if (div2Content && div3Content && div4Content) {
    gameResults.innerText = "You enjoy " + selectedGameTypes + " games.";
    showGameCards(selectedGameTypes);
  } else {
    gameResults.innerText = "";
    showGameCards("");
  }
}

document.querySelectorAll(".draggable").forEach(function (draggable) {
  draggable.addEventListener("dragstart", drag);
});

document.querySelectorAll(".dropzone").forEach(function (dropzone) {
  dropzone.addEventListener("drop", drop);
  dropzone.addEventListener("dragover", allowDrop);
});

function showGameCards(selectedGameTypes) {
  var cards = document.querySelectorAll(".card");

  cards.forEach(function (card) {
    var gameTypes = card.getAttribute("data-game-type");
    var display = "none";

    if (gameTypes) {
      var gameTypeArr = gameTypes.split(" ");
      if (gameTypeArr.some(function (type) { return selectedGameTypes.includes(type); })) {
        display = "block";
      }
    }

    card.style.display = display;
  });
}
