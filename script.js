let buttons = document.querySelectorAll(".Cell")
let resetButton = document.getElementById("ResetButton")
let clearBoard = document.getElementById("ClearBoard")
let playerTurn = "X"
let currentTurn = document.getElementById("CurrentTurnSymbol")
let resetScores = document.getElementById("ResetScores")
let xscore = document.getElementById("X-Score")
let oscore = document.getElementById("O-Score")

currentTurn.innerHTML = playerTurn

function PlayerTurns () {
buttons.forEach(button => {
        button.addEventListener ("click", () => {
            if (playerTurn == "X") {
                button.innerHTML = "✕",
                button.disabled = true,
                playerTurn = "O"
                currentTurn.innerHTML = playerTurn
            } else {
                button.innerHTML = "◯",
                button.disabled = true,
                playerTurn = "X"
                currentTurn.innerHTML = playerTurn
            } checkWinnerX(), checkWinnerO(); checkDraw();
    }); 
})
} PlayerTurns();

resetScores.addEventListener("click", () => {
    xscore.innerHTML = 0;
    oscore.innerHTML = 0;
    winner.innerHTML = "The Scores have been reset"
})

clearBoard.addEventListener("click", () => {
    buttons.forEach(button => {
        button.innerHTML = "";
        button.disabled = false;
        winner.innerHTML = "Board cleared"
    })
})

resetButton.addEventListener("click", () => {
    buttons.forEach(button => {
        button.innerHTML = "";
        button.disabled = false;
        currentTurn.innerHTML = playerTurn
        if (playerTurn == "X") {
            playerTurn = "O"
            currentTurn.innerHTML = playerTurn
            winner.innerHTML = "Turn switched to ◯";
        } else {
            playerTurn = "X"
            currentTurn.innerHTML = playerTurn
            winner.innerHTML = "Turn switched to ✕"
        }
    });
});

let cell1 = document.getElementById("cell1");
let cell2 = document.getElementById("cell2");
let cell3 = document.getElementById("cell3");
let cell4 = document.getElementById("cell4");
let cell5 = document.getElementById("cell5");
let cell6 = document.getElementById("cell6");
let cell7 = document.getElementById("cell7");
let cell8 = document.getElementById("cell8");
let cell9 = document.getElementById("cell9");
let winner = document.getElementById("WinnerDisplay");

function checkWinnerX() {
if (cell1.textContent == "✕" && cell2.textContent == "✕" && cell3.textContent == "✕" || 
    cell4.textContent == "✕" && cell5.textContent == "✕" && cell6.textContent == "✕" ||
    cell7.textContent == "✕" && cell8.textContent == "✕" && cell9.textContent == "✕" ||
    cell1.textContent == "✕" && cell4.textContent == "✕" && cell7.textContent == "✕" ||
    cell2.textContent == "✕" && cell5.textContent == "✕" && cell8.textContent == "✕" ||
    cell3.textContent == "✕" && cell6.textContent == "✕" && cell9.textContent == "✕" ||
    cell1.textContent == "✕" && cell5.textContent == "✕" && cell9.textContent == "✕" ||
    cell3.textContent == "✕" && cell5.textContent == "✕" && cell7.textContent == "✕"
) {
    winner.innerHTML="X won this round. Clear the board and start the next round.";
    let xscore = document.getElementById("X-Score");
    let xvalue = parseInt(xscore.innerHTML)+1;
    xscore.innerHTML = xvalue;
    }
}

function checkWinnerO() {
if (cell1.textContent == "◯" && cell2.textContent == "◯" && cell3.textContent == "◯" || 
    cell4.textContent == "◯" && cell5.textContent == "◯" && cell6.textContent == "◯" ||
    cell7.textContent == "◯" && cell8.textContent == "◯" && cell9.textContent == "◯" ||
    cell1.textContent == "◯" && cell4.textContent == "◯" && cell7.textContent == "◯" ||
    cell2.textContent == "◯" && cell5.textContent == "◯" && cell8.textContent == "◯" ||
    cell3.textContent == "◯" && cell6.textContent == "◯" && cell9.textContent == "◯" ||
    cell1.textContent == "◯" && cell5.textContent == "◯" && cell9.textContent == "◯" ||
    cell3.textContent == "◯" && cell5.textContent == "◯" && cell7.textContent == "◯"
) {
    winner.innerHTML="O won this round. Click restart to start the next one.";
    let oscore = document.getElementById("O-Score");
    let ovalue = parseInt(oscore.innerHTML)+1;
    oscore.innerHTML = ovalue;
    }
}

function checkDraw () {
    if (cell1.textContent != "" && cell2.textContent != "" &&
        cell3.textContent != "" && cell4.textContent != "" &&
        cell5.textContent != "" && cell6.textContent != "" &&
        cell7.textContent != "" && cell8.textContent != "" &&
        cell9.textContent != "") {
        winner.innerHTML = "It's a Draw! Clear the board to proceed."
        }
};

