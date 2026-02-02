let buttons = document.querySelectorAll(".Cell")
let resetButton = document.getElementById("ResetButton")

let playerTurn = "X"

function PlayerTurns () {
buttons.forEach(button => {
        button.addEventListener ("click", () => {
            if (playerTurn == "X") {
                button.innerHTML = "✕",
                button.disabled = true,
                playerTurn = "O"
            } else {
                button.innerHTML = "◯",
                button.disabled = true,
                playerTurn = "X"
            } checkWinnerX(), checkWinnerO();
    }); 
})
} PlayerTurns();

resetButton.addEventListener("click", () => {
    buttons.forEach(button => {
        button.innerHTML = "";
        button.disabled = false;
        winner.innerHTML = "Game started!";
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
    winner.innerHTML="X won this round. Click restart to start the next one.";
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

